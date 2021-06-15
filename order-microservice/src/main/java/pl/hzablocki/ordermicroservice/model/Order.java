package pl.hzablocki.ordermicroservice.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import pl.hzablocki.ordermicroservice.controllers.Address;

import java.util.List;

@Data
@NoArgsConstructor
public class Order {
    private int id;
    private int customerId;
    private List<Integer> products;
    double itemsPrice;
    String paymentMethod;
    Address shippingAddress;
    double shippingPrice;
    double taxPrice;
    double totalPrice;
}
