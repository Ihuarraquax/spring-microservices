package pl.hzablocki.ordermicroservice.controllers;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.mediatype.hal.Jackson2HalModule;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.client.RestTemplate;
import pl.hzablocki.ordermicroservice.model.Customer;
import pl.hzablocki.ordermicroservice.model.Order;
import pl.hzablocki.ordermicroservice.model.OrderModel;
import pl.hzablocki.ordermicroservice.model.Product;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Controller
public class OrderController {
    List<Order> orders;
    int id = 1;
    private final RestTemplate halRestTemplate;
    private final RestTemplate restTemplate;

    public OrderController() {
        orders = new ArrayList<>();
        halRestTemplate = halRestTemplate();
        restTemplate = new RestTemplate();
    }
    @GetMapping
    String index(Model model) {
        List<OrderModel> orderModels = orders.stream().map(o ->
                new OrderModel(o.getId(),
                        fetchCustomer(o.getCustomerId()),
                        fetchProduct(o.getProductId()),
                        o.getCount()
                )).collect(Collectors.toList());
        model.addAttribute("orders", orderModels);
        return "index";
    }

    @GetMapping(path = "addOrder")
    String addOrder(Model model) {
        model.addAttribute("products", fetchProducts());
        model.addAttribute("customers", fetchCustomers());
        return "addOrder";
    }

    @PostMapping("/addOrder")
    public String addOrder(@RequestParam(name = "productId") String productId, @RequestParam(name = "customerId") String customerId, @RequestParam(name = "count") Integer count) {
        Order order = new Order(id++,Integer.parseInt(customerId),Integer.parseInt(productId),count);
        orders.add(order);
        return "redirect:/";
    }

    private Product fetchProduct(int productId) {
        Product product = restTemplate.getForObject("http://localhost:8081/products/" + productId, Product.class);
        return product;
    }

    private Customer fetchCustomer(int customerId) {
        ResponseEntity<EntityModel<Customer>> responseEntity = halRestTemplate.exchange("http://localhost:8082/customers/" + customerId, HttpMethod.GET, null, new ParameterizedTypeReference<EntityModel<Customer>>() {});
        EntityModel<Customer> resource = responseEntity.getBody();
        return resource.getContent();
    }

    private List<Product> fetchProducts() {
        return restTemplate.getForObject("http://localhost:8081/", List.class);
    }

    private List<Product> fetchCustomers() {
        ResponseEntity<CollectionModel<Customer>> responseEntity = halRestTemplate.exchange("http://localhost:8082/customers", HttpMethod.GET, null, new ParameterizedTypeReference<CollectionModel<Customer>>() {
        });
        CollectionModel<Customer> resources = responseEntity.getBody();
        return new ArrayList(resources.getContent());
    }


    private RestTemplate halRestTemplate() {
        ObjectMapper mapper = new ObjectMapper();
        mapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
        mapper.registerModule(new Jackson2HalModule());

        MappingJackson2HttpMessageConverter converter = new MappingJackson2HttpMessageConverter();
        converter.setSupportedMediaTypes(MediaType.parseMediaTypes("application/hal+json"));
        converter.setObjectMapper(mapper);
        return new RestTemplate(Arrays.asList(converter));
    }

}

