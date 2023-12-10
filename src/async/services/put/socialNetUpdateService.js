import { put } from "../../api";
import buildApiUri from "../../utils/buildApiUri";

const socialNetUpdateService = async (idSocialNet, payload) => {
    return await put(`${buildApiUri()}/v1/socialNetworks/${idSocialNet}`, payload);
}
export default socialNetUpdateService;