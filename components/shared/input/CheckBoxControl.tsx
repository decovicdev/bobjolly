import { Checkbox, CheckboxProps } from '@chakra-ui/react';
import { useField } from 'formik';
import React from 'react';
import FormControl from './FormControl';

interface CheckBoxControlProps extends CheckboxProps {
  name: string;
  label?: string;
  isRequired?: boolean;
}

const CheckBoxControl: React.FC<CheckBoxControlProps> = (props) => {
  const { name, label, isRequired, ...rest } = props;
  const [field, meta] = useField(name);
  return (
    <FormControl
      formLabel={label}
      htmlFor={name}
      errorMessage={meta.error}
      isInvalid={!!meta.touched && !!meta.error}
      isRequired={isRequired}
    >
      <Checkbox {...rest} isChecked={field.value} {...field} color='white' />
    </FormControl>
  );
};

export default CheckBoxControl;
