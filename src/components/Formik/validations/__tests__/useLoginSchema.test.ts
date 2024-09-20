import {
  FORMIK_VALIDATIONS_TRANSLATION_ID,
  ValidationsErrorType,
} from '@quiz-stream/components/Formik/validations/types';
import { useLoginSchema } from '@quiz-stream/components/Formik/validations/useLoginSchema';

type Scenario = [
  {
    email?: string;
    password?: string;
    errorID?: FORMIK_VALIDATIONS_TRANSLATION_ID;
  },
  boolean,
];

const scenarios: Scenario[] = [
  [
    {
      email: 'test@gmail.com',
      password: 'Password123',
      errorID: undefined,
    },
    true,
  ],
  [
    {
      email: 'test@gmail.c',
      password: 'Password123',
      errorID: FORMIK_VALIDATIONS_TRANSLATION_ID.SCHEMA_INAVLID_EMAIL,
    },
    false,
  ],
  [
    {
      email: 'test@example.com',
      password: 'password123',
      errorID:
        FORMIK_VALIDATIONS_TRANSLATION_ID.SCHEMA_ONE_UPPERCASE__LETTER_PASSWORD,
    },
    false,
  ],
  [
    {
      email: 'test@yahoo.com',
      password: undefined,
      errorID: FORMIK_VALIDATIONS_TRANSLATION_ID.SCHEMA_REQUIRED_PASSWORD,
    },
    false,
  ],
  [
    {
      email: undefined,
      password: 'Password123',
      errorID: FORMIK_VALIDATIONS_TRANSLATION_ID.SCHEMA_REQUIRED_EMAIL,
    },
    false,
  ],
  [
    {
      email: 'test@hotmail.com',
      password: 'Passw',
      errorID: FORMIK_VALIDATIONS_TRANSLATION_ID.SCHEMA_MIN_LENGTH_PASSWORD,
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
