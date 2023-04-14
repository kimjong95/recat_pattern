import { FormInput, FormInputProps } from "semantic-ui-react";

interface CustomFormProps extends FormInputProps {}

export function CustomFormInput(props: CustomFormProps) {
  return <FormInput {...props} />;
}
