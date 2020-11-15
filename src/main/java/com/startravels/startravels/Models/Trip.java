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

    @ManyToOne(cascade = CascadeType.ALL, targetEntity = SpaceDock.class)
    private SpaceDock dockFrom;

    @ManyToOne(cascade = CascadeType.ALL, targetEntity = SpaceDock.class)
    private SpaceDock dockTo;

    @ManyToOne(cascade = CascadeType.ALL, targetEntity = Hotel.class)
    private Hotel hotel;

    @Column
    private LocalDate departureDate;

    @Column
    private LocalDate returnDate;

    @Column
    private Integer price;

    @Column
    private boolean promoted;

    @Column
    private Integer availablePlaces;

    @ManyToOne(cascade = CascadeType.ALL, targetEntity = BoardType.class)
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
