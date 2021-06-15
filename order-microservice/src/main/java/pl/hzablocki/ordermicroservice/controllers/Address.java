package pl.hzablocki.ordermicroservice.controllers;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class Address {
    public String fullName;
    public String address;
    public String city;
    public String postalCode;
    public String country;
}