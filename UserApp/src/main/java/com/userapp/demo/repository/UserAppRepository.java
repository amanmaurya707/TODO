package com.userapp.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.userapp.demo.entity.UserApp;

@Repository
public interface UserAppRepository extends JpaRepository<UserApp, Long> {

	public UserApp findByEmail(String email);


}
