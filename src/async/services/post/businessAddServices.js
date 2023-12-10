import { post } from "../../api";
import buildApiUri from "../../utils/buildApiUri";

const businessAddService = async (payload) => {
    return await post(`${buildApiUri()}/v1/business`, payload, true);
}
export default businessAddService;