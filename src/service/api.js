import { apis } from "service";

const URL = "http://localhost:5000";

const API_URLS = { POST_LIST: `${URL}/client/api/v1/ad/list` };

export const postList = (payload) => apis.post(API_URLS.POST_LIST, payload);
