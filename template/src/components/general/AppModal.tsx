import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import Modal, { ModalProps } from 'react-native-modal';
import { useTheme } from '@react-navigation/native';

type AppModalProps = Partial<ModalProps> & {
  isVisible: boolean;
  closeModal?: () => void;
  style?: StyleProp<ViewStyle>;
  customOverlay?: JSX.Element;
};

const AppModal: React.FC<AppModalProps> = ({
  children,
  style,
  customOverlay,
  closeModal,
  ...modalProps
}) => {
  const { colors } = useTheme();

  return (
    <Modal
      hardwareAccelerated
      useNativeDriver
      avoidKeyboard
      propagateSwipe
      useNativeDriverForBackdrop
      onDismiss={closeModal}
      onBackButtonPress={closeModal}
      onBackdropPress={closeModal}
      {...modalProps}
      style={styles.modal}
    >
      {customOverlay}
      <View style={[{ backgroundColor: colors.card }, style]}>{children}</View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: { margin: 0 },
});

export default AppModal;
