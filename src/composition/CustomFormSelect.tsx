import { FormSelect, FormSelectProps } from "semantic-ui-react";

interface CustomFormSelectProps extends FormSelectProps {}

export function CustomFormSelect(props: CustomFormSelectProps) {
  return <FormSelect {...props} />;
}
