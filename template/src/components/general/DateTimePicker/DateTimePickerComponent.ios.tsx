import React, { useEffect } from 'react';
import RNDateTimePicker, { IOSNativeProps } from '@react-native-community/datetimepicker';
import AppModal from '../AppModal';
import AppText from '../AppText';
import { StyleSheet } from 'react-native';
import { BORDER_RADIUS, DEFAULT_SPACE } from 'constants/styleVariables';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styleGuide } from 'constants/styleGuide';
import { SharedDatePickerProps } from './types';

export type DateTimePickerComponentProps = Omit<IOSNativeProps, 'onChange'> &
  SharedDatePickerProps;

const DateTimePickerComponent: React.FC<DateTimePickerComponentProps> = ({
  isVisible,
  setIsVisible,
  onChange,
  iOSTitle,
  ...datePickerProps
}) => {
  const onDateChange = (_event: Event, date?: Date) => {
    onChange?.(date);
  };

  useEffect(() => {
    onChange(datePickerProps.value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onChange]);

  const { bottom } = useSafeAreaInsets();

  return (
    <AppModal
      isVisible={isVisible}
      closeModal={() => setIsVisible(false)}
      style={[localStyles.container, { paddingBottom: bottom }]}
    >
      {iOSTitle && (
        <AppText style={[styleGuide.body_1, localStyles.title]}>{iOSTitle}</AppText>
      )}
      <RNDateTimePicker
        {...datePickerProps}
        display="spinner"
        onChange={onDateChange}
        themeVariant="light"
      />
    </AppModal>
  );
};

const localStyles = StyleSheet.create({
  container: {
    marginTop: 'auto',
    borderTopRightRadius: BORDER_RADIUS.lg,
    borderTopLeftRadius: BORDER_RADIUS.lg,
  },
  title: {
    textAlign: 'center',
    marginTop: DEFAULT_SPACE,
  },
});

export default DateTimePickerComponent;
