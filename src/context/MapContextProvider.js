import { MapContext } from './MapContext';
import useMap from '../hocks/useMap';

function MapContextProvider({ children }) {
    const useMapGlobal = useMap();
    return (
        <MapContext.Provider value={useMapGlobal}>
            {children}
        </MapContext.Provider>
    )
}

export default MapContextProvider;