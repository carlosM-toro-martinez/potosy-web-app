import { get } from "../api";
import buildApiUri from "../utils/buildApiUri";

const businessService = async () => {
  return await get(`${buildApiUri()}/v1/business`);
}
export default businessService;