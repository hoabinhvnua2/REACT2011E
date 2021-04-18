import axios from "axios"
import {REAL_API} from '../common/real-api';

const getUser = async () => {
    const resp = await axios.get(`${REAL_API}/user`);

    return resp
}
// const addNewProduct = async () => {
//     const resp = await axios.get(url_api);

//     return resp
// }

const userApi = {
    getUser,
    // addNewProduct
};

export default userApi


