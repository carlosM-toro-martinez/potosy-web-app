import { remove } from "../../api";
import buildApiUri from "../../utils/buildApiUri";

const businessService = async (idBusiness) => {
    return await remove(`${buildApiUri()}/v1/business/${idBusiness}`);
}
export default businessService;