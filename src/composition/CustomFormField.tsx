import { FormField, FormFieldProps } from "semantic-ui-react";

interface CustomFormFieldProps extends FormFieldProps {}

export function CustomFormField(props: CustomFormFieldProps) {
  return <FormField {...props} />;
}
