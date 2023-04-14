import CustomForm from "./CustomForm";

const options = [
  { key: "m", text: "Male", value: "male" },
  { key: "f", text: "Female", value: "female" },
  { key: "o", text: "Other", value: "other" },
];

export function CompositionPatternForm() {
  //
  return (
    <CustomForm>
      <CustomForm.Field>
        <label>label</label>
        <CustomForm.Input />
      </CustomForm.Field>
      <CustomForm.Group widths="equal">
        <CustomForm.Input label="first" />
        <CustomForm.Input label="second" />
        <CustomForm.Select
          fluid
          label="Gender"
          options={options}
          placeholder="Gender"
        />
      </CustomForm.Group>
      <CustomForm.Group inline>
        <label>Size</label>
        <CustomForm.Radio label="Small" value="sm" />
        <CustomForm.Radio label="Medium" value="md" />
        <CustomForm.Radio label="Large" value="lg" />
      </CustomForm.Group>
      <CustomForm.TextArea
        label="About"
        placeholder="Tell us more about you..."
      />
      <CustomForm.Button>Submit</CustomForm.Button>
    </CustomForm>
  );
}
