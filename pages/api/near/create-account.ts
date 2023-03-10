import type {NextApiRequest, NextApiResponse} from 'next';
import {configFromNetwork} from '@figment-near/lib';
import {connect} from 'near-api-js';

export default async function (
  req: NextApiRequest,
  res: NextApiResponse<string>,
) {
  const {freeAccountId, publicKey, network} = req.body;
  try {
    const config = configFromNetwork(network);
    const near = await connect(config);
    await near.createAccount(freeAccountId, publicKey);
    return res.status(200).json(freeAccountId);
  } catch (error) {
    let errorMessage = error instanceof Error ? error.message : 'Unknown Error';
    return res.status(500).json(errorMessage);
  }
}
