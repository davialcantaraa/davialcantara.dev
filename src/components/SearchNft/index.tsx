import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import { EthereumIcon } from '../../../public/assets/EthereumIcon';
import { MaticIcon } from '../../../public/assets/MaticIcon';
import { Box } from '../../styles/primitives/Box';
import { CustomChevronDownIcon } from '../NftCollectionCard/styles';
import { CustomLoadingIcon } from '../ProfileConnectButton';
import {
  CustomSearchIcon,
  Form,
  Label,
  SearchInput,
  SelectNetwork,
  SelectNetworkContent,
  SelectNetworkIcon,
  SelectNetworkItem,
  SelectNetworkItemText,
  SelectNetworkTrigger,
  SelectNetworkValue,
  SelectNetworkViewport,
} from './styles';

export const SearchNft = () => {
  const [networkValue, setNetworkValue] = useState('Ethereum');
  const [isLoading, setIsLoading] = useState(false);
  const SearchInputRef = useRef<any>();
  const router = useRouter();

  const handleSearchForNfts = async (event: any) => {
    const walletAddress = event.target[0].value as string;
    if (walletAddress.match(/^0x[a-fA-F0-9]{40}$/)) {
      setIsLoading(true);
      // Ethereum address Regex
      await router.push(
        `/nfts/${walletAddress}?network=${networkValue.toLocaleLowerCase()}`,
      );
      setIsLoading(false);
    } else {
      SearchInputRef?.current?.setAttribute('data-invalid-address', true);
      setIsLoading(false);
    }
  };

  return (
    <Box
      css={{ width: '100%', alignItems: 'center', gap: '$3', margin: '$10 0' }}
    >
      <Label htmlFor="wallet">Search for a wallet address:</Label>
      <Form
        onSubmit={event => {
          event.preventDefault();
          handleSearchForNfts(event);
        }}
      >
        {isLoading ? (
          <CustomLoadingIcon
            css={{ size: '$6', position: 'absolute', marginLeft: '$2' }}
          />
        ) : (
          <CustomSearchIcon />
        )}
        <SearchInput
          id="wallet"
          type="text"
          ref={SearchInputRef}
          onChange={() => {
            SearchInputRef?.current?.removeAttribute('data-invalid-address');
          }}
        />
      </Form>
      <SelectNetwork value={networkValue} onValueChange={setNetworkValue}>
        <SelectNetworkTrigger>
          <SelectNetworkValue aria-label={networkValue} />
          <SelectNetworkIcon>
            <CustomChevronDownIcon />
          </SelectNetworkIcon>
        </SelectNetworkTrigger>
        <SelectNetworkContent>
          <SelectNetworkViewport>
            <SelectNetworkItem value="Ethereum">
              <EthereumIcon />
              <SelectNetworkItemText>Ethereum</SelectNetworkItemText>
            </SelectNetworkItem>
            <SelectNetworkItem value="polygon">
              <MaticIcon />
              <SelectNetworkItemText>Polygon</SelectNetworkItemText>
            </SelectNetworkItem>
          </SelectNetworkViewport>
        </SelectNetworkContent>
      </SelectNetwork>
    </Box>
  );
};
