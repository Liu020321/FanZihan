package com.fzh.pojo;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
    private Integer id;
    private Integer isAdmin;
    private String account;
    private String password;
    private UserInfo userInfo;  // 这里是 userInfo 属性
    private List<UserOpinion> userOpinions;  // 存储用户意见列表
}
