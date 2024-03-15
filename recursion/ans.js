 const alldata =  require('./test1.json')

var data = JSON.stringify(alldata)
data = JSON.parse(data)



function generateSequence(graph, targetNode) {
    const sequence = [];
    let currentNode = targetNode;

    while (currentNode !== "4") {
        const node = graph[currentNode];
        const inputs = node.inputs;

        // Check if the current node is the target node
        if (currentNode === targetNode) {
            if (inputs.hasOwnProperty('images')) {
                sequence.push("Save the image with the filename prefix 'ComfyUI'");
                currentNode = inputs.images[0];
                continue;
            } else {
                throw new Error(`Unknown dependency type encountered for node ${currentNode}`);
            }
        }

        // Check dependencies and add to sequence
        if (inputs.hasOwnProperty('vae')) {
            sequence.push("Decode using a VAE");
            currentNode = inputs.vae[0];
        } else if (inputs.hasOwnProperty('samples')) {
            sequence.push("Sample data with specific configurations");
            currentNode = inputs.samples[0];
        } else if (inputs.hasOwnProperty('ckpt_name')) {
            sequence.push("Load a checkpoint");
            currentNode = inputs.ckpt_name;
        } else if (inputs.hasOwnProperty('positive') || inputs.hasOwnProperty('negative')) {
            sequence.push("Encode text using CLIP");
            currentNode = inputs.positive ? inputs.positive[0] : inputs.negative[0];
        } else if (inputs.hasOwnProperty('latent_image')) {
            sequence.push("Use an empty latent image");
            currentNode = inputs.latent_image[0];
        } else {
            throw new Error(`Unknown dependency type encountered for node ${currentNode}`);
        }
    }

    return sequence.reverse();
}

// Sample graph structure
const graph = {
    "3": { inputs: { model: ["4", 0], positive: ["6", 0], negative: ["7", 0], latent_image: ["5", 0] }, class_type: "KSampler" },
    "4": { inputs: { ckpt_name: "Realistic_Vision_V5.1.ckpt" }, class_type: "CheckpointLoaderSimple" },
    "5": { inputs: { width: 512, height: 512, batch_size: 1 }, class_type: "EmptyLatentImage" },
    "6": { inputs: { text: "beautiful scenery nature glass bottle landscape, , purple galaxy bottle,", clip: ["4", 1] }, class_type: "CLIPTextEncode" },
    "7": { inputs: { text: "text, watermark", clip: ["4", 1] }, class_type: "CLIPTextEncode" },
    "8": { inputs: { samples: ["3", 0], vae: ["4", 2] }, class_type: "VAEDecode" },
    "9": { inputs: { filename_prefix: "ComfyUI", images: ["8", 0] }, class_type: "SaveImage" }
};

// Target node
const targetNode = "9";

// Generate sequence of steps
try {
    const sequence = generateSequence(graph, targetNode);
    console.log("Sequence of steps:");
    sequence.forEach((step, index) => {
        console.log(`${index + 1}. ${step}`);
    });
} catch (error) {
    console.error("Error:", error.message);
}
