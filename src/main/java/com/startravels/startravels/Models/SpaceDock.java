package com.startravels.startravels.Models;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "space_docks")
public class SpaceDock {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column
    private String name;

    @ManyToOne(cascade = CascadeType.ALL, targetEntity = City.class)
    private City city;
}
