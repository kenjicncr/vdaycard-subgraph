import { Transaction } from '../types'
import { MoonbeamCall } from '@subql/contract-processors/dist/moonbeam';
import { BigNumber } from "ethers";
import { VDayCard } from '../types/models'

type SafeTransferFromVCardArgs = [string, string, BigNumber, string, string] & { 
  sender: string; 
  receiver: string; 
  tokenId: BigNumber;
  message: string;
  nickname: string;
};

export async function handleSafeTransferFrom(event: MoonbeamCall<SafeTransferFromVCardArgs>): Promise<void> {
  const { success, args } = event
  if(!success) return

  const _tokenIdStr = Number(args.tokenId).toString()

  const vCard = await VDayCard.get(_tokenIdStr)

  // if card already exists, do nothing for now.
  if(vCard) {

  } else {
    let newVCard = new VDayCard(_tokenIdStr)

    newVCard.message = args.message
    newVCard.nickname = args.nickname
    newVCard.sender = args.sender
    newVCard.receiver = args.receiver

    await newVCard.save()

    logger.info(`ADDED VCARD ${_tokenIdStr}`)
  }
}
