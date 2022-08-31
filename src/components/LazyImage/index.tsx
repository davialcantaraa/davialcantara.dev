import { CSS } from '@stitches/react/types/css-util';
import Image, { ImageProps } from 'next/image';
import { useState } from 'react';
import { styled } from '../../../stitches.config';

interface LazyImageProps extends ImageProps {
  src: string;
  size: number;
  customCSS?: CSS;
}
const CustomImage = styled(Image, {
  transition: '0.7s ease',
  '&[data-image-loading="true"]': {
    filter: 'grayscale(100%) blur(40px)',
    transform: 'scale(1.1)',
  },
  '&[data-image-loading="false"]': {
    filter: 'grayscale(0) blur(0)',
    transform: 'scale(1)',
  },
});

export const LazyImage = ({ src, size, customCSS }: LazyImageProps) => {
  const [isImageLoading, setIsImageLoading] = useState(true);
  return (
    <CustomImage
      src={src}
      width={size}
      height={size}
      objectFit="cover"
      data-image-loading={isImageLoading}
      onLoadingComplete={() => setIsImageLoading(prevState => !prevState)}
      css={{ ...customCSS }}
    />
  );
};
