export type LoginFormValues = {
  email: string;
  password: string;
  checkbox: boolean;
};

export type LoginFormProps = {
  onSubmit: () => void;
};

export type UseLoginFormProps = LoginFormProps;
