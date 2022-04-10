import axiosInstance from "services/axios.service";

export const _getStockLastDateKey = async () => {
    var endpoint = `/finance/getCurrentDateKey`;
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

export const _getStockDataAll = async ({ limit = 10, page = 1, sutableType = null, keyword = null }) => {
    var endpoint = `/finance/all/?limit=${limit}&page=${page}`;
    if (sutableType) {
        endpoint += `&filter.sutableType=$eq:${sutableType}`
    }
    if (keyword) {
        endpoint += `&search=${keyword}`
    }
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
