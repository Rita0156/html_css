 const alldata =  require('./test1.json')

var data = JSON.stringify(alldata)
data = JSON.parse(data)



// function generateSequence(graph, targetNode) {
//     const sequence = [];
//     let currentNode = targetNode;

//     while (currentNode !== "4") {
//         const node = graph[currentNode];
//         const inputs = node.inputs;

//         // Check if the current node is the target node
//         if (currentNode === targetNode) {
//             if (inputs.hasOwnProperty('images')) {
//                 sequence.push("Save the image with the filename prefix 'ComfyUI'");
//                 currentNode = inputs.images[0];
//                 continue;
//             } else {
//                 throw new Error(`Unknown dependency type encountered for node ${currentNode}`);
//             }
//         }

//         // Check dependencies and add to sequence
//         if (inputs.hasOwnProperty('vae')) {
//             sequence.push("Decode using a VAE");
//             currentNode = inputs.vae[0];
//         } else if (inputs.hasOwnProperty('samples')) {
//             sequence.push("Sample data with specific configurations");
//             currentNode = inputs.samples[0];
//         } else if (inputs.hasOwnProperty('ckpt_name')) {
//             sequence.push("Load a checkpoint");
//             currentNode = inputs.ckpt_name;
//         } else if (inputs.hasOwnProperty('positive') || inputs.hasOwnProperty('negative')) {
//             sequence.push("Encode text using CLIP");
//             currentNode = inputs.positive ? inputs.positive[0] : inputs.negative[0];
//         } else if (inputs.hasOwnProperty('latent_image')) {
//             sequence.push("Use an empty latent image");
//             currentNode = inputs.latent_image[0];
//         } else {
//             throw new Error(`Unknown dependency type encountered for node ${currentNode}`);
//         }
//     }

//     return sequence.reverse();
// }

// // Sample graph structure
// const graph = {
//     "3": { inputs: { model: ["4", 0], positive: ["6", 0], negative: ["7", 0], latent_image: ["5", 0] }, class_type: "KSampler" },
//     "4": { inputs: { ckpt_name: "Realistic_Vision_V5.1.ckpt" }, class_type: "CheckpointLoaderSimple" },
//     "5": { inputs: { width: 512, height: 512, batch_size: 1 }, class_type: "EmptyLatentImage" },
//     "6": { inputs: { text: "beautiful scenery nature glass bottle landscape, , purple galaxy bottle,", clip: ["4", 1] }, class_type: "CLIPTextEncode" },
//     "7": { inputs: { text: "text, watermark", clip: ["4", 1] }, class_type: "CLIPTextEncode" },
//     "8": { inputs: { samples: ["3", 0], vae: ["4", 2] }, class_type: "VAEDecode" },
//     "9": { inputs: { filename_prefix: "ComfyUI", images: ["8", 0] }, class_type: "SaveImage" }
// };

// // Target node
// const targetNode = "9";

// // Generate sequence of steps
// try {
//     const sequence = generateSequence(graph, targetNode);
//     console.log("Sequence of steps:");
//     sequence.forEach((step, index) => {
//         console.log(`${index + 1}. ${step}`);
//     });
// } catch (error) {
//     console.error("Error:", error.message);
// }

// process of saving an image with the filename prefix "ComfyUI", which involves decoding using a VAE, sampling data with specific configurations, loading a checkpoint, encoding text using CLIP, and an empty latent image.


// const targetNode = "9"; 


// function findPath(nodeId, graph, visited = new Set()) {
//     console.log("Checking node:", nodeId);

//     // Base case: If the node is the starting point, return it
//     if (nodeId === "4") {
//         console.log("Found starting point:", nodeId);
//         return ["4"]; // Assuming "4" is the starting node
//     }

//     // Avoid infinite loop by checking visited nodes
//     if (visited.has(nodeId)) {
//         console.log("Already visited node:", nodeId);
//         return [];
//     }
//     visited.add(nodeId);

//     // Recursive case: Look for the input node and continue tracing back
//     for (const [node, properties] of Object.entries(graph)) {
//         for (const input of Object.values(properties.inputs)) {
//             const inputNode = Array.isArray(input) ? input[0] : input;
//             if (inputNode === nodeId) {
//                 console.log("Found input node:", inputNode, "for node:", node);
//                 const path = findPath(node, graph, visited);
//                 if (path.length > 0) {
//                     console.log("Path found:", [node, ...path]);
//                     return [node, ...path];
//                 }
//             }
//         }
//     }

//     console.log("No input node found for:", nodeId);
//     return []; // If the input node is not found, return an empty array
// }

// // Sample graph structure
// const graph = {
//     "3": { inputs: { model: ["4", 0], positive: ["6", 0], negative: ["7", 0], latent_image: ["5", 0] }, class_type: "KSampler" },
//     "4": { inputs: { ckpt_name: "Realistic_Vision_V5.1.ckpt" }, class_type: "CheckpointLoaderSimple" },
//     "5": { inputs: { width: 512, height: 512, batch_size: 1 }, class_type: "EmptyLatentImage" },
//     "6": { inputs: { text: "beautiful scenery nature glass bottle landscape, , purple galaxy bottle,", clip: ["4", 1] }, class_type: "CLIPTextEncode" },
//     "7": { inputs: { text: "text, watermark", clip: ["4", 1] }, class_type: "CLIPTextEncode" },
//     "8": { inputs: { samples: ["3", 0], vae: ["4", 2] }, class_type: "VAEDecode" },
//     "9": { inputs: { filename_prefix: "ComfyUI", images: ["8", 0] }, class_type: "SaveImage" }
// };

// // Target node
// const targetNode = "9";

// // Find the path from the target node to the starting point
// const path = findPath(targetNode, graph);
// console.log("Final path:", path.join(" -> ")); // Print the path


