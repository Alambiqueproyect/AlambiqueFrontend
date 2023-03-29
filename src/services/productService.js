import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://localhost:7227',
    withCredentials: false,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
})

export const productService = {
    async getProducts() {
        let response = await apiClient.get("/Product/GetAll");
        if (!response==200)
            throw {
                status: response.status,
                statusText: "Not found",
            };
        let allProducts = response.data;
        return allProducts;
    },
    async getProduct(id) {
        let response = await apiClient.get("/" + id);
        if (!response==200)
        throw {
            status: response.status,
            statusText: "Not found",
        };
        let product = response.data;
        return product;
    },
    async submitProduct(newProduct){
        await apiClient.post("/Product/Post?userName=Bruja%20Aver%C3%ADa&userPassword=123456", newProduct)
    },
    async deleteProduct(id){
        await apiClient.delete("/" + id)
    },
    async updateProduct(id, updatedProduct){
        await apiClient.patch("/Product/Patch?userName=Bruja%20Aver%C3%ADa&userPassword=123456&Id" + id, updatedProduct)
    }
}
