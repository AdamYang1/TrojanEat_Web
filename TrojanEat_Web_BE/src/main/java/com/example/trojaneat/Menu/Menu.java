package com.example.trojaneat.Menu;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "Menu")
public class Menu {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String food_name;
    // use integer instead of string to find breakfast, lunch, and dinner
    private Integer date_time;
    // same as above

    private String date;
    private Integer diary;
    private Integer beef;
    private Integer eggs;
    private Integer shellfish;
    private Integer pork;
    private Integer chicken;
    private Integer fish;
    private Integer seasame;
    private Integer vegan;

    private String dHall;

    private String meal_time;


    public Menu() {
    }

    public Menu(Long id, String food_name, Integer date_time,
                String date, Integer diary, Integer beef,
                Integer eggs, Integer shellfish, Integer pork, Integer chicken,
                Integer fish, Integer seasame, Integer vegan, String dHall, String meal_time) {
        this.id = id;
        this.food_name = food_name;
        this.date_time = date_time;

        this.date = date;
        this.diary = diary;
        this.beef = beef;
        this.eggs = eggs;
        this.shellfish = shellfish;
        this.pork = pork;
        this.chicken = chicken;
        this.fish = fish;
        this.seasame = seasame;
        this.vegan = vegan;
        this.dHall = dHall;
        this.meal_time = meal_time;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFood_name() {
        return food_name;
    }

    public void setFood_name(String food_name) {
        this.food_name = food_name;
    }

    public Integer getDate_time() {
        return date_time;
    }

    public void setDate_time(Integer date_time) {
        this.date_time = date_time;
    }



    public Integer getDiary() {
        return diary;
    }

    public void setDiary(Integer diary) {
        this.diary = diary;
    }

    public Integer getBeef() {
        return beef;
    }

    public void setBeef(Integer beef) {
        this.beef = beef;
    }

    public Integer getEggs() {
        return eggs;
    }

    public void setEggs(Integer eggs) {
        this.eggs = eggs;
    }

    public Integer getShellfish() {
        return shellfish;
    }

    public void setShellfish(Integer shellfish) {
        this.shellfish = shellfish;
    }

    public Integer getPork() {
        return pork;
    }

    public void setPork(Integer pork) {
        this.pork = pork;
    }

    public Integer getChicken() {
        return chicken;
    }

    public void setChicken(Integer chicken) {
        this.chicken = chicken;
    }

    public Integer getFish() {
        return fish;
    }

    public void setFish(Integer fish) {
        this.fish = fish;
    }

    public Integer getSeasame() {
        return seasame;
    }

    public void setSeasame(Integer seasame) {
        this.seasame = seasame;
    }

    public Integer getVegan() {
        return vegan;
    }

    public void setVegan(Integer vegan) {
        this.vegan = vegan;
    }

    public String getdHall() {
        return dHall;
    }

    public void setdHall(String dHall) {
        this.dHall = dHall;
    }

    public String getMeal_time() {
        return meal_time;
    }

    public void setMeal_time(String meal_time) {
        this.meal_time = meal_time;
    }

    @Override
    public String toString() {
        return "Menu{" +
                "id=" + id +
                ", food_name='" + food_name + '\'' +
                ", date_time=" + date_time +
                ", dhall=" + dhall +
                ", diary=" + diary +
                ", beef=" + beef +
                ", eggs=" + eggs +
                ", shellfish=" + shellfish +
                ", pork=" + pork +
                ", chicken=" + chicken +
                ", fish=" + fish +
                ", seasame=" + seasame +
                ", vegan=" + vegan +
                '}';
    }
}
