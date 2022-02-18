import { Formik, FormikHelpers, Form as FormikForm } from 'formik';
import React from 'react';
import { contactSchema } from '../validation';
import ButtonPrimary from './shared/button/ButtonPrimary';

import Image from './shared/Image';
import InputControl from './shared/input/InputControl';
import TextareaControl from './shared/input/TextareaControl';

const initialValues = {
  name: '',
  email: '',
  message: '',
};

export type FormValues = typeof initialValues;

export type HandleSubmit = (
  values: FormValues,
  actions: FormikHelpers<FormValues>
) => void;

interface ContactFormProps {
  handleSubmit: HandleSubmit;
}

const ContactForm: React.FC<ContactFormProps> = ({ handleSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={contactSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => {
        return (
          <FormikForm noValidate>
            <InputControl
              labelColor='black'
              isRequired
              leftIcon={
                <Image boxSize='24px' src='/images/user.png' alt='user' />
              }
              size='lg'
              name='name'
              label='Name'
              placeholder='Enter name'
            />
            <InputControl
              labelColor='black'
              isRequired
              size='lg'
              name='email'
              label='Email'
              placeholder='Enter email'
              leftIcon={<Image src='/images/envelope.png' alt='user' />}
            />

            <TextareaControl
              labelColor='black'
              isRequired
              name='message'
              label='Message'
              leftIcon={<Image src='/images/envelope-open.png' alt='user' />}
              placeholder='Enter message'
              bg='white'
            />
            <ButtonPrimary
              isLoading={isSubmitting}
              disabled={isSubmitting}
              type='submit'
              bg='secondary'
              mt='4'
              w='full'
            >
              Submit
            </ButtonPrimary>
          </FormikForm>
        );
      }}
    </Formik>
  );
};

export default ContactForm;
