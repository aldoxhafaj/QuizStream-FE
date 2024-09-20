import { useLoginSchema } from '@quiz-stream/components/Formik';
import { LoginFormValues } from '@quiz-stream/containers/login/types';
import { useFormik } from 'formik';

export const useLogin = () => {
  const loginSchema = useLoginSchema();

  const formik = useFormik<LoginFormValues>({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    validateOnMount: true,
    onSubmit: () => {
      //TODO handle login
    },
  });

  return { formik };
};
