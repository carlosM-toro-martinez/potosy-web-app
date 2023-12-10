import { put } from "../../api";
import buildApiUri from "../../utils/buildApiUri";

const promotionsService = async (idPromotions, payload) => {
    return await put(`${buildApiUri()}/v1/promotions/${idPromotions}`, payload);
}
export default promotionsService;