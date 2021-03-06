import { NextPage } from 'next';
import { useState } from 'react';
import { Alert, AlertIcon, Box } from '@chakra-ui/react';

import Container from '../components/shared/Container';
import { Body1, Title } from '../components/shared/typography';
import ContactForm, {
  FormValues,
  HandleSubmit,
} from '../components/ConntactForm';
import Head from 'next/head';
import FloatingWhatsApp from '../components/FloatingWhatsApp';

const Contact: NextPage = (props) => {
  const [err, setErr] = useState('');
  const [succ, setSucc] = useState('');

  const postData = async (values: FormValues) => {
    const options: RequestInit = {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    };
    const response = await fetch('/api/send-msg', options);
    return response.json();
  };

  const handleSubmit: HandleSubmit = async (values, actions) => {
    setErr('');
    setSucc('');
    try {
      const { error: backendError, message } = await postData(values);
      if (backendError) {
        setErr(backendError);
      } else {
        setSucc(message);
        actions.resetForm();
      }
    } catch (error: any) {
      setErr(error.message);
    } finally {
      actions.setSubmitting(false);
    }
  };

  return (
    <Container>
      <Head>
        <title>Bobjolly | Contact</title>
      </Head>
      <Box
        maxW='500px'
        fontWeight='bold'
        mx={{
          base: 'auto',
          lg: '0',
        }}
      >
        {err && (
          <Alert status='error' mb={4}>
            <AlertIcon />
            {err}
          </Alert>
        )}
        {succ && (
          <Alert status='success' mb={4}>
            <AlertIcon />
            {succ}
          </Alert>
        )}
        <Title textAlign='left'>Contact</Title>
        <Body1 textAlign='left' mb='8'>
          Facing any problem with your order? Or, just want to send me a
          message? <br />
          Whatever it is, I'm more than happy to help you. Just fill the form
          below.
        </Body1>
        <ContactForm handleSubmit={handleSubmit} />
      </Box>
      <FloatingWhatsApp />
    </Container>
  );
};

export default Contact;
