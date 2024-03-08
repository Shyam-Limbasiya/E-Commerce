package com.example.fsdproj.controller;

import com.example.fsdproj.entity.Cart;
import com.example.fsdproj.repository.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CartController {

    private final CartRepository cartRepository;

    @Autowired
    public CartController(CartRepository cartRepository) {
        this.cartRepository = cartRepository;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/api/add-to-cart")
    public ResponseEntity<?> addToCart(@RequestBody Cart cart) {
        cartRepository.save(cart);
        return ResponseEntity.ok("Item added to cart successfully");
    }


}
