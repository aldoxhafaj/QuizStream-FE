export type LoginFormValues = {
  email: string;
  password: string;
};

export type LoginFormProps = {
  onSubmit: () => void;
};

export type UseLoginFormProps = LoginFormProps;
