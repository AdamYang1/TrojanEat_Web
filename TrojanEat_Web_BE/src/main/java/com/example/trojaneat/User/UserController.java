package com.example.trojaneat.User;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping(path = "/api/v1/user")
public class UserController {
    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/getUsers")
    public List<User> getUsers(){return userService.getUsers();}

    //get user preference by id
    @GetMapping("/{id}/getPref")
    public Map<String, Integer> getUserPreferenceById(@PathVariable("id") Long id){
        return userService.getUserPreferenceById(id);
    }

    @GetMapping("/{id}/getRec")
    public Map<String, Double> getUserRecById(@PathVariable("id") Long id){
        return userService.getUserRecById(id);
    }

    @PutMapping("/{id}/updatePref")
    public void putUserPref(@PathVariable("id") Long id){
        userService.putUserRec(id, new Date());
    }
}
