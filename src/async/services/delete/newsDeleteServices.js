import { remove } from "../../api";
import buildApiUri from "../../utils/buildApiUri";

const newsDeleteServices = async (idSection) => {
    return await remove(`${buildApiUri()}/v1/news/${idSection}`);
}
export default newsDeleteServices;