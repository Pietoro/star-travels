package com.startravels.startravels.Controllers;

import com.startravels.startravels.Models.Trip;
import com.startravels.startravels.Models.TripDAO;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/api/trips")
public class TripsController {

    private TripDAO tripDAO;

    @GetMapping
    public List<Trip> getTrips() {
        return tripDAO.findByPromoted(true);
    }
}
