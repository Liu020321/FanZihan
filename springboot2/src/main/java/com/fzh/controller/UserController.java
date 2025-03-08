package com.fzh.controller;

import com.fzh.pojo.User;
import com.fzh.pojo.UserWithDetails;
import com.fzh.service.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/auth")
public class UserController {

    @Autowired
    private UserMapper userMapper;

    // 查询所有用户的详细信息
    @GetMapping("/users/json")
    public ResponseEntity<List<UserWithDetails>> getAllUsersJson() {
        List<UserWithDetails> usersWithDetails = userMapper.getAllUsersWithDetails();
        return ResponseEntity.ok(usersWithDetails); // 自动将 List 转换为 JSON 格式返回
    }

    // 查询所有用户的详细信息（不包含 userOpinions）
    @GetMapping("/users")
    public ResponseEntity<List<User>> getAllUsersWithoutOpinions() {
        List<User> users = userMapper.getAllUsersWithoutOpinions();
        return ResponseEntity.ok(users); // 返回不包含 userOpinions 的用户信息
    }


}
