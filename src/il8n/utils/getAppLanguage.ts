import { fetchLocalItem } from '@quiz-stream/utils/index';
import { StorageKey } from '@quiz-stream/utils/storage/enums';

export const getAppLanguage = () => {
  const language = fetchLocalItem(StorageKey.LANGUAGE);

  return language;
};
