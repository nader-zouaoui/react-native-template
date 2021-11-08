import englishLocale from './locales/en';
import LocalizedStrings from 'react-native-localization';

export const strings = new LocalizedStrings({
  en: englishLocale,
});

export const changeLanguage = async (locale: string) => {
  strings.setLanguage(locale);
};
