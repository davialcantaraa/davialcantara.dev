import { CSS } from '@stitches/react';
import { ComponentType } from 'react';
import { styled } from '../../../stitches.config';

export const Icon = (iconElement: ComponentType<any>, css: CSS) => {
  const Icon = styled(iconElement, {
    ...css,
  });
  return Icon;
};
