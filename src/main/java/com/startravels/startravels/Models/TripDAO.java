package com.startravels.startravels.Models;

import org.springframework.data.repository.PagingAndSortingRepository;

import java.util.List;

public interface TripDAO extends PagingAndSortingRepository<Trip, Integer> {

    List<Trip> findByPromoted(boolean isPromoted);
}
