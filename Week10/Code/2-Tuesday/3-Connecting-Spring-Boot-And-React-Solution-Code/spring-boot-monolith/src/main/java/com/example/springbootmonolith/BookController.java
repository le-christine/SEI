package com.example.springbootmonolith;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BookController {
    @GetMapping("/api/books")
    @CrossOrigin(origins = "http://localhost:3000")
    public String[] getBooks() {
        String[] booksArray = {"Book1", "Book2", "Book3", "Book4", "Book5"};
        return booksArray;
    }

    @GetMapping("/api/songs")
    @CrossOrigin(origins = "http://localhost:3000")
    public String[] getSongs() {
        String[] songsArray = {"Song1", "Song2", "Song3", "Song4", "Song5"};
        return songsArray;
    }
}