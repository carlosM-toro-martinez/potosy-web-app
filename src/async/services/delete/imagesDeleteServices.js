import { remove } from "../../api";
import buildApiUri from "../../utils/buildApiUri";

const imagesDeleteServices = async (idImages, url) => {
    return await remove(`${buildApiUri()}/v1/images/${idImages}/${url}`);
}
export default imagesDeleteServices;