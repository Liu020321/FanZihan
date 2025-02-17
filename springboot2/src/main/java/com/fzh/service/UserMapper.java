package com.fzh.service;

import com.fzh.pojo.User;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface UserMapper {
    void insertUser(User user);

    void deleteUser(Integer id);

    List<User> getAllUsers();
}


