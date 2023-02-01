import { BACKEND_BASE_PATH } from "./endpoint";

const getPath = (url: string, basePath = BACKEND_BASE_PATH) => `${basePath}${url}`;

export default getPath;
