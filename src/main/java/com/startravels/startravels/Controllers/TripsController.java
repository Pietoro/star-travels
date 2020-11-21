package com.startravels.startravels.Controllers;

import com.startravels.startravels.Models.Trip;
import com.startravels.startravels.Models.TripDAO;
import lombok.AllArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

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
}
