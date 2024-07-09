import React, { useRef } from "react";
import ListCard from "../../components/listCards";
import NavBar from "../../components/navBar";

export default function Section() {
  const listCardRef = useRef(null);
  return (
    <>
      <NavBar />
      <ListCard listCardRef={listCardRef} ref={listCardRef} />
    </>
  );
}
