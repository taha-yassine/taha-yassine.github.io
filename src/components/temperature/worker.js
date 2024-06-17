import { AutoModel, AutoTokenizer } from '@xenova/transformers';

const K = 10; // Top K tokens to sample from

class LLM {
    static name = 'Xenova/distilgpt2';

    static model = null;
    static tokenizer = null;

    constructor(name) {
        this.name = name;
    }

    static async getModel(progressCallback = null) {
        if (this.model === null) {
            this.model = await AutoModel.from_pretrained(this.name, {
                progress_callback: progressCallback
            });
        }

        return this.model;
    }

    static async getTokenizer(progressCallback = null) {
        if (this.tokenizer === null) {
            this.tokenizer = await AutoTokenizer.from_pretrained(this.name, {
                progress_callback: progressCallback
            });
        }

        return this.tokenizer;
    }
}

onmessage = async (e) => {
    // Generation is done manually until generation configs
    // are all implemented in the transformers library
    let tokenizer = await LLM.getTokenizer();
    let model = await LLM.getModel();

    let inputs = await tokenizer(e.data, {
        padding: true,
        truncation: true,
    });

    let outputs = await model(inputs);

    let logits = outputs.logits.slice(0,-1);
    
    let sorted = sort(logits.data)
    
    let topK = {values: sorted.values.slice(0,K), indices: sorted.indices.slice(0,K)};

    // Insert a dimension for batch decoding
    let tokens = tokenizer.batch_decode(topK.indices.map(index => [index]), { skip_special_tokens: true });
    self.postMessage({
        status: 'update',
        logits: topK.values,
        tokens: tokens
    });
}

// Helper function to sort an array in descending
// order and return the original indices
function sort(arr) {
  const indices = Array.from(arr.keys());
  indices.sort((a, b) => arr[b] - arr[a]);
  const sortedValues = new Float32Array(indices.map(index => arr[index]));

  return {
    values: sortedValues,
    indices: indices
  };
}