package com.startravels.startravels.Models;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "hotels")
public class Hotel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column
    private String name;

    @ManyToOne(cascade = CascadeType.ALL, targetEntity = City.class)
    private City city;

    @Column
    private String description;

    @ManyToOne(cascade = CascadeType.ALL, targetEntity = Standard.class)
    private Standard standard;

    @Entity
    @Data
    @Table(name = "standards")
    static class Standard {

        @Id
        private Integer stars;

    }
}
