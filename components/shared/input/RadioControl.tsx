import { Radio, RadioGroup, RadioGroupProps } from '@chakra-ui/react';
import { useField } from 'formik';
import React from 'react';
import FormControl from './FormControl';

interface RadioControlProps extends Omit<RadioGroupProps, 'children'> {
  name: string;
  label?: string;
  isRequired?: boolean;
  options: { label: string; value: string }[];
}

const RadioControl: React.FC<RadioControlProps> = (props) => {
  const { name, label, isRequired, options, ...rest } = props;
  const [field, meta] = useField(name);

  return (
    <FormControl
      formLabel={props.label}
      htmlFor={props.name}
      errorMessage={meta.error}
      isInvalid={!!meta.touched && !!meta.error}
      isRequired={props.isRequired}
    >
      <RadioGroup
        {...rest}
        {...field}
        color='white'
        d='flex'
        flexWrap='wrap'
        justifyContent='space-between'
        alignItems='center'
      >
        {options.map((option) => (
          <Radio
            flexBasis={{
              base: '100%',
              md: '45%',
            }}
            key={option.value}
            onChange={field.onChange}
            value={option.value}
          >
            {option.label}
          </Radio>
        ))}
      </RadioGroup>
    </FormControl>
  );
};
export default RadioControl;
