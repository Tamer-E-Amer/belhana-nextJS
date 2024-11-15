"use client";
import { createContext, useState } from "react";

export const MessageReplyFormContext = createContext();

export const MessageReplyFormProvider = ({ children }) => {
  const [isMessageReplyFormShown, setIsMessageReplyFormShown] = useState(false);

  return (
    <MessageReplyFormContext.Provider
      value={{ isMessageReplyFormShown, setIsMessageReplyFormShown }}
    >
      {children}
    </MessageReplyFormContext.Provider>
  );
};
