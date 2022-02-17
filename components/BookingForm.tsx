import { Box, Button, useToast } from '@chakra-ui/react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { FormikHelpers } from 'formik';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { boolean, number, object, ref, string } from 'yup';
import { useModalContext } from '../hooks/useContext';
import formatBooleanToString from '../utils/formatBooleanToString';

import { FormikStep, FormikStepper } from './shared/FormikStepper';
import CheckBoxControl from './shared/input/CheckBoxControl';
import FormControl from './shared/input/FormControl';
import GenderControl from './shared/input/GenderControl';
import InputControl from './shared/input/InputControl';
import RadioControl from './shared/input/RadioControl';

const qualityOptions = [
  'Loves Animals',
  'Loves Kids',
  'Loves Powers',
  'Loves (Or Hates) Surprises',
  'Good At Multitasking',
  'Funny',
  'Creative',
  'Optimistic',
];
const genderOption = ['He', 'She'];

const bdPersonSchema = object({
  bdPersonName: string().required('Birthday Person Name is required'),
  bdPersonGender: string().oneOf(genderOption).required(),
  bdPersonAge: number().required('Birthday Person Age is required'),
  bdPersonQuality: string().oneOf(qualityOptions).required(),
  bdPersonMentionAge: boolean().required(),
});

const bookingPersonSchema = object({
  bookingPersonName: string().required('Name is required'),
  bookingPersonEmail: string()
    .email('Email is not a valid email')
    .required('Email is required'),
  bookingPersonEmailConfirm: string()
    .oneOf([ref('bookingPersonEmail'), null], "Emails don't match")
    .required('Email confirmation is required'),
  bookingPersonAgree: boolean()
    .is([true], 'Please check user agreement')
    .required(),
});

const initialValues = {
  bdPersonName: '',
  bdPersonAge: '',
  bdPersonGender: genderOption[0],
  bdPersonQuality: qualityOptions[0],
  bdPersonMentionAge: true,
  bookingPersonName: '',
  bookingPersonEmail: '',
  bookingPersonEmailConfirm: '',
  bookingPersonAgree: false,
};

const cardOptions = {
  hidePostalCode: true,
  classes: {
    base: 'form-control',
    complete: 'form-control',
    empty: 'form-control',
  },
  style: {
    base: {
      backgroundColor: '#fff',
      fontSize: '18px',
      '::placeholder': {
        color: '#aab7c4',
      },
    },
    invalid: {
      color: '#9e2146',
    },
  },
};

type FormValues = typeof initialValues;

export type HandleSubmit = (
  values: FormValues,
  actions: FormikHelpers<FormValues>
) => void;

interface BookingFormProps {}

const BookingForm: React.FC<BookingFormProps> = (props) => {
  const [error, setError] = useState('');
  const [cardError, setCardError] = useState('');
  const stripe = useStripe();
  const elements = useElements();
  const toast = useToast();
  const router = useRouter();
  const { onDisclaimerModalOpen } = useModalContext();

  const handleSubmit: HandleSubmit = async (values, actions) => {
    if (!stripe || !elements || cardError) {
      return actions.setSubmitting(false);
    }

    const { error: backendError, clientSecret } = await fetch(
      '/api/create-payment',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formatBooleanToString(values)),
      }
    ).then((r) => r.json());

    if (backendError) {
      setError(backendError.message);
    } else {
      const cardElement = elements.getElement(CardElement)!;
      const { error } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
          billing_details: {
            name: values.bookingPersonName,
            email: values.bookingPersonEmail,
          },
          metadata: formatBooleanToString(values),
        },
      });

      if (error) {
        setError(error?.message!);
      } else {
        router.push({
          pathname: 'thankyou',
          query: {
            n: values.bookingPersonName,
          },
        });
        actions.resetForm();
        cardElement.clear();
      }
    }
    actions.setSubmitting(false);
  };

  useEffect(() => {
    if (error) {
      toast({
        status: 'error',
        title: error,
      });
    }
  }, [error, toast]);

  return (
    <FormikStepper initialValues={initialValues} onSubmit={handleSubmit}>
      <FormikStep validationSchema={bdPersonSchema}>
        <InputControl
          isRequired
          size='lg'
          name='bdPersonName'
          label="Birthday Person's Name"
          placeholder="Enter Birthday Person's Name"
        />
        <InputControl
          isRequired
          size='lg'
          name='bdPersonAge'
          type='number'
          label="Birthday Person's Age"
          placeholder="Enter Birthday Person's Age"
        />
        <CheckBoxControl colorScheme='red' name='bdPersonMentionAge' size='lg'>
          It's ok to mention the birthday person's age (recommended)
        </CheckBoxControl>
        <GenderControl name='bdPersonGender' />

        <RadioControl
          name='bdPersonQuality'
          label="Birthday Person's Selected Quality:"
          colorScheme='red'
          size='lg'
          options={qualityOptions.map((option) => ({
            label: option,
            value: option,
          }))}
        ></RadioControl>
      </FormikStep>
      <FormikStep validationSchema={bookingPersonSchema}>
        <InputControl
          isRequired
          size='lg'
          name='bookingPersonName'
          label='Your Name'
          placeholder='Enter Your Name'
        />
        <InputControl
          isRequired
          size='lg'
          name='bookingPersonEmail'
          type='email'
          label='Your Email'
          placeholder='Enter Your Email'
        />
        <InputControl
          isRequired
          size='lg'
          name='bookingPersonEmailConfirm'
          type='email'
          label='Confirm Email'
          placeholder='Confirm Your Email'
        />
        <Box>
          <FormControl
            isRequired
            isInvalid={!!cardError}
            formLabel='Card Details'
            errorMessage={cardError}
          >
            <Box bg='white' p='2' borderRadius='4'>
              <CardElement
                options={cardOptions}
                onChange={(e) => {
                  setCardError(e.error?.message ?? '');
                }}
              />
            </Box>
          </FormControl>
        </Box>
        <CheckBoxControl colorScheme='red' name='bookingPersonAgree' size='lg'>
          <Button
            onClick={onDisclaimerModalOpen}
            variant='unstyled'
            textDecoration='underline'
          >
            User agreement
          </Button>
        </CheckBoxControl>
      </FormikStep>
    </FormikStepper>
  );
};
export default BookingForm;
