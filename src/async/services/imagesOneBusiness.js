import { get } from "../api";
import buildApiUri from "../utils/buildApiUri";

const imagesOneBusiness = async (idBusiness) => {
    return await get(`${buildApiUri()}/v1/images/business/${idBusiness}`);
}
export default imagesOneBusiness;