package com.ga.songsapi.controller;

import com.ga.songsapi.model.Song;
import com.ga.songsapi.service.SongService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class SongsController {

    @Autowired
    private SongService songService;

    @GetMapping("/all")
    public Iterable<Song> getAll() {
        return songService.getAll();
    }

    @GetMapping("/view/{id}")
    public Song searchById(@PathVariable long id) {
        return songService.searchById(id);
    }

    @GetMapping("/searchTitle/{title}")
    public Iterable<Song> searchByTitle(@PathVariable String title) {
        return songService.searchByTitle(title);
    }

    @GetMapping("/searchLength")
    public List<Song> searchByLength(@RequestParam int min, @RequestParam int max) {
        return songService.searchByLength(min, max);
    }

    @GetMapping("/searchContent/{content}")
    public List<Song> searchByContent(@PathVariable String content) {
        return songService.searchByContent(content);
    }

    @DeleteMapping("/delete/{id}")
    public HttpStatus deleteSong(@PathVariable long id) {
        return songService.deleteSong(id);
    }

    @PostMapping("/create")
    public HttpStatus createSong(@RequestBody Song Song) {
        return songService.createSong(Song);
    }

    @PatchMapping("/update/{id}")
    public HttpStatus updateSong(@PathVariable long id, @RequestBody Song songRequest) {
        return songService.updateSong(id, songRequest);
    }
}
