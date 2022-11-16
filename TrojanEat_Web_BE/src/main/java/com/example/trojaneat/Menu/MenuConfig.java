package com.example.trojaneat.Menu;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.Calendar;
import java.util.Date;
import java.util.List;

@Configuration
public class MenuConfig {
    @Bean
    CommandLineRunner menu(MenuRepository repository) {
        return args -> {
            Menu food1 = new Menu(1L, "Grilled Beef", 2, 2, "2022-08-08", 1, 1, 0,
                    0, 0, 0, 0, 0, 0, "EVK", "lunch" );
            Menu food2 = new Menu(2L, "Grilled Chicken", 1, 1, "2022-08-08", 1, 0, 0,
                    0, 0, 1, 0, 0, 0, "VLG", "dinner" );
            repository.saveAll(List.of(food1, food2));
        };

    }
}
