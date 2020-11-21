package com.startravels.startravels.Models;

import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.List;

public interface TripDAO extends PagingAndSortingRepository<Trip, Integer> {


    List<Trip> findByPromoted(boolean isPromoted);

    @Query("select t from Trip t " +
            "where (:hotelCityName is null " +
            "OR t.hotel.city.name like %:hotelCityName%) " +
            "AND (:hotelPlanetName is null " +
            "OR t.hotel.city.planet.name like %:hotelPlanetName%) " +
            "AND (:departureDate is null " +
            "OR t.departureDate >= :departureDate)" +
            "AND (:returnDate is null " +
            "OR t.returnDate <= :returnDate)"
            )
    List<Trip> findBySearchParameters(
            @Param("hotelCityName")String hotelCityName,
            @Param("hotelPlanetName")String hotelPlanetName,
            @Param("departureDate") LocalDate departureDate,
            @Param("returnDate")LocalDate returnDate
            );
}
