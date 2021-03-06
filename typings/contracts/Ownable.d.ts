/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { Arrayish, BigNumber, BigNumberish, Interface } from "ethers/utils";
import {
  TransactionOverrides,
  TypedEventDescription,
  TypedFunctionDescription
} from ".";

interface OwnableInterface extends Interface {
  functions: {
    transferOwnership: TypedFunctionDescription<{
      encode([_newOwner]: [string]): string;
    }>;
  };

  events: {
    OwnershipTransferred: TypedEventDescription<{
      encodeTopics([previousOwner, newOwner]: [
        string | null,
        string | null
      ]): string[];
    }>;
  };
}

export class Ownable extends Contract {
  connect(signerOrProvider: Signer | Provider | string): Ownable;
  attach(addressOrName: string): Ownable;
  deployed(): Promise<Ownable>;

  on(event: EventFilter | string, listener: Listener): Ownable;
  once(event: EventFilter | string, listener: Listener): Ownable;
  addListener(eventName: EventFilter | string, listener: Listener): Ownable;
  removeAllListeners(eventName: EventFilter | string): Ownable;
  removeListener(eventName: any, listener: Listener): Ownable;

  interface: OwnableInterface;

  functions: {
    transferOwnership(
      _newOwner: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    getOwner(): Promise<string>;
  };

  filters: {
    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): EventFilter;
  };

  estimate: {
    transferOwnership(_newOwner: string): Promise<BigNumber>;
  };
}
