package com.ga.songsapi.repository;

import com.ga.songsapi.model.Song;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SongRepository extends CrudRepository<Song, Long> {
    List<Song> findByTitleContaining(String title);
    List<Song> findByLengthBetween(int min, int max);
    List<Song> findByContentContaining(String content);
}
