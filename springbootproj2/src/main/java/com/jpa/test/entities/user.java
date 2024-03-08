package com.jpa.test.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class user {

    @Override
    public String toString() {
        return "user [Id=" + Id + ", name=" + name + ", city=" + city + ", status=" + status + "]";
    }

    public user() {
    }

    public int getId() {
        return Id;
    }

    public user(int id, String name, String city, String status) {
        Id = id;
        this.name = name;
        this.city = city;
        this.status = status;
    }

    public void setId(int id) {
        Id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    @Id
    @GenratedValue(strategy = GenerationType.AUTO)
    private int Id;
    private String name;
    private String city;
    private String status;
}
