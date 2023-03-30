import axios from "axios";

const HttpMethods = {
    GET: "GET",
    POST: "POST",
    DELETE: "DELETE",
};

axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';

const _axios = axios.create();

const baseUrl = "https://www2.hs-esslingen.de/~melcher/map/chat/api/?request="

const getAxiosClient = () => _axios;

async function login(userid, password) {
    const response = await _axios.get(baseUrl + "login&userid=" + userid + "&password=" + password);
    return response;
}

async function logout(userid, sessionToken) {
    const response = await _axios.get(baseUrl + "logout&userid=" + userid + "&sessionToken=" + sessionToken);
    return response;
}

async function register(userid, password, nickname, fullname) {
    const response = await _axios.get(baseUrl + "register&userid=" + userid + "&password=" + password + "&nickname=" + nickname + "&fullname=" + fullname);
    return response;
}

async function getMessages(userid, sessionToken) {
    const response = await _axios.get(baseUrl + "getMessages&userid=" + userid + "&sessionToken=" + sessionToken);
    return response;
}

async function sendMessage(userid, sessionToken, message) {
    const response = await _axios.get(baseUrl + "sendMessage&userid=" + userid + "&sessionToken=" + sessionToken + "&message=" + message);
    return response;
}

const HttpService = {
    login,
    logout,
    register,
    getMessages,
    sendMessage,
};

export default HttpService;