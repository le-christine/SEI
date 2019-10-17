package com.ga.songsapi.service;

import com.ga.songsapi.model.Song;
import org.springframework.http.HttpStatus;

import java.util.List;

public interface SongService {

    public Iterable<Song> getAll();

    public Song searchById(long id);

    public Iterable<Song> searchByTitle(String title);

    public List<Song> searchByLength(int min, int max);

    public List<Song> searchByContent(String content);

    public HttpStatus deleteSong(long id);

    public HttpStatus createSong(Song Song);

    public HttpStatus updateSong(long id, Song SongRequest);
}
