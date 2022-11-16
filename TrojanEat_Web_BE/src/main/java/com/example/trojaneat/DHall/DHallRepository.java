package com.example.trojaneat.DHall;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DHallRepository extends JpaRepository<DHall, Long> {
    List<DHall> findByIsOpen(boolean isOpen);
    List<DHall> findByNameContaining(String name);
}
