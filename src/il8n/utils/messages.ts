import albMessages from '@quiz-stream/intl/generated/alb/messages.json';
import engMessages from '@quiz-stream/intl/generated/en/messages.json';

import { Language } from './enums';

export const MESSAGES: Record<Language, Record<string, string>> = {
  [Language.ALB]: albMessages,
  [Language.EN]: engMessages,
};
