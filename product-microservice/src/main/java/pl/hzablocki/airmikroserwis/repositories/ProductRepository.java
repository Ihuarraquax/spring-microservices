package pl.hzablocki.airmikroserwis.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.hzablocki.airmikroserwis.model.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {

}
