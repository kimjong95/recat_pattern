import { FormGroup, FormGroupProps } from "semantic-ui-react";

interface CustomFormGroupProps extends FormGroupProps {}

export function CustomFormGroup(props: CustomFormGroupProps) {
  return <FormGroup {...props}>{props.children}</FormGroup>;
}
