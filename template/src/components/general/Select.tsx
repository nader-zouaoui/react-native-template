import { useTheme } from '@react-navigation/native';
import AppText from 'components/general/AppText';
import IonicIcon from 'components/icons/IonicIcon';
import { styleGuide } from 'constants/styleGuide';
import { BORDER_RADIUS, DEFAULT_SPACE, SHADOWS } from 'constants/styleVariables';
import { SelectorOption } from 'models/utils';
import React, { useCallback, useEffect, useMemo, useRef } from 'react';
import {
  FlatList,
  Pressable,
  StyleProp,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from 'react-native';
import MaterialMenu, { MenuDivider, MenuItem } from 'react-native-material-menu';
import translate from 'translations/translate';
import Label from './Label';
import { textFieldStyles } from './TextField/textFieldStyles';

export type SelectProps<T> = {
  style?: StyleProp<ViewStyle>;
  items: SelectorOption<T>[];
  value: T;
  onChange: (value?: T) => void;
  hasError?: boolean;
  label?: string;
  labelStyle?: StyleProp<TextStyle>;
};

const Select = <T extends unknown>({
  style,
  items,
  value,
  onChange,
  hasError,
  labelStyle,
  label,
}: SelectProps<T>) => {
  const { colors } = useTheme();
  const menuRef = useRef<MaterialMenu>(null);

  const selectedValue = useMemo(() => {
    return items.find((el) => el.value === value);
  }, [items, value]);

  useEffect(() => {
    if (value && !selectedValue) onChange(undefined);
  }, [value, selectedValue, onChange]);

  const onItemPress = useCallback(
    (item: SelectorOption<T>) => {
      onChange(item.value);
      menuRef.current?.hide();
    },
    [onChange],
  );

  const MenuButton = useMemo(() => {
    return (
      <Pressable
        onPress={() => menuRef.current?.show()}
        style={[
          styles.button,
          styleGuide.row,
          styleGuide.alignCenter,
          styleGuide.spaceBetween,
          { backgroundColor: colors.card },
          hasError && { borderColor: colors.danger, shadowColor: colors.danger },

          style,
        ]}
      >
        <AppText
          style={[styles.buttonText, !selectedValue && { color: colors.textSecondary }]}
        >
          {selectedValue?.label ?? translate('misc.select')}
        </AppText>
        <IonicIcon name="chevron-down" />
      </Pressable>
    );
  }, [colors.card, colors.danger, colors.textSecondary, hasError, selectedValue, style]);

  return (
    <>
      {label && (
        <Label style={labelStyle} hasError={hasError}>
          {label}
        </Label>
      )}
      <MaterialMenu ref={menuRef} button={MenuButton} style={styles.flatlist}>
        <FlatList
          contentContainerStyle={styles.flatlistContent}
          ItemSeparatorComponent={MenuDivider}
          data={items}
          keyExtractor={({ label: itemLabel }) => itemLabel}
          renderItem={({ item }) => (
            <MenuItem
              onPress={() => onItemPress(item)}
              textStyle={styles.menuItemText}
              style={styles.menuItem}
            >
              <AppText style={styleGuide.caption}>{item.label}</AppText>
            </MenuItem>
          )}
        />
      </MaterialMenu>
    </>
  );
};

export default Select;

const styles = StyleSheet.create({
  button: {
    ...textFieldStyles.container,
    ...textFieldStyles.textField,
  },
  buttonText: {
    fontSize: textFieldStyles.textField.fontSize,
    fontFamily: 'Lato',
  },
  flatlist: {
    borderRadius: BORDER_RADIUS.lg,
    ...SHADOWS,
  },
  menuItem: {
    height: 'auto',
    paddingVertical: DEFAULT_SPACE * 0.75,
  },
  /* Weird iOS interaction with AppText */
  menuItemText: {
    fontWeight: undefined,
  },
  flatlistContent: {
    paddingVertical: DEFAULT_SPACE * 0.5,
  },
});
