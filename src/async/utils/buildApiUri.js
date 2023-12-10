import getEnvVariables from "../../config/config"

const buildApiUri = () => {
    const { encuentraApiServer, encuentraApiServerService } = getEnvVariables();
    return `${encuentraApiServer}/${encuentraApiServerService}`;
}
export default buildApiUri;