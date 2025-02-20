package com.fzh.service;

import com.fzh.pojo.User;
import com.fzh.pojo.UserInfo;
import com.fzh.pojo.UserOpinion;
import com.fzh.pojo.UserWithDetails;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface UserMapper {

    void insertUser(User user);

    void deleteUser(Integer id);

    List<User> getAllUsers();

    List<UserWithDetails> getAllUsersWithDetails();
}


