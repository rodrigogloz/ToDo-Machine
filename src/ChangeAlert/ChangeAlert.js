import React from "react";
import { withStorageListener } from "./withStorageListener";
import "./ChangeAlert.css";
import reloadIcon from "../assets/reload-icon.svg";

function ChangeAlert({ show, toggleShow }) {
  if (show) {
    return (
      <div className="reloadInfoButtonContainer">
        <p className="reloadInfoButtonText">Hay cambios sin actualizar</p>
        <button className="reloadInfoButton" onClick={() => toggleShow(false)}>
          <img src={reloadIcon} className="reloadIcon" alt="reload" />
        </button>
      </div>
    );
  } else {
    return null;
  }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };
