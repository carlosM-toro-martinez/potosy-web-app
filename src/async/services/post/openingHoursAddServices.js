import { post } from "../../api";
import buildApiUri from "../../utils/buildApiUri";

const openingHoursServices = async (payload) => {
    return await post(`${buildApiUri()}/v1/openingHours`, payload);
}
export default openingHoursServices;