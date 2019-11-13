// @flow
import React from "react";

type Props = { label: string, symbol: string };
const Emoji = ({ label, symbol }: Props) => (
  <span
    className="emoji"
    role="img"
    aria-label={label || ""}
    aria-hidden={label ? "false" : "true"}
  >
    {symbol}
  </span>
);
export default Emoji;
