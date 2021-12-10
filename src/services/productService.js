import axios from "axios";

export default class ProductService{

    getProduct(){
        return axios.get("http://localhost:8080/api/products/get/All")
    }

    getProductName(productName){
        return axios.get("http://localhost:8080/api/products/get/productName?productName="+productName)
    }

}