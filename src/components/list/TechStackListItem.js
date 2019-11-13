// @flow
import "../styles/list.css";
import React from "react";
import ReactTooltip from "react-tooltip";
import imageStyle from "../styles/image";

type Props = {
  t: Function,
  object: Object
};
const TechStackListItem = ({ t, object }: Props) => {
  return (
    <div className="col-md-4 card-column">
      <div className="tech-card">
        <img
          style={imageStyle}
          data-tip
          data-for={`${object.name}`}
          alt={`${object.name}.png`}
          // eslint-disable-next-line import/no-dynamic-require
          src={require(`../../assets/images/${object.name}.png`)}
        />
        <ReactTooltip
          id={`${object.name}`}
          place="bottom"
          type="dark"
          effect="solid"
        >
          <b>{t(`techStack.${object.description}`)}</b>
        </ReactTooltip>
      </div>
    </div>
  );
};

export default TechStackListItem;
