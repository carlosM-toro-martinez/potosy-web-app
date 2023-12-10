import { useState } from "react";


function useSection() {
    const [section, setSection] = useState(1);
    const [descSection, setDescSection] = useState('');
    const [route, setRoute] = useState();

    return {
        section,
        route,
        descSection,
        setDescSection,
        setRoute,
        setSection,
    }
}

export default useSection