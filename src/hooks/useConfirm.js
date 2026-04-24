import { useState, useCallback } from "react";

export function useConfirm() {
  const [confirmState, setConfirmState] = useState(null);
  // confirmState = { message, title, onAccept, variant }

  const confirm = useCallback(({ title, message, variant = "danger" }) => {
    return new Promise(resolve => {
      setConfirmState({
        title,
        message,
        variant,
        onAccept: () => {
          setConfirmState(null);
          resolve(true);
        },
        onCancel: () => {
          setConfirmState(null);
          resolve(false);
        },
      });
    });
  }, []);

  return { confirmState, confirm };
}
