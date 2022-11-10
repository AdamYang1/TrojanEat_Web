package com.example.trojaneat.User;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "User")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
//    @SequenceGenerator(
//            name = "user_sequence",
//            sequenceName = "user_sequence",
//            allocationSize = 1
//    )
//    @GeneratedValue(
//            strategy = GenerationType.SEQUENCE,
//            generator = "user_sequence"
//    )
    private Long id;
    private String email;
    private String password;
    private String dh_rec;
    private Integer beef;
    private Integer diary;
    private Integer eggs;
    private Integer shellfish;
    private Integer pork;
    private Integer chicken;
    private Integer fish;
    private Integer seasame;
    private Integer vegan;
    private Double evk_rec;
    private Double pks_rec;

    private Double vlg_rec;
    @Transient
    private LocalDate curr_time;

    public User() {
    }

    public User(Long id, String email, String password,
                String dh_rec, Integer beef, Integer diary, Integer eggs,
                Integer shellfish, Integer pork, Integer chicken, Integer fish,
                Integer seasame, Integer vegan, Double evk_rec, Double pks_rec, Double vlg_rec) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.dh_rec = dh_rec;
        this.beef = beef;
        this.diary = diary;
        this.eggs = eggs;
        this.shellfish = shellfish;
        this.pork = pork;
        this.chicken = chicken;
        this.fish = fish;
        this.seasame = seasame;
        this.vegan = vegan;
        this.evk_rec = evk_rec;
        this.pks_rec = pks_rec;
        this.vlg_rec = vlg_rec;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getDh_rec() {
        return dh_rec;
    }

    public void setDh_rec(String dh_rec) {
        this.dh_rec = dh_rec;
    }

    public Integer getBeef() {
        return beef;
    }

    public void setBeef(Integer beef) {
        this.beef = beef;
    }

    public Integer getDiary() {
        return diary;
    }

    public void setDiary(Integer diary) {
        this.diary = diary;
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

    public Double getEvk_rec() {
        return evk_rec;
    }

    public void setEvk_rec(Double evk_rec) {
        this.evk_rec = evk_rec;
    }

    public Double getPks_rec() {
        return pks_rec;
    }

    public void setPks_rec(Double pks_rec) {
        this.pks_rec = pks_rec;
    }

    public Double getVlg_rec() {
        return vlg_rec;
    }

    public void setVlg_rec(Double vlg_rec) {
        this.vlg_rec = vlg_rec;
    }

    public LocalDate getCurr_time() {
        return curr_time;
    }

    public void setCurr_time(LocalDate curr_time) {
        this.curr_time = curr_time;
    }
}