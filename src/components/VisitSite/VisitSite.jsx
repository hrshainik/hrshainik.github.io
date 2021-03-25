import React from "react";
import { Button, Icon } from "./visitSite.styles";

const VisitSite = ({ style }) => {
  return (
    <Button to="/" style={style}>
      Visit Site <Icon />
    </Button>
  );
};

export default VisitSite;
