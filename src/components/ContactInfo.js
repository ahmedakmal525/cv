// @flow
import React from "react";
import { FaLinkedin, FaTwitterSquare, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

type Props = {
  t: Function
};
const ContactInfo = ({ t }: Props) => (
  <div>
    <div className="row">
      <div className="col">
        <h6>
          <MdEmail /> {t("contactInfo.email")}
        </h6>
      </div>
      <div className="col">
        <h6>
          <a target="_" href="mailto: akmal.ahmed525@gmail.com">
            akmal.ahmed525@gmail.com
          </a>
        </h6>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <h6>
          <FaLinkedin /> {t("contactInfo.linkedIn")}
        </h6>
      </div>
      <div className="col">
        <h6>
          <a target="_" href="https://www.linkedin.com/in/akmalahmed525/">
            @akmalahmed525
          </a>
        </h6>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <h6>
          <FaTwitterSquare /> {"  "}
          {t("contactInfo.twitter")}
        </h6>
      </div>
      <div className="col">
        <h6>
          <a target="_" href="https://twitter.com/akmalahmed5251">
            @akmalahmed5251
          </a>
        </h6>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <h6>
          <FaGithub />
          {"  "}
          {t("contactInfo.github")}
        </h6>
      </div>
      <div className="col">
        <h6>
          <a target="_" href="https://github.com/ahmedakmal525">
            @ahmedakmal525
          </a>
        </h6>
      </div>
    </div>
    <hr color="#fffffff" />
  </div>
);
export default ContactInfo;
