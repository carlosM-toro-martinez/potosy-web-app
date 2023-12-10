const parseEnvNumber = (envVar) => {
    const envVarValue = parseInt(process.env[envVar]);
    if (isNaN(envVarValue)) {
        throw new Error(`Environment variable ${envVar} is not a number`);
    }
    return envVarValue;
}

const parseEnvString = (envVar) => {
    const envVarValue = process.env[envVar];
    if (!envVarValue) {
        throw new Error(`Environment variable ${envVar} is not set`);
    }
    return envVarValue;
}

const parseEnvBoolean = (envVar) => {
    const envVarValue = process.env[envVar];
    if (!envVarValue) {
        throw new Error(`Environment variable ${envVar} is not set`);
    }
    return envVarValue === 'true';
}

const getEnvVariables = () => {
    // const strapiServerPort = parseEnvNumber('REACT_APP_STRAPI_SERVER_PORT');
    const encuentraApiServer = parseEnvString('REACT_APP_ENCUENTRA_API');
    const nodeEnv = parseEnvString('NODE_ENV');
    const encuentraApiServerService = parseEnvString('REACT_APP_ENCUENTRA_API_SERVICE');
    const facebookUri = parseEnvString('REACT_APP_FACEBOOK_URI');
    const whatsappUri = parseEnvString('REACT_APP_WHATSAPP_URI');
    const telegramUri = parseEnvString('REACT_APP_TELEGRAM_URI');

    return {
        //strapiServerPort, strapiServer, 
        nodeEnv,
        encuentraApiServer,
        encuentraApiServerService,
        facebookUri, whatsappUri, telegramUri
    };
}
export default getEnvVariables;