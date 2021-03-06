package com.startravels.startravels.Models;

import lombok.Data;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Data
@Table(name = "trips")
public class Trip {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne(targetEntity = SpaceDock.class)
    private SpaceDock dockFrom;

    @ManyToOne(targetEntity = SpaceDock.class)
    private SpaceDock dockTo;

    @ManyToOne(targetEntity = Hotel.class)
    private Hotel hotel;

    @Column(nullable = false)
    private LocalDate departureDate;

    @Column(nullable = false)
    private LocalDate returnDate;

    @Column(nullable = false)
    private int price;

    @Column(nullable = false)
    private boolean promoted;

    @Column(nullable = false)
    private int availablePlaces;

    @ManyToOne(targetEntity = BoardType.class)
    private BoardType boardType;

    @Entity
    @Data
    @Table(name = "board_types")
    private static class BoardType {

        @Id
        private String code;

        @Column
        private String description;
    }
}
