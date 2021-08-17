export type SharedDatePickerProps = {
  setIsVisible: (newState: boolean) => void;
  isVisible: boolean;
  iOSTitle?: string;
  onChange: (date?: Date) => void;
};
