import { remove } from "../../api";
import buildApiUri from "../../utils/buildApiUri";

const promotionsDeleteServices = async (idPromotion) => {
  return await remove(`${buildApiUri()}/v1/promotions/${idPromotion}`);
};
export default promotionsDeleteServices;
