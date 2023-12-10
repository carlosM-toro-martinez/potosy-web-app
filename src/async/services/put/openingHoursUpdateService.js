import { put } from "../../api";
import buildApiUri from "../../utils/buildApiUri";

const openingHoursService = async (idOpeningHours, payload) => {
    return await put(`${buildApiUri()}/v1/openingHours/${idOpeningHours}`, payload);
}
export default openingHoursService;