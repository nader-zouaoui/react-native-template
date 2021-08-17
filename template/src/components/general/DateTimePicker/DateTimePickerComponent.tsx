import React, { useEffect } from 'react';
import RNDateTimePicker, {
  AndroidEvent,
  AndroidNativeProps,
} from '@react-native-community/datetimepicker';
import { SharedDatePickerProps } from './types';

export type DateTimePickerComponentProps = Omit<AndroidNativeProps, 'onChange'> &
  SharedDatePickerProps;

const DateTimePickerComponent: React.FC<DateTimePickerComponentProps> = ({
  isVisible,
  onChange,
  setIsVisible,
  ...datePickerProps
}) => {
  useEffect(() => {
    onChange(datePickerProps.value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onChange]);
  const onDateChange = (_event: AndroidEvent, date?: Date) => {
    setIsVisible(false);
    if (date) onChange?.(date);
  };

  if (!isVisible) {
    return null;
  }

  return <RNDateTimePicker {...datePickerProps} onChange={onDateChange} />;
};

export default DateTimePickerComponent;
