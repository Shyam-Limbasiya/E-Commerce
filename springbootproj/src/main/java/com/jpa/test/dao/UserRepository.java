package com.jpa.test.dao;

import org.springframework.data.repository.CrudRepository;
import com.jpa.test.entities.user;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<user,Integer> {

}
