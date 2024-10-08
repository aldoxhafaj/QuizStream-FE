export type ValidationsErrorType = {
  errors: string[];
};

export enum FORMIK_VALIDATIONS_TRANSLATION_ID {
  SCHEMA_INAVLID_EMAIL = 'schema.invalid.email',
  SCHEMA_REQUIRED_EMAIL = 'schema.required.email',
  SCHEMA_REQUIRED_PASSWORD = 'schema.required.password',
  SCHEMA_MIN_LENGTH_PASSWORD = 'schema.minLength.password',
  SCHEMA_ONE_UPPERCASE__LETTER_PASSWORD = 'schema.oneUppercaseLetter.password',
  SCHEMA_AGREE_ON_TERMS_CHECKBOX = 'schema.agreeOnTerms.checkbox',
}
