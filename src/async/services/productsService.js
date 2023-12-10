import { get } from "../api";
import buildApiUri from "../utils/buildApiUri";

const productsService = async (idBusiness) => {
    return await get(`${buildApiUri()}/v1/products/business/${idBusiness}`);
}
export default productsService;