package com.example.trojaneat.Menu;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public interface MenuRepository extends JpaRepository<Menu, Long> {

    @Query("SELECT m FROM Menu m Where m.beef = 1 AND m.meal_time = ?1 AND m.dHall = ?2")
    List<Menu> findAllByBeef(String meal, String dh);

    @Query("SELECT m FROM Menu m Where m.chicken = 1 AND m.meal_time = ?1 AND m.dHall = ?2")
    List<Menu> findAllByChicken(String meal, String dh);

    @Query("SELECT m FROM Menu m Where m.diary = 1 AND m.meal_time = ?1 AND m.dHall = ?2")
    List<Menu> findAllByDiary(String meal, String dh);

    @Query("SELECT m FROM Menu m Where m.eggs = 1 AND m.meal_time = ?1 AND m.dHall = ?2")
    List<Menu> findAllByEggs(String meal, String dh);

    @Query("SELECT m FROM Menu m Where m.shellfish = 1 AND m.meal_time = ?1 AND m.dHall = ?2")
    List<Menu> findAllByShellfish(String meal, String dh);

    @Query("SELECT m FROM Menu m Where m.pork = 1 AND m.meal_time = ?1 AND m.dHall = ?2")
    List<Menu> findAllByPork(String meal, String dh);

    @Query("SELECT m FROM Menu m Where m.fish = 1 AND m.meal_time = ?1 AND m.dHall = ?2")
    List<Menu> findAllByFish(String meal, String dh);

    @Query("SELECT m FROM Menu m Where m.seasame = 1 AND m.meal_time = ?1 AND m.dHall = ?2")
    List<Menu> findAllBySeasame(String meal, String dh);

    @Query("SELECT m FROM Menu m Where m.vegan = 1 AND m.meal_time = ?1 AND m.dHall = ?2")
    List<Menu> findAllByVegan(String meal, String dh);
}

