import { Transaction } from '../types'
import { MoonbeamCall } from '@subql/contract-processors/dist/moonbeam';
import { BigNumber } from "ethers";

type RespondArgs = [BigNumber, Boolean, string, string] & { 
  tokenId: BigNumber; 
  status: Boolean; 
  message: string;
  nickname: string;
};

export async function handleRespond(event: MoonbeamCall<RespondArgs>): Promise<void> {
  logger.info(event.args.tokenId)
}
