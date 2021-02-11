import React from "react";
import { List, Item } from "./listItem.styles";

const ListItem = ({ listItems, style }) => {
  return (
    <List style={style}>
      {listItems.map((item, i) => (
        <Item key={i}>{item}</Item>
      ))}
    </List>
  );
};

export default ListItem;
