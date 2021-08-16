import { Platform } from 'react-native';

export const platformIcon = (iconName: string) => {
  const prefix = Platform.OS === 'ios' ? 'ios-' : 'md-';

  return prefix + iconName;
};
