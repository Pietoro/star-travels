package com.startravels.startravels.Controllers;

import com.startravels.startravels.Models.Trip;
import com.startravels.startravels.Models.TripDAO;
import lombok.AllArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDate;
import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/api/trips")
public class TripsController {

    private TripDAO tripDAO;

    @GetMapping("/promoted")
    public List<Trip> getPromotedTrips() {
        return tripDAO.findByPromoted(true);
    }

    @GetMapping
    public List<Trip> getTrips(
            @RequestParam(required = false) String cityName,
            @RequestParam(required = false) String planetName,
            @RequestParam(required = false) @DateTimeFormat(pattern="yyyy-MM-dd")LocalDate departureDate,
            @RequestParam(required = false) @DateTimeFormat(pattern="yyyy-MM-dd")LocalDate returnDate
    ) {
        return tripDAO.findBySearchParameters(
                cityName, planetName, departureDate, returnDate);
    }

    @GetMapping("/{id}")
    public Trip getTrip(@PathVariable String id) {
        int idInteger;
        try {
            idInteger = Integer.parseInt(id);
        } catch(Exception e) {
            throw new ResponseStatusException(
                    HttpStatus.BAD_REQUEST,
                    "Invalid parameter");
        }
        return tripDAO
                .findById(idInteger)
                .orElseThrow(
                        () -> new ResponseStatusException(
                                HttpStatus.NOT_FOUND,
                                "Trip not found"));
    }
}
