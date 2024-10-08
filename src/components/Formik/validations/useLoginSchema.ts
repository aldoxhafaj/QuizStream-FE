import { useIntl } from '@quiz-stream/contexts/IntlContext';

import { useYup } from './useYup';

export const useLoginSchema = () => {
  const { Yup } = useYup();
  const { formatMessage } = useIntl();

  const loginSchema = {
    email: Yup.string()
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        formatMessage({
          id: 'schema.invalid.email',
          defaultMessage: 'Invalid email!',
        }),
      )
      .required(
        formatMessage({
          id: 'schema.required.email',
          defaultMessage: 'Email is required!',
        }),
      ),
    password: Yup.string()
      .required(
        formatMessage({
          id: 'schema.required.password',
          defaultMessage: 'Password is required!',
        }),
      )
      .min(
        6,
        formatMessage(
          {
            id: 'schema.minLength.password',
            defaultMessage: 'Password must be at least {minLength} characters!',
          },
          {
            minLength: 6,
          },
        ),
      )
      .matches(
        /[A-Z]/,
        formatMessage({
          id: 'schema.oneUppercaseLetter.password',
          defaultMessage:
            'Password must contain at least one uppercase letter!',
        }),
      ),
    checkbox: Yup.boolean()
      .oneOf(
        [true],
        formatMessage({
          id: 'schema.agreeOnTerms.checkbox',
          defaultMessage: 'You must accept the terms and conditions!',
        }),
      )
      .required(
        formatMessage({
          id: 'schema.agreeOnTerms.checkbox',
          defaultMessage: 'You must accept the terms and conditions!',
        }),
      ),
  };

  return Yup.object().shape(loginSchema);
};
