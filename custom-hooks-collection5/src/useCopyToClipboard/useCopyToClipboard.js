/**
 * Custom useCopyToClipboard Hook
 *
 * dependency: copy-to-clipboard
 */
import { useState } from "react";
import copy from "copy-to-clipboard";

const useCopyToClipboard = () => {
  const [value, setValue] = useState();
  const [success, setSuccess] = useState();

  const copyToClipboard = (text, options) => {
    const result = copy(text, options);
    if (result) {
      setValue(text);
    }
    setSuccess(result);
  };

  return [copyToClipboard, { success, value }];
};

export default useCopyToClipboard;
