import React from 'react';
import { FONT_SIZE } from 'constants/styleVariables';
import AntDesignIcon from 'components/icons/AntDesignIcon';
import { RenderIconIconName, RenderIconRender, RenderIconType } from './textFieldTypes';

export const shouldRenderIcon = (iconRender: RenderIconType): iconRender is RenderIconRender =>
  typeof (iconRender as RenderIconIconName).iconName === 'undefined';

export const getIconContent = (icon: RenderIconType) => {
  return shouldRenderIcon(icon) ? (
    icon.renderIcon
  ) : (
    <AntDesignIcon
      size={icon.iconSize ?? FONT_SIZE.body_1}
      name={icon.iconName}
      color={icon.iconColor}
      outline={icon.iconOutline}
    />
  );
};
