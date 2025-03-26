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
  Pressable,
} from '@gluestack-ui/themed';

export type CustomeFields = {
  label: string;
  type: 'password' | 'text' | undefined;
  fieldType?: 'date-time' | 'text-area' | 'normal';
  value: string;
  setter?: Function;
  placeholder?: string;
  helperText?: string;
  error: string | null;
  isRequired?: boolean;
  onPress?: Function | null;
};

export type wantedField = {
  label: string;
  value: string;
  error: string | null;
};

export type wantedFields = wantedField[];

export type CustomeFieldsList = CustomeFields[];

const CustomeInputField = (props: CustomeFields) => {
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
            onChangeText={text => props.setter(props.label, 'value', text)}
            placeholder={props.placeholder}
          />
        </Textarea>
      ) : (
        <Pressable onPress={props.onPress}>
          <Input
            borderRadius={'$lg'}
            isReadOnly={props.fieldType === 'date-time'}
            isRequired={props.isRequired ?? false}>
            <InputField
              type={props.type}
              placeholder={props.placeholder}
              value={props.value}
              onChangeText={
                props.setter
                  ? text => props.setter(props.label, 'value', text)
                  : undefined
              }
              onPress={props.onPress}
            />
          </Input>
        </Pressable>
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
