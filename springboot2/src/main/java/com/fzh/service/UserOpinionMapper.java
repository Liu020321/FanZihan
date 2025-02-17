package com.fzh.service;

import com.fzh.pojo.UserOpinion;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface UserOpinionMapper {
    void insertUserOpinion(UserOpinion userOpinion);
    List<UserOpinion> getUserOpinionsByUserId(Integer userId);
    void deleteUserOpinion(Integer id);
}
