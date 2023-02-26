import React, { useState } from "react";

export default function Suggestions({ data, search, clearSuggestions }) {
  // const [suggestions, setSuggestions] = useState([...data]);
  return (
    <div className="p-2 cursor-auto flex flex-col">
      {data.map((s) => (
        <button
          className=" "
          onClick={(e) => {
            search(s);
            // setSuggestions([]);
            clearSuggestions();
          }}
          key={s.id}
        >
          {s.name}
        </button>
      ))}
    </div>
  );
}
