import { useEffect, useState } from 'react';
import { Tooltip } from '../../styles/primitives/Tooltip';
import { Code, CustomCheckIcon, CustomCopyIcon } from './styles';

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
      isAsChild={false}
      containerCSS={{
        width: 'fit-content',
      }}
      onClickHandler={handleCopyToClipBoard}
    >
      <Code>
        {clipboardContent}
        {isCopied ? <CustomCheckIcon /> : <CustomCopyIcon />}
      </Code>
    </Tooltip>
  );
};
