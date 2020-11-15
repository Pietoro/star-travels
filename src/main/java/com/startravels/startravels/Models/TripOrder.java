package com.startravels.startravels.Models;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "trip_orders")
public class TripOrder {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne(targetEntity = Trip.class)
    private Trip trip;

    @Column(nullable = false)
    private int participantsNumber;

    @Column(nullable = false)
    private int price;

    @ManyToOne(targetEntity = User.class)
    private User user;
}
