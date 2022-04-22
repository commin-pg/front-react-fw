import axiosInstance from "services/axios.service";

export const _changePassword = async ({ userId, oldPassword, newPassword }) => {
    var endpoint = `/auth/password`;
    return axiosInstance
        .post(endpoint, { userId: userId, oldPassword: oldPassword, newPassword: newPassword })
        .then((res) => {
            return res?.data;
        })
        .catch((err) => {
            if (err.response) return err.response.data;
            else return err;
        })
}

// api/mypage/getMyInvestmentInfo
export const _getInvestmentInfo = async () => {
    var endpoint = `/mypage/getMyInvestmentInfo`;
    return axiosInstance
        .get(endpoint)
        .then((res) => {
            return res?.data;
        })
        .catch((err) => {
            if (err.response) return err.response.data;
            else return err;
        })
}
//api/mypage/setMyInvestInfo' 
export const _setMyInvestInfo = async (investInfo) => {
    var endpoint = `/mypage/setMyInvestInfo`;
    return axiosInstance
        .post(endpoint, investInfo)
        .then((res) => {
            return res?.data;
        })
        .catch((err) => {
            if (err.response) return err.response.data;
            else return err;
        })
}


export const _getInvestHist = async ({ limit = 5, page = 1 }) => {
    var endpoint = `/mypage/getInvestHist/?limit=${limit}&page=${page}`;

    return axiosInstance
        .get(endpoint)
        .then((res) => {
            return res?.data;
        })
        .catch((err) => {
            if (err.response) return err.response;
            else return err;
        })
}

export const _deleteInvestHist = async (id) => {
    var endpoint = `/mypage/deleteInvestHist/${id}`;
    return axiosInstance
        .delete(endpoint)
        .then((res) => {
            return res?.data;
        })
        .catch((err) => {
            if (err.response) return err.response.data;
            else return err;
        })
}

