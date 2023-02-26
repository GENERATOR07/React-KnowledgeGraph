import React, { Children } from "react";

export default function Button({ type, children }) {
  return (
    <button type={type} className="p-2 bg-blue-400  m-2 rounded-md">
      {children}
    </button>
  );
}
