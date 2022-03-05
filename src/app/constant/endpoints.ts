export type API_ENDPOINT = TOKEN_API | USER_API;

export enum TOKEN_API {
    Generate = 'token/generate'
};

export enum USER_API {
    GetUserInfo = 'token/getUserInfo'
};