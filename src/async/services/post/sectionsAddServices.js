import { post } from "../../api";
import buildApiUri from "../../utils/buildApiUri";

const sectionsService = async (payload) => {
    return await post(`${buildApiUri()}/v1/sections`, payload, true);
}
export default sectionsService;