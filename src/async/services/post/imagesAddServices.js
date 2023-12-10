import { post } from "../../api";
import buildApiUri from "../../utils/buildApiUri";

const imagesServices = async (payload) => {
    return await post(`${buildApiUri()}/v1/images`, payload, true);
}
export default imagesServices;