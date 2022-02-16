import { Transaction } from '../types'
import { MoonbeamCall } from '@subql/contract-processors/dist/moonbeam';
import { BigNumber } from "ethers";

type Args = [BigNumber, Boolean, string, string] & { 
  tokenId: BigNumber; 
};

export async function handleClaimTokens(event: MoonbeamCall<Args>): Promise<void> {
  logger.info(event.args.tokenId)
}
