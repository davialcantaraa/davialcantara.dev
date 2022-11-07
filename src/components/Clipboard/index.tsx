import { Check, Copy } from 'phosphor-react';
import { useEffect, useState } from 'react';
import { Tooltip } from '../../styles/primitives/Tooltip';
import { Code } from './styles';

interface ClipboardProps {
  tooltipContent: string;
  clipboardContent: string;
}

export const Clipboard = ({
  tooltipContent,
  clipboardContent,
}: ClipboardProps) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyToClipBoard = () => {
    navigator.clipboard.writeText(tooltipContent);
    setIsCopied(true);
  };

  useEffect(() => {
    if (isCopied) {
      setTimeout(() => {
        setIsCopied(false);
      }, 5 * 1000); // 5 Seconds
    }
  }, [handleCopyToClipBoard]);

  return (
    <Tooltip
      content={`${isCopied ? 'Copied' : 'Copy'} ${tooltipContent}`}
      triggerCSS={{
        width: 'fit-content',
      }}
      contentCSS={{ background: '$secondaryGradient', color: '$primary' }}
      arrowCSS={{ fill: 'transparent' }}
      onClickHandler={handleCopyToClipBoard}
    >
      <Code>
        {clipboardContent}
        {isCopied ? <Check /> : <Copy />}
      </Code>
    </Tooltip>
  );
};
