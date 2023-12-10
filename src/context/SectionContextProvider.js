import { SectionContext } from './SectionContext';
import useSection from '../hocks/useSection'

function SectionContextProvider({ children }) {
    const useSectionGlobal = useSection();
    return (
        <SectionContext.Provider value={useSectionGlobal}>
            {children}
        </SectionContext.Provider>
    )
}

export default SectionContextProvider;