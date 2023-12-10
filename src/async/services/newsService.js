import { get } from "../api";
import buildApiUri from "../utils/buildApiUri";

const newsService = async () => {
    return await get(`${buildApiUri()}/v1/news`);
}
export default newsService;