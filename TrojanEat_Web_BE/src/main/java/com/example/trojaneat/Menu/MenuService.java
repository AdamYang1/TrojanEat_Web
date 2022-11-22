package com.example.trojaneat.Menu;

import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class MenuService {
    private final MenuRepository menuRepository;

    public MenuService(MenuRepository menuRepository) {
        this.menuRepository = menuRepository;
    }

    public List<Menu> getMenus() {return menuRepository.findAll(); }

    public List<Menu> getAllMatchedMenu(String type, String date, String meal) {
        if(type == "beef")
            return menuRepository.findAllByBeef(date, meal);
        return null;
    }
}
