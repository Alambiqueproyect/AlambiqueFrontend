import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://localhost:7227/',
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
})

 export const ProductService = {
    async getProducts() {
        let response = await apiClient.get("/Product/GetAll");
        let allProducts = response.data;
        return allProducts;
    },
    async getProduct(id) {
        let response = await apiClient.get("/products/" + id);
        let product = response.data;
        return product;
    },
    async submitProduct(newProduct){
        await apiClient.post("/products", newProduct)
    },
    async deleteProduct(id){
        await apiClient.delete("/products/" + id)
    },
    async updateProduct(id, updatedProduct){
        await apiClient.patch("/products/" + id, updatedProduct)
    }
}

export default ProductService