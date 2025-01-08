package de.stuttgart.hft.service;

import de.stuttgart.hft.model.Product;
import de.stuttgart.hft.repository.ProductRepository;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.transaction.Transactional;
import java.util.List;

@ApplicationScoped
public class ProductService {

    private final ProductRepository repository;

    public ProductService(ProductRepository repository) {
        this.repository = repository;
    }

    public List<Product> getAllProducts() {
        return repository.listAll();
    }

    @Transactional
    public Product createProduct(Product product) {
        repository.persist(product);
        return product;
    }

    public Product getProductById(Long id) {
        return repository.findById(id);
    }

    @Transactional
    public void deleteProduct(Long id) {
        Product product = repository.findById(id);
        if (product != null) {
            repository.delete(product);
        }
    }
}
