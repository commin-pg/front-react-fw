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