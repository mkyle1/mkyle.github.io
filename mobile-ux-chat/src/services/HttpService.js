import axios from "axios";


let token = null;

const _axios = axios.create();

let axiosConfig = {
    headers: {
        'Content-Type': 'application/json'
    }
  };

const baseUrl = "https://www2.hs-esslingen.de/~melcher/map/chat/api/"

const getAxiosClient = () => _axios;

if (window.caches) {
    caches.open("profile-cache");
}

async function register(userid, password, nickname, fullname) {
    //const response = await _axios.get(baseUrl + "register&userid=" + userid + "&password=" + password + "&nickname=" + nickname + "&fullname=" + fullname);
    const response = await axios.post(baseUrl, {
        request: "register",
        userid: userid,
        password: password,
        nickname: nickname,
        fullname: fullname
    }, axiosConfig);
    return response;
}

async function login(userid, password) {
    //const response = await _axios.get(baseUrl + "login&userid=" + userid + "&password=" + password);
    const response = await axios.post(baseUrl, {
        request: "login",
        userid: userid,
        password: password
    }, axiosConfig).then((response) => {
        token = response.data.token;
    });
    return response;
}

async function logout(userid, sessionToken) {
    //const response = await _axios.get(baseUrl + "logout&userid=" + userid + "&sessionToken=" + sessionToken);
    const response = await axios.post(baseUrl, {
        request: "logout",
        token: token
    }, axiosConfig);
    return response;
}

async function getMessages(userid, sessionToken) {
    //const response = await _axios.get(baseUrl + "getMessages&userid=" + userid + "&sessionToken=" + sessionToken);
    const response = await axios.post(baseUrl, {
        request: "fetchmessages",
        token: token
    }, axiosConfig);
    return response;
}

async function sendMessage(message) {
    //const response = await _axios.get(baseUrl + "sendMessage&userid=" + userid + "&sessionToken=" + sessionToken + "&message=" + message);
    const response = await axios.post(baseUrl, {
        request: "sendmessage",
        token: token,
        text: message
    }, axiosConfig);
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