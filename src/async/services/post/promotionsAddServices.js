import { post } from "../../api";
import buildApiUri from "../../utils/buildApiUri";

const promotionsServices = async (payload) => {
    return await post(`${buildApiUri()}/v1/promotions`, payload);
}
export default promotionsServices;