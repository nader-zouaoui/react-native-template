import { I18nManager } from 'react-native';
import * as RNLocalize from 'react-native-localize';
import i18n from 'i18n-js';
import memoize from 'lodash.memoize';

const translationGetters = {
  en: () => require('./locales/en.json'),
};

const translate = memoize(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  <T extends any = string>(key: string, config?: i18n.TranslateOptions) =>
    i18n.t(key, config) as T,
  (key, config?: i18n.TranslateOptions) => (config ? key + JSON.stringify(config) : key),
);
const setI18nConfig = () => {
  const fallback = { languageTag: 'en', isRTL: false };
  const { languageTag, isRTL } = (RNLocalize.findBestAvailableLanguage(
    Object.keys(translationGetters),
  ) || fallback) as {
    languageTag: keyof typeof translationGetters;
    isRTL: boolean;
  };

  translate.cache.clear?.();
  I18nManager.forceRTL(isRTL);
  i18n.translations = { [languageTag]: translationGetters[languageTag]() };
  i18n.locale = languageTag;
};

setI18nConfig();
export default translate;
