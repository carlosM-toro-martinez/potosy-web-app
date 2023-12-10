import { get } from "../api";
import buildApiUri from "../utils/buildApiUri";

const businessFindOne = async (idBusiness) => {
    return await get(`${buildApiUri()}/v1/business/${idBusiness}`);
}
export default businessFindOne;