import { put } from "../../api";
import buildApiUri from "../../utils/buildApiUri";

const productsService = async (idProduct, payload) => {
    return await put(`${buildApiUri()}/v1/products/${idProduct}`, payload);
}
export default productsService;