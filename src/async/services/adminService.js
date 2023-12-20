import { get } from "../api";
import buildApiUri from "../utils/buildApiUri";

const adminService = async () => {
    return await get(`${buildApiUri()}/v1/admin`);
}
export default adminService;