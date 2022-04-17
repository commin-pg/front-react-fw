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

export const _crwalingStockData = async () => {
    var endpoint = `/finance/crwaling`
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

export const _getCrwalingProgressRate = async () => {
    var endpoint = `/finance/progress`
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

export const _deleteStock = async ({ id }) => {
    var endpoint = `/finance/delete/${id}`;
    return axiosInstance
        .delete(endpoint)
        .then((res) => {
            return res?.data;
        })
        .catch((err) => {
            if (err.response) return err.response;
            else return err;
        })
}


export const _stockDeletedList = async () => {
    var endpoint = `/finance/deletedList`;
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

export const _stockCandidateList = async () => {
    var endpoint = `/finance/candidateList`;
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

export const _stockAddCandidate = async (financeId) => {
    var endpoint = `/finance/addCandidate/${financeId}`;
    return axiosInstance
        .post(endpoint)
        .then((res) => {
            return res?.data;
        })
        .catch((err) => {
            if (err.response) return err.response;
            else return err;
        })
}

export const _stockRemoveCandidate = async (companyName) => {
    console.log('company name', companyName)
    var endpoint = `/finance/removeCandidate/${companyName}`;
    return axiosInstance
        .post(endpoint)
        .then((res) => {
            return res?.data;
        })
        .catch((err) => {
            if (err.response) return err.response;
            else return err;
        })
}

export const _stockRestore = async ({ id }) => {
    var endpoint = `/finance/restore/${id}`;
    return axiosInstance
        .delete(endpoint)
        .then((res) => {
            return res?.data;
        })
        .catch((err) => {
            if (err.response) return err.response;
            else return err;
        })
}

