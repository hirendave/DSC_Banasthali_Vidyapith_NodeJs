const tf = require('@tensorflow/tfjs')

require('@tensorflow/tfjs-node')

import * as mobilenet from '@tensorflow-models/mobilenet';

const model = await mobilenet.load();