import { boolean, number, object, ref, string } from 'yup';

const genderOption = ['He', 'She'];
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

const contactSchema = object({
  name: string().required(),
  email: string().email().required(),
  message: string().required(),
});

export { bdPersonSchema, bookingPersonSchema, contactSchema };
