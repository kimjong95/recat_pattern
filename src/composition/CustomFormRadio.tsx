import { FormRadio, FormRadioProps } from "semantic-ui-react";

interface CustomFormRadioProps extends FormRadioProps {}

export function CustomFormRadio(props: CustomFormRadioProps) {
  return <FormRadio {...props} />;
}
