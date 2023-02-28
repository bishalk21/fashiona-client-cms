import React from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router";

const Body = () => {
  return (
    <Container className="main">
      <Outlet />
    </Container>
  );
};

export default Body;
