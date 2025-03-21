import React from 'react';
import {
  FormControl,
  AlertCircleIcon,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlHelper,
  FormControlHelperText,
  FormControlLabel,
  FormControlLabelText,
  Input,
  InputField,
  TextareaInput,
  Textarea,
} from '@gluestack-ui/themed';

type Props = {
  label: string;
  type: 'password' | 'text' | undefined;
  fieldType?: 'date-time' | 'text-area' | 'normal';
  value: string;
  setter?: Function;
  placeholder: string;
  helperText?: string;
  error: string | null;
  isRequired?: boolean;
  onPress?: Function;
};

const CustomeInputField = (props: Props) => {
  return (
    <FormControl
      my={'$1'}
      isInvalid={!!props.error}
      size="md"
      isDisabled={false}
      isReadOnly={false}
      isRequired={props.isRequired ?? false}>
      <FormControlLabel>
        <FormControlLabelText>{props.label}</FormControlLabelText>
      </FormControlLabel>
      <FormControlError mb={'$1'}>
        <FormControlErrorIcon as={AlertCircleIcon} />
        <FormControlErrorText>{props.error ?? ''}</FormControlErrorText>
      </FormControlError>
      {props.fieldType === 'text-area' ? (
        <Textarea borderRadius={'$lg'} size="md">
          <TextareaInput
            value={props.value}
            onChangeText={text => props.setter(text)}
            placeholder={props.placeholder}
          />
        </Textarea>
      ) : (
        <Input
          borderRadius={'$lg'}
          isReadOnly={props.fieldType === 'date-time'}>
          <InputField
            type={props.type}
            placeholder={props.placeholder}
            value={props.value}
            onChangeText={
              props.setter ? text => props.setter(text.trim()) : undefined
            }
            onPress={
              props.fieldType === 'date-time' ? props.onPress : undefined
            }
          />
        </Input>
      )}
      <FormControlHelper>
        {props.helperText && (
          <FormControlHelperText>{props.helperText}</FormControlHelperText>
        )}
      </FormControlHelper>
    </FormControl>
  );
};

export default CustomeInputField;
