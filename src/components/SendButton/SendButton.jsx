import React from "react";
import { Button } from "./sendButton.styles";

const SendButton = ({ value }) => {
  return <Button type={"submit"} value={value} />;
};

export default SendButton;
