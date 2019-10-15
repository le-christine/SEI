package com.ga.usersapi.repository;

import com.ga.usersapi.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {
    public List<User> findByFirstNameContainsOrLastNameContains(String firstName, String lastName);
}
