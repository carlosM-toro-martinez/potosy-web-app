import { post } from "../../api";
import buildApiUri from "../../utils/buildApiUri";

const registerSession = async (payload) => {
    return await post(`${buildApiUri()}/v1/sessions/signup`, payload);
}
export default registerSession;