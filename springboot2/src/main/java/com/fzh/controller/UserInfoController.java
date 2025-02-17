package com.fzh.controller;

import com.fzh.pojo.UserInfo;
import com.fzh.service.impl.UserInfoMapperImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user-info")
public class UserInfoController {

    @Autowired
    private UserInfoMapperImpl userInfoMapperImpl;

    @PostMapping
    public ResponseEntity<Void> createUserInfo(@RequestBody UserInfo userInfo) {
        userInfoMapperImpl.addUserInfo(userInfo);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @GetMapping("/{userId}")
    public ResponseEntity<UserInfo> getUserInfo(@PathVariable Integer userId) {
        UserInfo userInfo = userInfoMapperImpl.getUserInfo(userId);
        return ResponseEntity.ok(userInfo);
    }

    @DeleteMapping("/{userId}")
    public ResponseEntity<Void> deleteUserInfo(@PathVariable Integer userId) {
        userInfoMapperImpl.deleteUserInfo(userId);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
