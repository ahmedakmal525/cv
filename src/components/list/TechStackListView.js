// @flow
import "../styles/list.css";
import React from "react";
import TechStackListItem from "./TechStackListItem";

type Props = {
  t: Function,
  techStackList: Array<Object>
};
const TechStackListView = ({ t, techStackList }: Props) => (
  <div className="row">
    {techStackList
      .sort(() => Math.random() - 0.5)
      .map((object, index) => (
        <TechStackListItem key={index.toString()} t={t} object={object} />
      ))}
  </div>
);
export default TechStackListView;
