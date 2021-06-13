package pl.hzablocki.product.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.hzablocki.product.model.Product;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {

    List<Product> findAllByPlatform(String platform);
}
