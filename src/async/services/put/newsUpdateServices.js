import { put } from "../../api";
import buildApiUri from "../../utils/buildApiUri";

const newsUpdateServices = async (idNews, payload) => {
    return await put(`${buildApiUri()}/v1/news/${idNews}`, payload, true);
}
export default newsUpdateServices;