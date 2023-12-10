import { get } from "../api";
import buildApiUri from "../utils/buildApiUri";

const sectionsService = async () => {
    return await get(`${buildApiUri()}/v1/sections`);
}
export default sectionsService;