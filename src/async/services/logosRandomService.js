import { get } from "../api";
import buildApiUri from "../utils/buildApiUri";

const logosRandom = async () => {
    return await get(`${buildApiUri()}/v1/business/logoUrls`);
}
export default logosRandom;