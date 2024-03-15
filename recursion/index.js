// The topologicalSort function performs a Topological Sort on the given graph.
const allData = require('./test1.json')
const classData = require('./api_call.json')
var data = JSON.stringify(allData)
data = JSON.parse(data)


// function topologicalSort(graph) {
//     const order = []; // This array will store the sorted vertices.
//     const visited = new Set(); // This set will keep track of visited vertices.
    
//     // Iterate over each vertex in the graph.
//     Object.keys(graph).forEach(vertex => {
//         // If the vertex has not been visited, perform Depth First Search (DFS) from this vertex.
//         if (!visited.has(vertex)) dfs(vertex, graph, visited, order);
//     });
    
//     // The order array is filled in reverse, so we need to reverse it before returning.
//     return order.reverse();
// }

// // The dfs function performs a Depth First Search from the given vertex.
// function dfs(vertex, graph, visited, order) {
//     // Mark the current vertex as visited.
//     visited.add(vertex);
    
//     // Retrieve the neighbors of the current vertex from the graph.
//     // If the vertex has no neighbors, default to an empty array.
//     const neighbors = graph[vertex] || [];
    
//     // Iterate over each neighbor of the current vertex.
//     neighbors.forEach(neighbor => {
//         // If the neighbor has not been visited, perform DFS from this neighbor.
//         if (!visited.has(neighbor)) dfs(neighbor, graph, visited, order);
//     });
    
//     // After visiting all neighbors of the current vertex, add the vertex to the order array.
//     order.push(vertex);
// }

// // Define a graph as an object where each key is a vertex and the associated value is an array of neighbors.
// const graph = {
//     "3": { inputs: { model: ["4", 0], positive: ["6", 0], negative: ["7", 0], latent_image: ["5", 0] }, class_type: "KSampler" },
//     "4": { inputs: { ckpt_name: "Realistic_Vision_V5.1.ckpt" }, class_type: "CheckpointLoaderSimple" },
//     "5": { inputs: { width: 512, height: 512, batch_size: 1 }, class_type: "EmptyLatentImage" },
//     "6": { inputs: { text: "beautiful scenery nature glass bottle landscape, , purple galaxy bottle,", clip: ["4", 1] }, class_type: "CLIPTextEncode" },
//     "7": { inputs: { text: "text, watermark", clip: ["4", 1] }, class_type: "CLIPTextEncode" },
//     "8": { inputs: { samples: ["3", 0], vae: ["4", 2] }, class_type: "VAEDecode" },
//     "9": { inputs: { filename_prefix: "ComfyUI", images: ["8", 0] }, class_type: "SaveImage" }
// };

// // Perform Topological Sort on the graph and print the sorted order.
// console.log(topologicalSort(graph).join(' -> '));


function topologicalSort(graph) {
    const order = [];
    const visited = new Set();

    function dfs(vertex) {
        visited.add(vertex);
        const neighbors = graph[vertex]?.inputs || {};
        for (const [key, value] of Object.entries(neighbors)) {
            const nextNode = Array.isArray(value) ? value[0] : value;
            if (!visited.has(nextNode)) dfs(nextNode);
        }
        order.push(vertex);
    }

    Object.keys(graph).forEach(vertex => {
        if (!visited.has(vertex)) dfs(vertex);
    });

    return order.reverse();
}

function getClassTypeData(graph, targetNode) {
    const classTypeData = {};
    Object.keys(graph).forEach(vertex => {
        const inputs = graph[vertex].inputs || {};
        Object.values(inputs).forEach(value => {
            const nextNode = Array.isArray(value) ? value[0] : value;
            if (!classTypeData[nextNode]) {
                classTypeData[nextNode] = [];
            }
            classTypeData[nextNode].push(graph[vertex].class_type);
        });
    });
    return classTypeData[targetNode] || [];
}

const graph = {
    "3": { inputs: { model: ["4", 0], positive: ["6", 0], negative: ["7", 0], latent_image: ["5", 0] }, class_type: "KSampler" },
    "4": { inputs: { ckpt_name: "Realistic_Vision_V5.1.ckpt" }, class_type: "CheckpointLoaderSimple" },
    "5": { inputs: { width: 512, height: 512, batch_size: 1 }, class_type: "EmptyLatentImage" },
    "6": { inputs: { text: "beautiful scenery nature glass bottle landscape, , purple galaxy bottle,", clip: ["4", 1] }, class_type: "CLIPTextEncode" },
    "7": { inputs: { text: "text, watermark", clip: ["4", 1] }, class_type: "CLIPTextEncode" },
    "8": { inputs: { samples: ["3", 0], vae: ["4", 2] }, class_type: "VAEDecode" },
    "9": { inputs: { filename_prefix: "ComfyUI", images: ["8", 0] }, class_type: "SaveImage" }
};

const sortedOrder = topologicalSort(graph);
console.log("Sorted order:", sortedOrder.join(' = '));

const targetNode = "9";
//const classTypeData = getClassTypeData(graph, targetNode);
console.log("Class type data for target node '9':", classTypeData);
