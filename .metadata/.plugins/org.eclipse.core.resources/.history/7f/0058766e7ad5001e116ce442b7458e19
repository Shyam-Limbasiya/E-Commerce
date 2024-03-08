package com.jpa.test;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import com.jpa.test.dao.UserRepository;
import com.jpa.test.entities.user;

@SpringBootApplication
public class SpringbootprojApplication {

	public static void main(String[] args) {
		ApplicationContext context =SpringApplication.run(SpringbootprojApplication.class, args);
		UserRepository userRepository=context.getBean(UserRepository.class)
				user u=new user();
				u.setName("Shyam");
				u.setStatus("Done");
				u.setCity("Rajkot");
		
				user u1=userRepository.save(u);
				System.out.println(u1);
				
	}

}
