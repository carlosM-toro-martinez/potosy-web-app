import { get } from "../api";
import buildApiUri from "../utils/buildApiUri";

const imagesRandom = async () => {
    return await get(`${buildApiUri()}/v1/images/randomImages`);
}
export default imagesRandom;