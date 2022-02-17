import { Transaction } from '../types'
import { MoonbeamCall } from '@subql/contract-processors/dist/moonbeam';
import { BigNumber } from "ethers";

type RespondArgs = [BigNumber, boolean, string, string] & { 
  tokenId: BigNumber; 
  state: boolean; 
  message_: string;
  nickname_: string;
};

export async function handleRespond(event: MoonbeamCall<RespondArgs>): Promise<void> {
  logger.info(event.args.tokenId)
}
