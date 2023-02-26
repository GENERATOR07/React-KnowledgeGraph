export const nodes = [];
for (let i = 1; i <= 20000; i++) {
  nodes.push({ id: i, node_name: "asds", description: "lol" });
}

let edge_data = [];
for (let i = 1; i < 600; i++) {
  let edge_type_id = Math.ceil(Math.random() * 3);
  edge_data.push({
    edge_id: i - 1,
    edge_name: "Easds",
    description: "Elol",
    edge_type_id,
  });
}

export const links = [];
for (let i = 1; i < 60000; i++) {
  links.push({
    description: `triple${i}`,
    source: Math.ceil(Math.random() * 20000),
    edge_id: i - 1,
    target: Math.ceil(Math.random() * 20000),
  });
}
