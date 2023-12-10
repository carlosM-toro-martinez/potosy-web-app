import { put } from "../../api";
import buildApiUri from "../../utils/buildApiUri";

const imagesService = async (idImages, payload) => {
    return await put(`${buildApiUri()}/v1/images/${idImages}`, payload, true);
}
export default imagesService;