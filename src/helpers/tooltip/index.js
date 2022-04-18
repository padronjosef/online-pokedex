import React from "react";
import { formatstat } from "/src/helpers";
import './style.sass'

export function Tooltip({ children, text }) {
  return (
    <div className="tooltip">
      {children}
      <span className="tooltip__text">
        {formatstat(text)}
      </span>
    </div>
  );
};

