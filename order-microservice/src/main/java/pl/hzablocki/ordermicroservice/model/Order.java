package pl.hzablocki.ordermicroservice.model;

import lombok.Data;

@Data
public class Order {
    private int id;
    private int customerId;
    private int productId;
    private int count;

    public Order(int id,int customerId, int productId, int count){
        this.id = id;
        this.customerId = customerId;
        this.productId = productId;
        this.count = count;
    }
}
