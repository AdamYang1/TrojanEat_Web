package com.example.trojaneat.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Repository
@Transactional(readOnly = true)
public interface UserRepository
        extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
    @Query("SELECT s.evk_rec FROM User s Where s.id = ?1")
    Double getUserEvkRecById(Long id);

    @Query("SELECT s.vlg_rec FROM User s Where s.id = ?1")
    Double getUserVlgRecById(Long id);

    @Query("SELECT s.pks_rec FROM User s Where s.id = ?1")
    Double getUserPksRecById(Long id);

    @Query("SELECT s FROM User s Where s.id = ?1")
    User findUserById(Long id);

    @Transactional
    @Modifying
    @Query("UPDATE AppUser a " +
            "SET a.enabled = TRUE WHERE a.email = ?1")
    static int enableAppUser(String email) {
        return 0;
    }


}

