import { HStack, useToast, VStack } from '@chakra-ui/react';
import { Form, Formik, FormikConfig, FormikValues } from 'formik';
import React, { useMemo, useState } from 'react';
import ButtonOutline from './button/ButtonOutline';

interface FormikStepProps<T>
  extends Pick<FormikConfig<T>, 'validationSchema' | 'children'> {}

const FormikStep = <T extends {}>({ children }: FormikStepProps<T>) => {
  return <>{children}</>;
};

interface FormikStepperProps<T> extends FormikConfig<T> {}

const FormikStepper = <T extends {}>({
  children,
  ...props
}: FormikStepperProps<T>) => {
  const childrenArray = React.Children.toArray(children) as React.ReactElement<
    FormikStepProps<T>
  >[];

  const toast = useToast();
  const [step, setStep] = useState(0);
  const currentChild = childrenArray[step];

  function isLastStep() {
    return step === childrenArray.length - 1;
  }

  return (
    <Formik
      {...props}
      validationSchema={currentChild.props.validationSchema}
      onSubmit={(values, helpers) => {
        if (isLastStep()) {
          props.onSubmit(values, helpers);
        } else {
          setStep((s) => s + 1);
          helpers.setTouched({});
          helpers.setSubmitting(false);
        }
      }}
    >
      {({ isSubmitting, errors, touched }) => {
        return (
          <Form noValidate>
            {currentChild}
            <HStack mt='2'>
              {step > 0 ? (
                <ButtonOutline
                  disabled={isSubmitting}
                  color='blackAlpha.700'
                  py='6'
                  borderColor='blackAlpha.700'
                  bg='transparent'
                  w='full'
                  borderRadius='xl'
                  onClick={() => setStep((s) => s - 1)}
                >
                  Back
                </ButtonOutline>
              ) : null}

              <ButtonOutline
                py='6'
                borderColor='blackAlpha.700'
                bg='blackAlpha.700'
                borderRadius='xl'
                w='full'
                disabled={isSubmitting}
                isLoading={isSubmitting}
                type='submit'
                onClick={(e) => {
                  if (Object.keys(errors).length > 0) {
                    toast({
                      title: 'Please fill all the required fields',
                      status: 'error',
                    });
                  }
                }}
              >
                {isLastStep() ? 'Submit' : 'Next'}
              </ButtonOutline>
            </HStack>
          </Form>
        );
      }}
    </Formik>
  );
};

export { FormikStep, FormikStepper };
