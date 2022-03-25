import axiosInstance from './instance';

const chatApi = {
    getMessages: (userid, id) => axiosInstance.get(`/chat/getall/${userid}/${id}`),
    getSocket: (userid, id) => axiosInstance.get(`/chat/${userid}/${id}`),
};
export default chatApi;
