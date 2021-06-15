package pl.hzablocki.ordermicroservice.controllers;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.netflix.appinfo.InstanceInfo;
import com.netflix.discovery.EurekaClient;
import com.netflix.discovery.shared.Application;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.hateoas.CollectionModel;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.mediatype.hal.Jackson2HalModule;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;
import pl.hzablocki.ordermicroservice.model.Customer;
import pl.hzablocki.ordermicroservice.model.Order;
import pl.hzablocki.ordermicroservice.model.Product;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = "http://localhost:3000", maxAge = 3600)
public class OrderController {
    List<Order> orders;
    int id = 1;
    private final RestTemplate halRestTemplate;
    private final RestTemplate restTemplate;

    @Qualifier("eurekaClient")
    @Autowired
    private EurekaClient eurekaClient;

    public OrderController() {
        orders = new ArrayList<>();
        halRestTemplate = halRestTemplate();
        restTemplate = new RestTemplate();
    }

//    @GetMapping
//    String index(Model model) {
////        List<OrderModel> orderModels = orders.stream().map(o ->
////                new OrderModel(o.getId(),
////                        fetchCustomer(o.getCustomerId()),
////                        fetchProduct(o.getProductId()),
////                        o.getCount()
////                )).collect(Collectors.toList());
////        model.addAttribute("orders", orderModels);
//        return "index";
//    }

//    @GetMapping(path = "addOrder")
//    String addOrder(Model model) {
//        model.addAttribute("products", fetchProducts());
//        model.addAttribute("customers", fetchCustomers());
//        return "addOrder";
//    }

//    @PostMapping("/addOrder")
//    public String addOrder(@RequestParam(name = "productId") String productId, @RequestParam(name = "customerId") String customerId, @RequestParam(name = "count") Integer count) {
////        Order order = new Order(id++, Integer.parseInt(customerId), Integer.parseInt(productId), count);
////        orders.add(order);
//        return "redirect:/";
//    }

    @PostMapping()
    public String addOrder2(@RequestBody OrderRequest request) {
        Order order = new Order();
        order.setId(++id);
        order.setCustomerId(++id);
        order.setItemsPrice(request.itemsPrice);
        order.setPaymentMethod(request.paymentMethod);
        order.setTotalPrice(request.totalPrice);
        order.setShippingAddress(request.shippingAddress);
        order.setTaxPrice(request.taxPrice);
        order.setShippingPrice(request.shippingPrice);
        order.setProducts(request.cartItems);
        orders.add(order);
        return "redirect:/";
    }

    @GetMapping()
    public List<Order> getallOrders(OrderRequest request) {
        return orders;
    }

    private Product fetchProduct(int productId) {
        Application application
                = eurekaClient.getApplication("product-microservice");
        InstanceInfo instanceInfo = application.getInstances().get(0);
        String hostname = instanceInfo.getHostName();
        int port = instanceInfo.getPort();
        Product product = restTemplate.getForObject("http://" + hostname + ":" + port + "/products/" + productId, Product.class);
        return product;
    }

    private Customer fetchCustomer(int customerId) {
        Application application
                = eurekaClient.getApplication("customer-microservice");
        InstanceInfo instanceInfo = application.getInstances().get(0);
        String hostname = instanceInfo.getHostName();
        int port = instanceInfo.getPort();
        ResponseEntity<EntityModel<Customer>> responseEntity = halRestTemplate.exchange("http://" + hostname + ":" + port + "/customers/" + customerId, HttpMethod.GET, null, new ParameterizedTypeReference<EntityModel<Customer>>() {
        });
        EntityModel<Customer> resource = responseEntity.getBody();
        return resource.getContent();
    }

    private List<Product> fetchProducts() {
        Application application
                = eurekaClient.getApplication("product-microservice");
        InstanceInfo instanceInfo = application.getInstances().get(0);
        String hostname = instanceInfo.getHostName();
        int port = instanceInfo.getPort();
        return restTemplate.getForObject("http://" + hostname + ":" + port + "/", List.class);
    }

    private List<Product> fetchCustomers() {
        Application application
                = eurekaClient.getApplication("customer-microservice");
        InstanceInfo instanceInfo = application.getInstances().get(0);
        String hostname = instanceInfo.getHostName();
        int port = instanceInfo.getPort();
        ResponseEntity<CollectionModel<Customer>> responseEntity = halRestTemplate.exchange("http://" + hostname + ":" + port + "/customers", HttpMethod.GET, null, new ParameterizedTypeReference<CollectionModel<Customer>>() {
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

