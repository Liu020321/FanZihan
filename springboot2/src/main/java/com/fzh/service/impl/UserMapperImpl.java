package com.fzh.service.impl;

import com.fzh.pojo.User;
import com.fzh.pojo.UserWithDetails;
import com.fzh.service.UserMapper;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserMapperImpl {
    @Autowired
    private UserMapper userMapper;

    // 获取所有用户及详细信息
    public List<UserWithDetails> getAllUsersWithDetails() {
        return userMapper.getAllUsersWithDetails();
    }

    // 获取所有用户及详细信息（不包含 userOpinions）
    public List<User> getAllUsersWithoutOpinions() {
        return userMapper.getAllUsersWithoutOpinions();
    }


}
