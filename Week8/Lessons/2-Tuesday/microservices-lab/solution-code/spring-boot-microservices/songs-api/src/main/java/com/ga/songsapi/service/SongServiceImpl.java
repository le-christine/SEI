package com.ga.songsapi.service;

import com.ga.songsapi.model.Song;
import com.ga.songsapi.repository.SongRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Service
public class SongServiceImpl implements SongService{

    @Autowired
    private SongRepository songRepository;

    @Override
    public Iterable<Song> getAll() {
        return songRepository.findAll();
    }

    @Override
    public Song searchById(long id) {
        return songRepository.findById(id).get();
    }

    @Override
    public Iterable<Song> searchByTitle(String title) {
        return songRepository.findByTitleContaining(title);
    }

    @Override
    public List<Song> searchByLength(int min, int max) {
        return songRepository.findByLengthBetween(min, max);
    }

    @Override
    public List<Song> searchByContent(String content) {
        return songRepository.findByContentContaining(content);
    }

    @Override
    public HttpStatus deleteSong(long id) {
        songRepository.deleteById(id);
        return HttpStatus.OK;
    }

    @Override
    public HttpStatus createSong(Song Song) {
        songRepository.save(Song);
        return HttpStatus.OK;
    }

    @Override
    public HttpStatus updateSong(long id, Song SongRequest) {
        Song Song = songRepository.findById(id).get();
        Song.setTitle(SongRequest.getTitle());
        Song.setLength(SongRequest.getLength());
        Song.setContent(SongRequest.getContent());
        songRepository.save(Song);
        return HttpStatus.OK;
    }
}
