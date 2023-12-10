import { remove } from "../../api";
import buildApiUri from "../../utils/buildApiUri";

const businessService = async (idSection) => {
    return await remove(`${buildApiUri()}/v1/sections/${idSection}`);
}
export default businessService;