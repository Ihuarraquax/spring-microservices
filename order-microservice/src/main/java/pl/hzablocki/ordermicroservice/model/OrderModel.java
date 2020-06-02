package pl.hzablocki.ordermicroservice.model;

public class OrderModel {
    public int id;
    public Customer customer;
    public Product product;
    public int count;

    public OrderModel(int id, Customer customer, Product product, int count) {
        this.id = id;
        this.customer = customer;
        this.product = product;
        this.count = count;
    }
}
