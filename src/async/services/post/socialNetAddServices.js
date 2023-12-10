import { post } from "../../api";
import buildApiUri from "../../utils/buildApiUri";

const socialNetAddServices = async (payload) => {
    return await post(`${buildApiUri()}/v1/socialNetworks`, payload);
}
export default socialNetAddServices;