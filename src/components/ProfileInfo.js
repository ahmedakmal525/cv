// @flow
import "./styles/profileInfo.css";

import React from "react";

type Props = {
  t: Function
};
const ProfileInfo = ({ t }: Props) => (
  <div className="App-Content">
    <h1>
      <b>{t("personal_info.name")}</b>
    </h1>
    <div className="User-Info-Container">
      <h5>
        <b>{t("personal_info.quote")}</b>
      </h5>
    </div>
    <div className="User-Info-Container">
      <h5>
        <b>{t("personal_info.quote_sub")}</b>
      </h5>
    </div>
    <div className="User-Info-Container">
      <h6>{t("personal_info.qualification")}</h6>
    </div>
    <div className="User-Info-Container">
      <h6>{t("personal_info.company_and_designation")}</h6>
    </div>
    <hr color="#fffffff" />
  </div>
);

export default ProfileInfo;
