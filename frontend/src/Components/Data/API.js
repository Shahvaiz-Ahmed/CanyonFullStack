import axios from "axios";


export const products = async (url)=>{
    const res = await axios.get(url);
    return res;
}
