package com.taskapp.demo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Data
@Getter
@Setter
@ToString 
@Entity(name="tbltask")
public class TaskApp {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
//task id ,date ,details,status,email
private Long id;
private String date;  //implement date type also
private String details;
@Enumerated(EnumType.STRING)
private Status status;
private String email;


}
