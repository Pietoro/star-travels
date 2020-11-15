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

    @Column(nullable = false)
    private String name;

    @ManyToOne(targetEntity = City.class)
    private City city;
}
