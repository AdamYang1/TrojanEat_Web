package com.example.trojaneat.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository
        extends JpaRepository<User, Long> {

    @Query("SELECT s.evk_rec FROM User s Where s.id = ?1")
    Double getUserEvkRecById(Long id);

    @Query("SELECT s.vlg_rec FROM User s Where s.id = ?1")
    Double getUserVlgRecById(Long id);

    @Query("SELECT s.pks_rec FROM User s Where s.id = ?1")
    Double getUserPksRecById(Long id);

    @Query("SELECT s FROM User s Where s.id = ?1")
    User findUserById(Long id);

    @Query("SELECT s FROM User s WHERE s.email = ?1")
    List<User> findUserByEmail(String email);

}

