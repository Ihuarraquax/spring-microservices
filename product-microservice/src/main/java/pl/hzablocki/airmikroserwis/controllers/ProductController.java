package pl.hzablocki.airmikroserwis.controllers;

import org.springframework.web.bind.annotation.*;
import pl.hzablocki.airmikroserwis.model.Product;
import pl.hzablocki.airmikroserwis.repositories.ProductRepository;

import java.util.List;

@RestController
public class ProductController {

    private final ProductRepository repository;

    public ProductController(ProductRepository repository) {
        this.repository = repository;
        Product product = new Product();
        product.setName("samsung");
        product.setDescription("szypki telefon");
        repository.save(product);

        product = new Product();
        product.setName("iphone");
        product.setDescription("telefon firmy apple");
        repository.save(product);
    }

    @GetMapping()
    List<Product> all() {
        return repository.findAll();
    }

    @PostMapping("/products")
    Product newProduct(@RequestBody Product newProduct) {
        return repository.save(newProduct);
    }


    @GetMapping("/products/{id}")
    Product one(@PathVariable Long id) throws Exception {
        return repository.findById(id)
                .orElseThrow(() -> new Exception());
    }

    @PutMapping("/products/{id}")
    Product replaceProduct(@RequestBody Product newProduct, @PathVariable Long id) {
        return repository.findById(id)
                .map(Product -> {
                    Product.setName(newProduct.getName());
                    Product.setDescription(newProduct.getDescription());
                    return repository.save(Product);
                })
                .orElseGet(() -> {
                    newProduct.setId(id);
                    return repository.save(newProduct);
                });
    }

    @DeleteMapping("/products/{id}")
    void deleteProduct(@PathVariable Long id) {
        repository.deleteById(id);
    }
}
