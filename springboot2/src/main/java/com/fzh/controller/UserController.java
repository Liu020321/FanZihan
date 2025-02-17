package com.fzh.controller;

import com.fzh.pojo.User;
import com.fzh.service.impl.UserMapperImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserMapperImpl userMapperImpl;

    @PostMapping
    public ResponseEntity<Void> createUser(@RequestBody User user) {
        userMapperImpl.addUser(user);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Integer id) {
        userMapperImpl.deleteUser(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }

    @GetMapping
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = userMapperImpl.getAllUsers();
        return ResponseEntity.ok(users); // 自动将 List<User> 转换为 JSON 格式并返回
    }
}

