import { ReactElement } from "react";
import { Form } from "semantic-ui-react";
import { CustomFormButton } from "./CustomFormButton";
import { CustomFormField } from "./CustomFormField";
import { CustomFormGroup } from "./CustomFormGroup";
import { CustomFormInput } from "./CustomFormInput";
import { CustomFormRadio } from "./CustomFormRadio";
import { CustomFormSelect } from "./CustomFormSelect";
import { CustomFormTextArea } from "./CustomFormTextArea";

interface CustomFormProps {
  children: ReactElement[];
}

const CustomForm = ({ children }: CustomFormProps) => {
  return <Form>{children}</Form>;
};

CustomForm.Input = CustomFormInput;
CustomForm.Group = CustomFormGroup;
CustomForm.TextArea = CustomFormTextArea;
CustomForm.Select = CustomFormSelect;
CustomForm.Radio = CustomFormRadio;
CustomForm.Field = CustomFormField;
CustomForm.Button = CustomFormButton;

export default CustomForm;
