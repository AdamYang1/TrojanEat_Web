package com.example.trojaneat.Menu;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public interface MenuRepository extends JpaRepository<Menu, Long> {

    @Query("SELECT m FROM Menu m Where m.beef = 1 AND m.date_time = ?1 AND m.meal_time = ?2")
    List<Menu> findAllByBeef(String date, String meal);

    @Query("SELECT m FROM Menu m Where m.chicken = 1 AND m.date_time = ?1 AND m.meal_time = ?2")
    List<Menu> findAllByChicken(String date, String meal);

    @Query("SELECT m FROM Menu m Where m.diary = 1 AND m.date_time = ?1 AND m.meal_time = ?2")
    List<Menu> findAllByDiary(String date, String meal);

    @Query("SELECT m FROM Menu m Where m.eggs = 1 AND m.date_time = ?1 AND m.meal_time = ?2")
    List<Menu> findAllByEggs(String date, String meal);

    @Query("SELECT m FROM Menu m Where m.shellfish = 1 AND m.date_time = ?1 AND m.meal_time = ?2")
    List<Menu> findAllByShellfish(String date, String meal);

    @Query("SELECT m FROM Menu m Where m.pork = 1 AND m.date_time = ?1 AND m.meal_time = ?2")
    List<Menu> findAllByPork(String date, String meal);

    @Query("SELECT m FROM Menu m Where m.fish = 1 AND m.date_time = ?1 AND m.meal_time = ?2")
    List<Menu> findAllByFish(String date, String meal);

    @Query("SELECT m FROM Menu m Where m.seasame = 1 AND m.date_time = ?1 AND m.meal_time = ?2")
    List<Menu> findAllBySeasame(String date, String meal);

    @Query("SELECT m FROM Menu m Where m.vegan = 1 AND m.date_time = ?1 AND m.meal_time = ?2")
    List<Menu> findAllByVegan(String date, String meal);
}

