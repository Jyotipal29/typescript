import React from "react";
import { Card } from "react-bootstrap";
type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};
const StoreItem = ({ id, name, imgUrl, price }: StoreItemProps) => {
  return (
    <Card>
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
        style={{ objectFit: "cover" }}
      />
    </Card>
  );
};

export default StoreItem;
