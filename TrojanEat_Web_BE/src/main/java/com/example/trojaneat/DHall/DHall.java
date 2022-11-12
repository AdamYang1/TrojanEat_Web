package com.example.trojaneat.DHall;

import javax.persistence.*;
import java.util.ArrayList;

@Entity
@Table(name = "DiningHalls")
public class DHall {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "dh_name")
    private String name;

    @Column(name = "open")
    private boolean isOpen;

    @Column(name = "img")
    private String img_url;

    public DHall() {}
    public DHall(String n, boolean o, String u) {
        name = n;
        isOpen = o;
        img_url = u;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public boolean isOpen() {
        return isOpen;
    }

    public void setOpen(boolean open) {
        isOpen = open;
    }

    public String getImg_url() {
        return img_url;
    }

    public void setImg_url(String img_url) {
        this.img_url = img_url;
    }
}
