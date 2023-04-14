import { FormTextArea, FormTextAreaProps } from "semantic-ui-react";

interface CustomFormTextArea extends FormTextAreaProps {}

export function CustomFormTextArea(props: CustomFormTextArea) {
  return <FormTextArea {...props} />;
}
