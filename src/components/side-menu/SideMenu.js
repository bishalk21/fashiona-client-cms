import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useDispatch, useSelector } from "react-redux";
import { setShowSideMenu } from "../../pages/system-state/systemSlice";

export const SideMenu = () => {
  const dispatch = useDispatch();

  const { showSideMenu } = useSelector((state) => state.system);
  const handleClose = () => dispatch(setShowSideMenu(false));
  const handleShow = () => dispatch(setShowSideMenu(true));

  return (
    <>
      <Offcanvas show={showSideMenu} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>EVEREST.shop</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
