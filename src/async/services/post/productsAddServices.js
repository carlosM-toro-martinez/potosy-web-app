import { post } from "../../api";
import buildApiUri from "../../utils/buildApiUri";

const productsServices = async (payload) => {
    return await post(`${buildApiUri()}/v1/products`, payload);
}
export default productsServices;