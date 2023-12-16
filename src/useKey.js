import { useState, useEffect } from "react";

export function useKey(handleSelectId) {
  const [tabId, setTabId] = useState(null);

  useEffect(
    function () {
      function callback(e) {
        if (e.key === "ArrowUp") {
          handleSelectId(null);
        }
        if (e.key === "ArrowDown" || e.key === "Enter") {
          handleSelectId(tabId);
        }
      }

      document.addEventListener("keydown", callback);

      return () => document.removeEventListener("keydown", callback);
    },
    [tabId, handleSelectId]
  );

  return setTabId;
}
