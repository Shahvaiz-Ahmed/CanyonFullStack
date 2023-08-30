import axios from "axios";


export const products = (url)=>{
    return axios.get(url).then(res=> res)
}
