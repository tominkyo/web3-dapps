import type {Dispatch, SetStateAction} from 'react';
import {BlockWithTransactions} from '@ethersproject/abstract-provider';

export enum CHAINS {
  ARWEAVE = 'arweave',
  AVALANCHE = 'avalanche',
  CELO = 'celo',
  CERAMIC = 'ceramic',
  NEAR = 'near',
  POLYGON = 'polygon',
  POLKADOT = 'polkadot',
  PYTH = 'pyth',
  SECRET = 'secret',
  SOLANA = 'solana',
  TEZOS = 'tezos',
  THE_GRAPH = 'the_graph',
  THE_GRAPH_NEAR = 'the_graph_near',
}

// Protocols Enum -----------------------
export type PROTOCOLS =
  | ARWEAVE_PROTOCOLS
  | AVALANCHE_PROTOCOLS
  | CELO_PROTOCOLS
  | CERAMIC_PROTOCOLS
  | NEAR_PROTOCOLS
  | POLKADOT_PROTOCOLS
  | POLYGON_PROTOCOLS
  | PYTH_PROTOCOLS
  | SECRET_PROTOCOLS
  | SOLANA_PROTOCOLS
  | TEZOS_PROTOCOLS
  | THE_GRAPH_PROTOCOLS
  | THE_GRAPH_NEAR_PROTOCOLS
  | ARWEAVE_PROTOCOLS;

export enum THE_GRAPH_NEAR_PROTOCOLS {
  GRAPHQL = 'GRAPHQL',
}

export enum THE_GRAPH_PROTOCOLS {
  GRAPHQL = 'GRAPHQL',
}

export enum AVALANCHE_PROTOCOLS {
  RPC = 'RPC',
}

export enum CELO_PROTOCOLS {
  RPC = 'RPC',
}

export enum SECRET_PROTOCOLS {
  RPC = 'RPC',
  LCD = 'LCD',
}

export enum NEAR_PROTOCOLS {
  RPC = 'RPC',
}

export enum TEZOS_PROTOCOLS {
  RPC = 'RPC',
}

export enum POLYGON_PROTOCOLS {
  RPC = 'RPC',
  JSON_RPC = 'JSON_RPC',
  WS = 'WS',
}

export enum POLKADOT_PROTOCOLS {
  RPC = 'RPC',
  WS = 'WS',
}

export enum PYTH_PROTOCOLS {
  RPC = 'RPC',
  WS = 'WS',
}

export enum SOLANA_PROTOCOLS {
  RPC = 'RPC',
  WS = 'WS',
}

export enum ARWEAVE_PROTOCOLS {
  RPC = 'RPC',
}

// BlockChain Providers -----------------------
export enum CHAIN_PROVIDERS {
  ALCHEMY = 'ALCHEMY',
  INFURA = 'INFURA',
  PUBLIC = 'PUBLIC',
  LOCAL = 'LOCAL',
}

// NETWORKS -----------------------
export enum AVALANCHE_NETWORKS {
  TESTNET = 'Testnet',
}

export enum CELO_NETWORKS {
  TESTNET = 'Alfajores',
}

export enum SECRET_NETWORKS {
  MAINNET = 'MAINNET',
  TESTNET = 'pulsar-2',
}

export enum NEAR_NETWORKS {
  TESTNET = 'Testnet',
}

export enum TEZOS_NETWORKS {
  TESTNET = 'Hangzhounet',
}

export enum POLKADOT_NETWORKS {
  TESTNET = 'Westend',
}

export enum POLYGON_NETWORKS {
  TESTNET = 'Mumbai',
}

export enum PYTH_NETWORKS {
  MAINNET = 'mainnet-beta',
  TESTNET = 'testnet',
  DEVNET = 'devnet',
  LOCALNET = 'localnet',
}

export enum SOLANA_NETWORKS {
  MAINNET = 'mainnet-beta',
  DEVNET = 'devnet',
  TESTNET = 'testnet',
  LOCALNET = 'localnet',
}

export enum CERAMIC_NETWORKS {
  TESTNET = 'TESTNET',
}

export enum CERAMIC_PROTOCOLS {
  HTTP = 'HTTP',
}

export enum THE_GRAPH_NETWORKS {
  LOCALNET = 'localnet',
  STUDIO = 'studio',
}

export enum THE_GRAPH_NEAR_NETWORKS {
  HOSTED = 'hosted',
}

export enum ARWEAVE_NETWORKS {
  MAINNET = 'mainnet',
  TESTNET = 'TESTNET',
}

// -----------------------------
export type NETWORKS =
  | ARWEAVE_NETWORKS
  | AVALANCHE_NETWORKS
  | CELO_NETWORKS
  | TEZOS_NETWORKS
  | THE_GRAPH_NETWORKS
  | THE_GRAPH_NEAR_NETWORKS
  | CERAMIC_NETWORKS
  | NEAR_NETWORKS
  | POLKADOT_NETWORKS
  | POLYGON_NETWORKS
  | PYTH_NETWORKS
  | SECRET_NETWORKS
  | SOLANA_NETWORKS
  | TEZOS_NETWORKS
  | THE_GRAPH_NETWORKS;

// -----------------------------
export enum NETWORK {
  TESTNET,
  LOCALNET,
  MAINNET,
  DEVNET,
}

// -----------------------------
export type ChainType = {
  id: CHAINS;
  label: string;
  active: boolean;
  logoUrl: string;
  steps: StepType[];
  protocol: PROTOCOLS;
  network: NETWORKS;
};

export type ChainsType = {
  [key in CHAINS]: ChainType;
};

export type ChainPropT = {
  chain: ChainType;
  markdown: MarkdownForChainIdT;
};

export type StepType = {
  id: PROTOCOL_STEPS_ID;
  title: string;
  skippable?: boolean;
  isOneColumn?: boolean;
};

export enum UserActivity {
  PROTOCOL_CLICKED = 'PROTOCOL_CLICKED',
  TUTORIAL_STEP_VIEWED = 'TUTORIAL_STEP_VIEWED',
  STORAGE_CLEARED = 'STORAGE_CLEARED',
}

export type MarkdownForChainIdT = {
  [key in PROTOCOL_STEPS_ID]: string;
};

// Global State -----------------------------
export type GlobalStateT = {
  currentChainId?: CHAINS;
  protocols: ProtocolsStateT;
};

export type ProtocolsStateT = {
  [Key in CHAINS]: ProtocolStateT;
};

export type ProtocolStateT = {
  id: CHAINS;
  label: string;
  logoUrl: string;
  network: NETWORKS;
  protocol: PROTOCOLS;
  isActive: boolean;
  numberOfSteps: number;
  currentStepId: PROTOCOL_STEPS_ID;
  firstStepId: PROTOCOL_STEPS_ID;
  lastStepId: PROTOCOL_STEPS_ID;
  steps: ProtocolStepsT;
  innerState?: InnerStateT;
};

export type ProtocolStepT = {
  id: PROTOCOL_STEPS_ID;
  title: string;
  isSkippable: boolean;
  isOneColumn: boolean;
  isCompleted: boolean;
  previousStepId: PROTOCOL_STEPS_ID | null;
  nextStepId: PROTOCOL_STEPS_ID | null;
  position: number;
};

export type ProtocolStepsT = {
  [Key in PROTOCOL_STEPS_ID]: ProtocolStepT;
};

export type InnerStateT = {
  [Key in PROTOCOL_INNER_STATES_ID]?: string | null;
};

export type LocalStorageStateT = {
  [Key in CHAINS]: LocalStorageProtocolStateT;
};

export type LocalStorageProtocolStateT = {
  currentStepId: PROTOCOL_STEPS_ID;
  steps: {
    [Key in PROTOCOL_STEPS_ID]: {
      isCompleted: boolean;
    };
  };
  innerState?: InnerStateT;
};

export enum PROTOCOL_INNER_STATES_ID {
  SECRET = 'SECRET',
  PRIVATE_KEY = 'PRIVATE_KEY',
  PUBLIC_KEY = 'PUBLIC_KEY',
  ADDRESS = 'ADDRESS',
  CONTRACT_ID = 'CONTRACT_ID',
  MNEMONIC = 'MNEMONIC',
  ACCOUNT_ID = 'ACCOUNT_ID',
  PASSWORD = 'PASSWORD',
  EMAIL = 'EMAIL',
  PROGRAM_ID = 'PROGRAM_ID',
  GREETER = 'GREETER',
  METAMASK_NETWORK_NAME = 'METAMASK_NETWORK_NAME',
  DID = 'DID',
  USER_NAME = 'USER_NAME',
}

export enum PROTOCOL_STEPS_ID {
  PREFACE = 'PREFACE',
  FINAL = 'FINAL',
  EXPORT_TOKEN = 'EXPORT_TOKEN',
  IMPORT_TOKEN = 'IMPORT_TOKEN',
  SWAP_TOKEN = 'SWAP_TOKEN',
  CREATE_KEYPAIR = 'CREATE_KEYPAIR',
  ESTIMATE_FEES = 'ESTIMATE_FEES',
  ESTIMATE_DEPOSIT = 'ESTIMATE_DEPOSIT',
  QUERY_CHAIN = 'QUERY_CHAIN',
  RESTORE_ACCOUNT = 'RESTORE_ACCOUNT',
  FUND_ACCOUNT = 'FUND_ACCOUNT',
  GET_BALANCE = 'GET_BALANCE',
  TRANSFER_TOKEN = 'TRANSFER_TOKEN',
  SOLANA_CREATE_GREETER = 'SOLANA_CREATE_GREETER',
  PROJECT_SETUP = 'PROJECT_SETUP',
  CHAIN_CONNECTION = 'CHAIN_CONNECTION',
  CREATE_ACCOUNT = 'CREATE_ACCOUNT',
  DEPLOY_CONTRACT = 'DEPLOY_CONTRACT',
  GET_CONTRACT_VALUE = 'GET_CONTRACT_VALUE',
  SET_CONTRACT_VALUE = 'SET_CONTRACT_VALUE',
  INTRO = 'INTRO',
  LOGIN = 'LOGIN',
  BASIC_PROFILE = 'BASIC_PROFILE',
  CUSTOM_DEFINITION = 'CUSTOM_DEFINITION',
  GRAPH_NODE = 'GRAPH_NODE',
  HOSTED_SERVICE = 'HOSTED_SERVICE',
  SUBGRAPH_SCAFFOLD = 'SUBGRAPH_SCAFFOLD',
  SUBGRAPH_MANIFEST = 'SUBGRAPH_MANIFEST',
  SUBGRAPH_QUERY = 'SUBGRAPH_QUERY',
  SUBGRAPH_SCHEMA = 'SUBGRAPH_SCHEMA',
  SUBGRAPH_MAPPINGS = 'SUBGRAPH_MAPPINGS',
  PYTH_CONNECT = 'PYTH_CONNECT',
  PYTH_EXCHANGE = 'PYTH_EXCHANGE',
  PYTH_SOLANA_WALLET = 'PYTH_SOLANA_WALLET',
  PYTH_VISUALIZE_DATA = 'PYTH_VISUALIZE_DATA',
  PYTH_LIQUIDATE = 'PYTH_LIQUIDATE',
}

export type AlertT = 'success' | 'info' | 'warning' | 'error' | undefined;

// Polygon type
export type QueryT = {
  networkName: string;
  chainId: number;
  blockHeight: number;
  gasPriceAsGwei: string;
  blockInfo: BlockWithTransactions;
};

// NEAR type
export type CheckAccountIdT = {
  network: string;
  freeAccountId: string;
  setFreeAccountId: Dispatch<SetStateAction<string>>;
  setIsFreeAccountId: Dispatch<SetStateAction<boolean>>;
};
