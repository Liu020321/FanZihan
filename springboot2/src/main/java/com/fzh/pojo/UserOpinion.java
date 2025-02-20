package com.fzh.pojo;

import java.time.LocalDateTime;
import java.util.List;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserOpinion {
    private Integer id;
    private Integer userId;
    private String highSchool;
    private String university;
    private String majorName;
    private String universityGrade;
    private String opinionType;
    private String opinionText;
    private LocalDateTime opinionTime;   // 使用 LocalDateTime 存储精确到小时的时间

}
