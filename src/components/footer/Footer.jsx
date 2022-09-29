import React from "react";
import { Container } from "react-bootstrap";

export const Footer = () => {
  return (
    <div>
      <Container fluid className="bg-dark py-4 text-light text-center mt-5">
        &copy; {new Date().getFullYear()} Fashiona - All rights reserved
        <a href="" className="text-light"></a>{" "}
      </Container>
    </div>
  );
};
