import { post } from "../../api";
import buildApiUri from "../../utils/buildApiUri";

const newsAddService = async (payload) => {
    return await post(`${buildApiUri()}/v1/news`, payload, true);
}
export default newsAddService;