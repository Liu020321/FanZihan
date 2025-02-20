package com.fzh.service.impl;

import com.fzh.pojo.User;
import com.fzh.pojo.UserWithDetails;
import com.fzh.service.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserMapperImpl {
    @Autowired
    private UserMapper userMapper;

    public void addUser(User user) {
        userMapper.insertUser(user);
    }

    public void deleteUser(Integer id) {
        userMapper.deleteUser(id);
    }

    public List<User> getAllUsers() {
        return userMapper.getAllUsers();
    }

    // 获取所有用户及详细信息
    public List<UserWithDetails> getAllUsersWithDetails() {
        return userMapper.getAllUsersWithDetails();
    }
}
