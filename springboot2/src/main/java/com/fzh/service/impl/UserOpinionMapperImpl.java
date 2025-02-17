package com.fzh.service.impl;

import com.fzh.pojo.UserOpinion;
import com.fzh.service.UserOpinionMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserOpinionMapperImpl {
    @Autowired
    private UserOpinionMapper userOpinionMapper;

    public void addUserOpinion(UserOpinion userOpinion) {
        userOpinionMapper.insertUserOpinion(userOpinion);
    }

    public List<UserOpinion> getUserOpinions(Integer userId) {
        return userOpinionMapper.getUserOpinionsByUserId(userId);
    }

    public void deleteUserOpinion(Integer id) {
        userOpinionMapper.deleteUserOpinion(id);
    }
}
