import { remove } from "../../api";
import buildApiUri from "../../utils/buildApiUri";

const adminDeleteServices = async (idSection) => {
    return await remove(`${buildApiUri()}/v1/admin/${idSection}`);
}
export default adminDeleteServices;