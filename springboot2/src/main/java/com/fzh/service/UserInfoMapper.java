package com.fzh.service;

import com.fzh.pojo.UserInfo;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

@Mapper
@Repository
public interface UserInfoMapper {
    void insertUserInfo(UserInfo userInfo);
    UserInfo getUserInfoByUserId(Integer userId);
    void deleteUserInfo(Integer userId);
}

