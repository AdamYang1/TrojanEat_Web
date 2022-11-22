package com.example.trojaneat.Menu;

import org.springframework.data.jpa.repository.Query;
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

    public List<Menu> getAllMatchedMenuByDh(String type, String meal, String dh) {
        if(type.equals("beef"))
            return menuRepository.findAllByBeef(meal, dh);
        if(type.equals("chicken"))
            return menuRepository.findAllByChicken(meal, dh);
        if(type.equals("diary"))
            return menuRepository.findAllByDiary(meal, dh);
        if(type.equals("eggs"))
            return menuRepository.findAllByEggs(meal, dh);
        if(type.equals("shellfish"))
            return menuRepository.findAllByShellfish(meal, dh);
        if(type.equals("pork"))
            return menuRepository.findAllByPork(meal, dh);
        if(type.equals("fish"))
            return menuRepository.findAllByFish(meal, dh);
        if(type.equals("seasame"))
            return menuRepository.findAllBySeasame(meal, dh);
        if(type.equals("vegan"))
            return menuRepository.findAllByVegan(meal, dh);
        return null;
    }
}
