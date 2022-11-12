package com.example.trojaneat.DHall;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class DHallController {

    @Autowired
    DHallRepository dHallRepository;

    // returns all dining halls
    @GetMapping("/dining-halls")
    public ResponseEntity<List<DHall>> getAllDHalls(@RequestParam(required = false) String name) {
        try {
            List<DHall> dining_halls = new ArrayList<DHall>();

            if (name == null)
                dHallRepository.findAll().forEach(dining_halls::add);
            else
                dHallRepository.findByNameContaining(name).forEach(dining_halls::add);

            if (dining_halls.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(dining_halls, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    // returns dining hall by ID
    @GetMapping("/dining-halls/{id}")
    public ResponseEntity<DHall> getDHallById(@PathVariable("id") long id) {
        Optional<DHall> dHallData = dHallRepository.findById(id);

        if (dHallData.isPresent()) {
            return new ResponseEntity<>(dHallData.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    /*@PostMapping("/dining-halls")
    public ResponseEntity<DHall> createDHall(@RequestBody DHall dhall) {
        // TODO
    }

    @PutMapping("/dining-halls/{id}")
    public ResponseEntity<DHall> updateDHall(@PathVariable("id") long id, @RequestBody DHall tutorial) {
        // TODO
    }*/

    @GetMapping("/dining-halls/isOpen")
    public ResponseEntity<List<DHall>> findByPublished() {
        try {
            List<DHall> dining_halls = dHallRepository.findByIsOpen(true);

            if (dining_halls.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }
            return new ResponseEntity<>(dining_halls, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
