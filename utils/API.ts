import axios from "axios"

const baseUrl = "https://magzsalone-c6d08b8d094b.herokuapp.com/api/v1"


/* https://magzsalone-c6d08b8d094b.herokuapp.com/api/v1/category/categories */



export const getAllCategoriesApi = async() => { 
    const response = await axios.get(`${baseUrl}/category/categories`)
    return response
}


export const getAllServicesApi = async() => { 
    const response = await axios.get(`${baseUrl}/service/services`)
    return response
}




export const createServiceApi = async (data: {
    servicePrice: string,
    serviceName: string,
    categoryId: string
}) => { 
    const response = await axios.post(`${baseUrl}/service/create`, data)
}



