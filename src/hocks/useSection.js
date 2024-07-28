import { useState } from "react";

function useSection() {
  const [section, setSection] = useState(1);
  const [descSection, setDescSection] = useState("");
  const [route, setRoute] = useState();
  const [index, setIndex] = useState(0);

  return {
    section,
    route,
    descSection,
    setDescSection,
    setRoute,
    setSection,
    index,
    setIndex,
  };
}

export default useSection;
