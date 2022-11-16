package com.example.trojaneat.Menu;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class MenuController {
    private final MenuService menuService;

    @Autowired
    public MenuController(MenuService menuService) {
        this.menuService = menuService;
    }

    @GetMapping("/menu")
    public List<Menu> getAllMenu(){return menuService.getMenus();}

    @GetMapping("/matchedMenu/type/{type}/Date/{date}/meal/{meal}")
    public List<Menu> getAllMatchedMenu(
            @PathVariable("type") String type, @PathVariable("date") String date,
            @PathVariable("meal") String meal) {
        return menuService.getAllMatchedMenu(type, date, meal);
    }
}
