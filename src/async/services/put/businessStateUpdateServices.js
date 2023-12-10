import { put } from "../../api";
import buildApiUri from "../../utils/buildApiUri";

const businessStateUpdateService = async (idBusiness, payload) => {
    return await put(`${buildApiUri()}/v1/business/${idBusiness}/state`, payload);
}
export default businessStateUpdateService;