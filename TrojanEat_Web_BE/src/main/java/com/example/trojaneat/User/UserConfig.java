package com.example.trojaneat.User;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class UserConfig {
    @Bean
    CommandLineRunner commandLineRunner(UserRepository repository) {
        return args -> {
//            User user1 = new User(1L, "adamyang@usc.edu", "adampwd",
//                    "EVK", 1, 0, 0, 0, 0, 0,
//                    0, 0, 0, 2D, 0D, 0D);
//            ;
//            User user2 = new User(2L, "adamyang222@usc.edu", "adampwd22",
//                    "EVK", 1, 0, 0, 0, 0, 0,
//                    0, 0, 0, 2D, 0D, 0D);
//            repository.saveAll(List.of(user1, user2));
        };

    }
}
