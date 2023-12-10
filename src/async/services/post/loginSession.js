import { post } from "../../api";
import buildApiUri from "../../utils/buildApiUri";

const loginSession = async (payload) => {
    return await post(`${buildApiUri()}/v1/sessions/login`, payload);
}
export default loginSession;