package pl.hzablocki.ordermicroservice.model;

import lombok.Data;

@Data
public
class Customer {
    private long id;
    private String firstName;
    private String lastName;
}