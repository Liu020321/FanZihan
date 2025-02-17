package com.fzh.controller;

import com.fzh.pojo.UserOpinion;
import com.fzh.service.impl.UserOpinionMapperImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user-opinions")
public class UserOpinionController {

    @Autowired
    private UserOpinionMapperImpl userOpinionService;

    @PostMapping
    public ResponseEntity<Void> createUserOpinion(@RequestBody UserOpinion userOpinion) {
        userOpinionService.addUserOpinion(userOpinion);
        return ResponseEntity.status(HttpStatus.CREATED).build();
    }

    @GetMapping("/{userId}")
    public ResponseEntity<List<UserOpinion>> getUserOpinions(@PathVariable Integer userId) {
        List<UserOpinion> opinions = userOpinionService.getUserOpinions(userId);
        return ResponseEntity.ok(opinions);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUserOpinion(@PathVariable Integer id) {
        userOpinionService.deleteUserOpinion(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}

