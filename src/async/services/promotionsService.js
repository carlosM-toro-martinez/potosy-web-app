import { get } from "../api";
import buildApiUri from "../utils/buildApiUri";

const promotionsService = async (idBusiness) => {
    return await get(`${buildApiUri()}/v1/promotions/business/${idBusiness}`);
}
export default promotionsService;