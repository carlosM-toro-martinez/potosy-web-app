import { remove } from "../../api";
import buildApiUri from "../../utils/buildApiUri";

const productsDeleteServices = async (idProducts) => {
  return await remove(`${buildApiUri()}/v1/products/${idProducts}`);
};
export default productsDeleteServices;
