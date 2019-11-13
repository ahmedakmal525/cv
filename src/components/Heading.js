// @flow
import React from "react";

type Props = {
  t: Function,
  title: string
};
const Heading = ({ t, title }: Props) => (
  <h3>
    <b>{t(title)}</b>
  </h3>
);
export default Heading;
