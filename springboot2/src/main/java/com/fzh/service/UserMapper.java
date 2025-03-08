package com.fzh.service;

import com.fzh.pojo.User;
import com.fzh.pojo.UserInfo;
import com.fzh.pojo.UserOpinion;
import com.fzh.pojo.UserWithDetails;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface UserMapper {

    List<UserWithDetails> getAllUsersWithDetails();

    // 获取所有用户及其详细信息（不包含 userOpinions）
    List<User> getAllUsersWithoutOpinions();
}


