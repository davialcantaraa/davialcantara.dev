import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import React from 'react';
import { keyframes, styled } from '../../stitches.config.js';

const scaleIn = keyframes({
  '0%': { opacity: 0, transform: 'scale(0)' },
  '100%': { opacity: 1, transform: 'scale(1)' },
});

const StyledContent = styled(TooltipPrimitive.Content, {
  borderRadius: '$3',
  padding: '10px 15px',
  fontSize: 15,
  lineHeight: 1,
  color: '$secondary',
  backgroundColor: '$primary',
  transform: 'scale(1)',
  transformOrigin: 'top',
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  '@media (prefers-reduced-motion: no-preference)': {
    transformOrigin: 'var(--radix-tooltip-content-transform-origin)',
    animation: `${scaleIn} 0.2s ease-out forwards`,
  },
});

const StyledArrow = styled(TooltipPrimitive.Arrow, {
  fill: '$primary',
});

interface TooltipProps {
  children: React.ReactNode;
  content: string;
}

const TooltipProvider = TooltipPrimitive.Provider;
const TooltipElement = TooltipPrimitive.Root;
const TooltipTrigger = TooltipPrimitive.Trigger;

export const Tooltip = ({ children, content }: TooltipProps) => {
  return (
    <TooltipProvider delayDuration={100}>
      <TooltipElement>
        <TooltipTrigger>{children}</TooltipTrigger>
        <StyledContent>
          <StyledArrow offset={7} />
          {content}
        </StyledContent>
      </TooltipElement>
    </TooltipProvider>
  );
};
