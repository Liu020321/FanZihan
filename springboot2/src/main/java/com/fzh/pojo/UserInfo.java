package com.fzh.pojo;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserInfo {
    private Integer id;
    private Integer userId;         // 外键关联到 users 表
    private String nickname;
    private String avatarUrl;
    private String realName;
    private String gender;
    private String phoneNumber;
    private String highSchool;
    private String currentGrade;
    private String university;
    private String majorName;
    private String universityGrade;
    private String workExperience;
}
