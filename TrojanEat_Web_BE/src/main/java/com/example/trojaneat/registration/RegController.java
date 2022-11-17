package com.example.trojaneat.registration;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "api/v1/registration")
@AllArgsConstructor
public class RegController {

    private final RegService regService;

    @PostMapping
    public String register(@RequestBody RegRequest request) {
        return regService.register(request);
    }

    @GetMapping(path = "confirm")
    public String confirm(@RequestParam("token") String token) {
        return regService.confirmToken(token);
    }

}
