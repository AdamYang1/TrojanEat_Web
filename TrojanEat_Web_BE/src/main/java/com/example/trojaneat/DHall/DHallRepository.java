package com.csci201_final_project.reactspringserver.respository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.csci201_final_project.reactspringserver.model.DHall;

public interface DHallRepository extends JpaRepository<DHall, Long> {
    List<DHall> findByIsOpen(boolean isOpen);
    List<DHall> findByNameContaining(String name);
}
