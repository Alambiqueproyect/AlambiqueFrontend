import { productService }  from '../services/productService';

export const productHandler = {
    addProduct(newProduct) {
        if (!newProduct) {
            return;
        }
        let newProductStructure = {
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
            "id": "",
            "productname": updatedProduct.productname,
            "price": updatedProduct.price,
            "description": updatedProduct.description,
            "image": updatedProduct.image,
            "stocks": updatedProduct.stocks,
            "effectsduration": updatedProduct.effectsduration,
            "adverseeffects": updatedProduct.adverseeffects,
            "category": updatedProduct.category,
            "ingredients": updatedProduct.ingredients,
        }
        return productService.updateProduct(id, updatedProductStructure);
    },

    async fetchProduct({ params }) {
        const product = await productHandler.loadProduct(params. id);
        return { product };
    },

}