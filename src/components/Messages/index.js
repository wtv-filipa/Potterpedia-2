import React, { useState, useEffect } from "react";

const Messages = ({ message = "", changeClass = "" }) => {
  const [isShow, setIsShow] = useState(false);

  const close = () => {
    setIsShow(false);
  };

  const loadData = () => {
    setIsShow(true);
    setTimeout(() => setIsShow(false), 4000);
  };
  useEffect(loadData, []);

  return (
    <>
      {isShow ? (
        <div className={`mt-5 alert ${changeClass}`} role="alert">
          <button
            type="button"
            class="close"
            data-dismiss="alert"
            aria-label="Close"
            onClick={close}
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <p className="m-0">{message}</p>
        </div>
      ) : null}
    </>
  );
};

export default Messages;
