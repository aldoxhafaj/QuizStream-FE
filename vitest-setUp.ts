vi.mock('@quiz-stream/utils/calculations/constants', () => ({
  WIDTH_RATIO: 0.85, // Set a mocked value for WIDTH_RATIO
  HEIGHT_RATIO: 0.66,
  SHORT_DIMENSION: 1080,
  GUIDELINE_BASE_WIDTH: 1920,
}));

vi.mock('@quiz-stream/contexts/IntlContext', () => ({
  useIntl: () => ({
    formatMessage: vi.fn(({ id }: { id: string }) => id),
  }),
}));
