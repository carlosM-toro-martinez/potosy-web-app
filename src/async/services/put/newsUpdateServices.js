import { put } from "../../api";
import buildApiUri from "../../utils/buildApiUri";

const newsUpdateServices = async (idSection, payload) => {
    return await put(`${buildApiUri()}/v1/news/${idSection}`, payload);
}
export default newsUpdateServices;