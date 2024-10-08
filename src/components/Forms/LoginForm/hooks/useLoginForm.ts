import { useLoginSchema } from '@quiz-stream/components/Formik';
import {
  LoginFormValues,
  UseLoginFormProps,
} from '@quiz-stream/components/Forms/LoginForm/types';
import { useFormik } from 'formik';

const NOT_CHECKED = false;
export const useLoginForm = ({ onSubmit }: UseLoginFormProps) => {
  const loginSchema = useLoginSchema();

  const formik = useFormik<LoginFormValues>({
    initialValues: {
      email: '',
      password: '',
      checkbox: NOT_CHECKED,
    },
    validationSchema: loginSchema,
    validateOnMount: true,
    onSubmit,
  });

  return { formik };
};
