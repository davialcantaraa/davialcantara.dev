import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { CSS } from '@stitches/react';
import React from 'react';
import { keyframes, styled } from '../../../stitches.config';

interface TooltipProps {
  children: React.ReactNode;
  content: string;
  contentCSS?: CSS;
  arrowCSS?: CSS;
}

const TooltipProvider = TooltipPrimitive.Provider;
const TooltipElement = TooltipPrimitive.Root;
const TooltipTrigger = TooltipPrimitive.Trigger;

export const Tooltip = ({
  children,
  content,
  contentCSS,
  arrowCSS,
}: TooltipProps) => {
  const scaleIn = keyframes({
    '0%': { opacity: 0, transform: 'scale(0)' },
    '100%': { opacity: 1, transform: 'scale(1)' },
  });

  const StyledArrow = styled(TooltipPrimitive.Arrow, {
    fill: '$primary',
    ...arrowCSS,
  });

  const StyledContent = styled(TooltipPrimitive.Content, {
    borderRadius: '$3',
    padding: '10px 15px',
    fontSize: 15,
    lineHeight: 1,
    color: '$secondary',
    background: '$primary',
    transform: 'scale(1)',
    transformOrigin: 'top',
    boxShadow:
      'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
    '@media (prefers-reduced-motion: no-preference)': {
      transformOrigin: 'var(--radix-tooltip-content-transform-origin)',
      animation: `${scaleIn} 0.2s ease-out forwards`,
    },
    ...contentCSS,
  });

  return (
    <TooltipProvider delayDuration={20}>
      <TooltipElement>
        <TooltipTrigger asChild>
          <div>{children}</div>
        </TooltipTrigger>
        <StyledContent sideOffset={5}>
          <StyledArrow offset={7} />
          {content}
        </StyledContent>
      </TooltipElement>
    </TooltipProvider>
  );
};
