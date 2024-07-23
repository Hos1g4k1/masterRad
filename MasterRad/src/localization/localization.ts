import {t} from 'i18next';
import type {TFunction} from 'i18next';
import {useTranslation} from 'react-i18next';

export const useLocalization = () => {
  const {t} = useTranslation(['translation']);

  return t;
};

export const translate: TFunction<'translation', undefined> = t;
