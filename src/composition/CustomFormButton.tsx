import { FormButton, FormButtonProps } from "semantic-ui-react";

interface CustomFormButtonProps extends FormButtonProps {}

export function CustomFormButton(props: CustomFormButtonProps) {
  return <FormButton {...props} />;
}
