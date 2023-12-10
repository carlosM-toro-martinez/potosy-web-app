import { put } from "../../api";
import buildApiUri from "../../utils/buildApiUri";

const businessService = async (idBusiness, payload) => {
    return await put(`${buildApiUri()}/v1/business/${idBusiness}`, payload, true);
}
export default businessService;