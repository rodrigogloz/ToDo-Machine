import React from "react";
import { useStorageListener } from "./useStorageListener";
import "./ChangeAlert.css";
import reloadIcon from "../assets/reload-icon.svg";

function ChangeAlert({ synchronize }) {
  const { show, toggleShow } = useStorageListener(synchronize);
  if (show) {
    return (
      <div className="reloadInfoButtonContainer">
        <button className="reloadInfoButton" onClick={() => toggleShow(false)}>
          <img src={reloadIcon} className="reloadIcon" alt="reload" />
        </button>
        <p className="reloadInfoButtonText">Cambios sin actualizar</p>
      </div>
    );
  } else {
    return null;
  }
}

export { ChangeAlert };
