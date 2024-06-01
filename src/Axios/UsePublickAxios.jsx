import axios from "axios";

// eslint-disable-next-line react-refresh/only-export-components
export const axiosPublick = axios.create({
    baseURL: 'http://localhost:3000'
})

const UsePublickAxios = () => {
    return axiosPublick
};

export default UsePublickAxios;