import { productService }  from '../services/productService';

export const productHandler = {
    addProduct(newProduct) {
        if (!newProduct) {
            return;
        }
        let newProductStructure = {
            "id": 0,
            "productName": newProduct.productName,
            "price": newProduct.price,
            "description": newProduct.description,
            "img": newProduct.img,
            "stock": newProduct.stock,
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
            "img": updatedProduct.img,
            "stock": updatedProduct.stock,
            "effectsduration": updatedProduct.effectsduration,
            "adverseeffects": updatedProduct.adverseeffects,
            "category": updatedProduct.category,
            "ingredients": updatedProduct.ingredients,
        }
        return productService.updateProduct(id, updatedProductStructure);
    }
}