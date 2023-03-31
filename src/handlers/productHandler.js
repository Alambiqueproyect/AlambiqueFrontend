import { productService } from '../services/productService';
export const productHandler = {
    addProduct(newProduct) {
        if (!newProduct) {
            return;
        }
        let newProductStructure = {
            "id": newProduct.id,
            "productName": newProduct.productName,
            "price": newProduct.price,
            "description": newProduct.description,
            "image": newProduct.image,
            "stocks": newProduct.stocks,
            "effectsDuration": newProduct.effectsDuration,
            "adverseEffects": newProduct.adverseEffects,
            "productCategory": newProduct.productCategory,
            "ingredients": newProduct.ingredients,
        }
        return productService.submitProduct(newProductStructure);
    },
    loadProducts() {
        return productService.getProducts();
    },
    loadProduct(id) {
        return productService.getProduct(id);
    },

    deleteProduct(id) {
        return productService.deleteProduct(id);
    },
    updateProduct(id, updatedProduct) {
        if (!updatedProduct) {
            return;
        }
        let updatedProductStructure = {
            id: updatedProduct.id,
            "productName": updatedProduct.productName,
            "price": updatedProduct.price,
            "description": updatedProduct.description,
            "image": updatedProduct.image,
            "stock": updatedProduct.stock,
            "effectsDuration": updatedProduct.effectsDuration,
            "adverseEffects": updatedProduct.adverseEffects,
            "productCategory": updatedProduct.productCategory,
            "ingredients": updatedProduct.ingredients,
        }
        return productService.updateProduct(id, updatedProductStructure);
    },

    async fetchProduct({ params }) {
        const product = await productHandler.loadProduct(params.id);
        return { product };
    },

}