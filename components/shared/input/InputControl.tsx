import React from 'react';
import { useField } from 'formik';

import FormControl from './FormControl';
import Input, { InputProps } from './Input';

interface InputControlProps extends InputProps {
  name: string;
  label?: string;
  isRequired?: boolean;
  labelColor?: string;
}

const InputControl: React.FC<InputControlProps> = (props) => {
  const { name, label, labelColor, isRequired, ...rest } = props;
  const [field, meta] = useField(name);
  return (
    <FormControl
      formLabel={label}
      htmlFor={name}
      errorMessage={meta.error}
      isInvalid={!!meta.touched && !!meta.error}
      isRequired={isRequired}
      labelColor={labelColor}
    >
      <Input {...field} {...rest} />
    </FormControl>
  );
};
export default InputControl;
