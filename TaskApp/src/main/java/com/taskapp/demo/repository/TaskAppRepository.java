package com.taskapp.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.taskapp.demo.entity.Status;
import com.taskapp.demo.entity.TaskApp;

import jakarta.transaction.Transactional;


@Repository
public interface TaskAppRepository extends JpaRepository<TaskApp, Long> {

public  List<TaskApp> findByEmail(String email);
public List<TaskApp> findByStatus(Status status);

@Modifying
@Transactional
@Query("UPDATE tbltask t SET t.status = :status WHERE t.id = :id")
int updateTaskStatusById(@Param("id") Long id, @Param("status") Status status);

}
