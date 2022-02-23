import React from "react";

function withStorageListener(WrappedComponent) {
  return function WrappedComponentWithStorageListener(props) {
    const [storgeChange, setStorageChange] = React.useState(false);

    window.addEventListener("storage", (change) => {
      if (change.key === "TODOS_V1") {
        console.log("Hubo cambios en TODOS_V1");
        setStorageChange(true);
      }
    });

    const toggleShow = () => {
      props.synchronize();
      setStorageChange(false);
    };

    return <WrappedComponent show={storgeChange} toggleShow={toggleShow} />;
  };
}

export { withStorageListener };
