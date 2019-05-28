/**
 * Use Effects for executing non-deterministic mutative actions. They are run asynchronously, and may be run concurrently
 * with other effects. Make sure to export one (and only one) Effect object from this file.
 */

import { Effect, Block, StatelessActionCallback } from 'demux'

const run: StatelessActionCallback = async (payload: any, block: Block, context: any) => {
  console.log(payload);
  console.log(block);
  // Put your effect code here
}

const effect: Effect = {
  run,
  actionType: 'kmealadminio::setuprest', // The actionType this effect will subscribe to
  deferUntilIrreversible: true, // If true, the effect will only run after the action becomes irreversible
}

export default effect
