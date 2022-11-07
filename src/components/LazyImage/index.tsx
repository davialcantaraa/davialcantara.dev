import { CSS } from '@stitches/react/types/css-util';
import { ImageProps } from 'next/image';
import { styled } from '../../../stitches.config';

interface LazyImageProps extends ImageProps {
  src: string;
  size: number;
  customCSS?: CSS;
}
const CustomImage = styled('img', {
  objectFit: 'cover',
  transition: '0.7s ease',
  // '&[data-image-loading="true"]': {
  //   filter: 'grayscale(100%) blur(40px)',
  //   transform: 'scale(1.1)',
  // },
  // '&[data-image-loading="false"]': {
  //   filter: 'grayscale(0) blur(0)',
  //   transform: 'scale(1)',
  // },
});

export const LazyImage = ({ src, size, customCSS }: LazyImageProps) => {
  return (
    <CustomImage src={src} width={size} height={size} css={{ ...customCSS }} />
  );
};
