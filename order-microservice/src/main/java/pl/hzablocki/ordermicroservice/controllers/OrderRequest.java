package pl.hzablocki.ordermicroservice.controllers;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;
@Data
@NoArgsConstructor
public class OrderRequest {
    public List<Integer> cartItems;
    public double itemsPrice;
    public String paymentMethod;
    public Address shippingAddress;
    public double shippingPrice;
    public double taxPrice;
    public double totalPrice;
}