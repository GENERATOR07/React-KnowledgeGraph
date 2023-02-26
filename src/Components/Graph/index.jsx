import React, { useCallback, useEffect, useRef, useState } from "react";
import { nodes, links } from "./data";
import { ForceGraph2D, ForceGraph3D } from "react-force-graph";
import SpriteText from "three-spritetext";

import {
  CSS2DRenderer,
  CSS2DObject,
} from "three/examples/jsm/renderers/CSS2DRenderer.js";
import Suggestions from "../Suggestions";
const gdata = { nodes: [...nodes], links: [...links] };
const extraRenderers = [new CSS2DRenderer()];

export default function Graph({ className }) {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [data, setData] = useState(gdata);
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const cont = useRef();
  useEffect(() => {
    setWidth(cont.current.offsetWidth);
    setHeight(cont.current.offsetHeight);
  }, [cont]);

  useEffect(() => {
    if (!input) {
      setData(gdata);
      return;
    }
    let filterData = gdata.nodes.filter((n) =>
      n.name.toLowerCase().includes(input.toLowerCase())
    );

    setSuggestions(filterData);
  }, [input]);

  const clearSuggestions = () => {
    setSuggestions([]);
  };

  const handleClick = useCallback(
    (node) => {
      //filter data

      const relLinks = gdata.links
        .filter((l) => {
          return l.source.id === node.id || l.target.id == node.id;
        })
        .map((l) => {
          return { source: l.source.id, target: l.target.id };
        });
      //filter Nodes
      let relNodesId = relLinks.map((l) => {
        return node.id === l.source ? l.target : l.source;
      });
      relNodesId.push(node.id);
      const relNodes = gdata.nodes.filter((n) => relNodesId.includes(n.id));
      // console.log({ nodes: [...relNodes], links: [...relLinks] });
      setData((d) => {
        return { nodes: [...relNodes], links: [...relLinks] };
      });
      // Aim at node from outside it
      const distance = 40;
      const distRatio = 1 + distance / Math.hypot(node.x, node.y, node.z);

      cont.current.cameraPosition(
        { x: node.x * distRatio, y: node.y * distRatio, z: node.z * distRatio }, // new position
        node, // lookAt ({ x, y, z })
        2000 // ms transition duration
      );
    },
    [cont]
  );

  return (
    <div className={`${className} border-black h-screen  flex`} ref={cont}>
      <div className="">
        <input
          className="bg-stone-50 p-2 text-center"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="search"
        />

        {input ? (
          <Suggestions
            data={suggestions}
            search={handleClick}
            clearSuggestions={clearSuggestions}
          />
        ) : null}
      </div>

      <ForceGraph3D
        // extraRenderers={extraRenderers}
        ref={cont}
        graphData={data}
        width={width}
        height={height}
        nodeAutoColorBy="group"
        nodeThreeObject={(node) => {
          const nodeEl = document.createElement("div");
          nodeEl.textContent = node.name;

          nodeEl.style.color = node.color;
          nodeEl.className = "node-label";
          return new CSS2DObject(nodeEl);
        }}
        nodeThreeObjectExtend={true}
        onNodeClick={handleClick}
        linkDirectionalArrowRelPos={1}
        linkDirectionalArrowLength={2}
        linkCurvature={0.25}
        cooldownTicks={100}
        onEngineStop={() => cont.current.zoomToFit(400)}
        onBackgroundClick={() => setData(gdata)}
        linkThreeObjectExtend={true}
        linkThreeObject={(link) => {
          const sprite = new SpriteText(
            `${
              Number.isInteger(link.source) ? link.source : link.source.id
            } > ${Number.isInteger(link.target) ? link.target : link.target.id}`
          );
          sprite.color = "lightgrey";
          sprite.textHeight = 1.5;
          return sprite;
        }}
        linkPositionUpdate={(sprite, { start, end }) => {
          const middlePos = Object.assign(
            ...["x", "y", "z"].map((c) => ({
              [c]: start[c] + (end[c] - start[c]) / 2, // calc middle point
            }))
          );

          // Position sprite
          Object.assign(sprite.position, middlePos);
        }}
      />
    </div>
  );
}
