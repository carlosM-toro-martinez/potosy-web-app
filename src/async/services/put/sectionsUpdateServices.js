import { put } from "../../api";
import buildApiUri from "../../utils/buildApiUri";

const businessService = async (idSection, payload) => {
    return await put(`${buildApiUri()}/v1/sections/${idSection}`, payload, true);
}
export default businessService;