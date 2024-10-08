import {
  FORMIK_VALIDATIONS_TRANSLATION_ID,
  ValidationsErrorType,
} from '@quiz-stream/components/Formik/validations/types';
import { useLoginSchema } from '@quiz-stream/components/Formik/validations/useLoginSchema';

type Scenario = [
  {
    email?: string;
    password?: string;
    checkbox?: boolean;
    errorID?: FORMIK_VALIDATIONS_TRANSLATION_ID;
  },
  boolean,
];

const scenarios: Scenario[] = [
  [
    {
      email: 'test@gmail.com',
      password: 'Password123',
      checkbox: true,
      errorID: undefined,
    },
    true,
  ],
  [
    {
      email: 'test@gmail.c',
      password: 'Password123',
      checkbox: true,
      errorID: FORMIK_VALIDATIONS_TRANSLATION_ID.SCHEMA_INAVLID_EMAIL,
    },
    false,
  ],
  [
    {
      email: 'test@example.com',
      password: 'password123',
      checkbox: true,
      errorID:
        FORMIK_VALIDATIONS_TRANSLATION_ID.SCHEMA_ONE_UPPERCASE__LETTER_PASSWORD,
    },
    false,
  ],
  [
    {
      email: 'test@yahoo.com',
      password: undefined,
      checkbox: true,
      errorID: FORMIK_VALIDATIONS_TRANSLATION_ID.SCHEMA_REQUIRED_PASSWORD,
    },
    false,
  ],
  [
    {
      email: undefined,
      password: 'Password123',
      checkbox: true,
      errorID: FORMIK_VALIDATIONS_TRANSLATION_ID.SCHEMA_REQUIRED_EMAIL,
    },
    false,
  ],
  [
    {
      email: 'test@hotmail.com',
      password: 'Passw',
      checkbox: true,
      errorID: FORMIK_VALIDATIONS_TRANSLATION_ID.SCHEMA_MIN_LENGTH_PASSWORD,
    },
    false,
  ],
  [
    {
      email: 'test@test.com',
      password: 'Password123',
      checkbox: false,
      errorID: FORMIK_VALIDATIONS_TRANSLATION_ID.SCHEMA_AGREE_ON_TERMS_CHECKBOX,
    },
    false,
  ],
  [
    {
      email: 'test@outlook.com',
      password: 'Password123',
      checkbox: undefined,
      errorID: FORMIK_VALIDATIONS_TRANSLATION_ID.SCHEMA_AGREE_ON_TERMS_CHECKBOX,
    },
    false,
  ],
];

describe('test useLoginSchema', () => {
  it.each(scenarios)(
    'expected validation success of %s to be %s',
    (inputData, isValid) => {
      const errorMessages: Array<ValidationsErrorType> = [];

      try {
        const response = useLoginSchema().validateSync(inputData);
        if (isValid) {
          expect(response).toEqual(inputData);
        }
      } catch (e) {
        errorMessages.push(e as ValidationsErrorType);
        expect(errorMessages[0].errors[0]).toEqual(inputData.errorID);
      }
    },
  );
});
