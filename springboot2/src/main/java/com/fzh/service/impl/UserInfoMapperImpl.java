package com.fzh.service.impl;

import com.fzh.pojo.UserInfo;
import com.fzh.service.UserInfoMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserInfoMapperImpl{
    @Autowired
    private UserInfoMapper userInfoMapper;

    public void addUserInfo(UserInfo userInfo) {
        userInfoMapper.insertUserInfo(userInfo);
    }

    public UserInfo getUserInfo(Integer userId) {
        return userInfoMapper.getUserInfoByUserId(userId);
    }

    public void deleteUserInfo(Integer userId) {
        userInfoMapper.deleteUserInfo(userId);
    }
}
