package pl.zablocki.customerwebservice;

import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurerAdapter;
import org.springframework.stereotype.Component;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import java.util.List;
@EnableDiscoveryClient
@SpringBootApplication
public class CustomerWebserviceApplication {

	public static void main(String[] args) {
		SpringApplication.run(CustomerWebserviceApplication.class, args);
	}
}

@RepositoryRestResource
interface CustomerRepository extends CrudRepository<Customer,Long> { }

@Data
@Entity
class Customer {
	@Id
	@GeneratedValue
	private long id;
	private String firstName;
	private String lastName;
}

@Component
class Config {
	@Bean
	public RepositoryRestConfigurer repositoryRestConfigurer()
	{
		return RepositoryRestConfigurer.withConfig(config -> {
			config.exposeIdsFor(Customer.class);
		});
	}
}
@Component
class initCLR implements CommandLineRunner {

	@Autowired
	CustomerRepository customerRepository;
	@Override
	public void run(String...args) {
		Customer customer = new Customer();
		customer.setFirstName("Adam");
		customer.setLastName("Małysz");
		customerRepository.save(customer);
		customer = new Customer();
		customer.setFirstName("Borys");
		customer.setLastName("Nowak");
		customerRepository.save(customer);
	}
}