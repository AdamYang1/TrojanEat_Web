package com.example.trojaneat.DHall;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.List;

@Configuration
public class DHallConfig {
    @Bean
    CommandLineRunner dhall(DHallRepository repository) {
        return args -> {
            DHall pks = new DHall("Parkside Dining Hall", false, "https://hospitality.usc.edu/wp-content/uploads/2015/06/01_evk_slider.jpg");
            DHall evk = new DHall("Everybody's Kitchen", false, "https://hospitality.usc.edu/wp-content/uploads/2015/06/01_evk_slider.jpg");
            DHall village = new DHall("USC Village Dining Hall", false, "https://hospitality.usc.edu/wp-content/uploads/2017/07/01_usc_village_dining_hall.jpg");
            repository.saveAll(List.of(evk, pks, village));
        };

    }
}
