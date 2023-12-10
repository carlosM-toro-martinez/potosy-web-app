import { get } from "../api";
import buildApiUri from "../utils/buildApiUri";

const businessService = async (idSection) => {
    return await get(`${buildApiUri()}/v1/business/section/${idSection}`);
}
export default businessService;