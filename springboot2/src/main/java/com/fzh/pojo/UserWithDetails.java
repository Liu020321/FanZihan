package com.fzh.pojo;

import java.util.List;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserWithDetails {

    private User user;
    private UserInfo userInfo;
    private List<UserOpinion> userOpinions;
}
