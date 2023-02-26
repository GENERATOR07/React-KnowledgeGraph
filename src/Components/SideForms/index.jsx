import React from "react";
import Triples from "../Triples";
import Nodes from "../Nodes";
import Edges from "../Edges";

export default function SideForms({ className }) {
  return (
    <div className={`${className}flex flex-col divide-y-2 divide-gray-400`}>
      <Triples />
      <Nodes />
      <Edges />
    </div>
  );
}
