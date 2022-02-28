import React from "react";
import { useStorageListener } from "./useStorageListener";
import "./ChangeAlert.css";
import reloadIcon from "../assets/reload-icon.svg";

function ChangeAlert({ synchronize }) {
  const { show, toggleShow } = useStorageListener(synchronize);
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

export { ChangeAlert };
