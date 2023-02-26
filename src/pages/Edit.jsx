import React from "react";
import { useParams } from "react-router-dom";

export default function Edit() {
  const { id } = useParams();
  console.log(id);
  return <div>hi edit</div>;
}
