package com.fzh.controller;

import com.fzh.pojo.User;
import com.fzh.pojo.UserWithDetails;
import com.fzh.service.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/auth")
public class UserController {

    @Autowired
    private UserMapper userMapper;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> credentials) {
        String email = credentials.get("email");
        String password = credentials.get("password");

        // 打印日志以查看传入的邮箱和密码
        System.out.println("Email: " + email + ", Password: " + password);

        // 根据邮箱查询用户
        User user = userMapper.findByAccount(email);
        if (user != null && user.getPassword().equals(password)) {
            // 登录成功
            Map<String, Object> response = new HashMap<>();
            response.put("success", true);
            response.put("userData", user);  // 返回用户数据
            response.put("accessToken", "your-access-token");  // 返回 accessToken

            // 返回用户权限规则（根据需求可调整）
            response.put("userAbilityRules", "user-ability-rules");  // 这里可以返回实际的权限规则数据

            return ResponseEntity.ok(response);
        } else {
            // 登录失败
            Map<String, Object> response = new HashMap<>();
            response.put("success", false);
            response.put("message", "账号或密码错误");
            return ResponseEntity.status(401).body(response);
        }
    }


    // 查询所有用户
    @GetMapping("/users")
    public ResponseEntity<List<User>> getAllUsers() {
        List<User> users = userMapper.getAllUsers();
        return ResponseEntity.ok(users); // 自动将 List<User> 转换为 JSON 格式并返回
    }

    // 查询所有用户的详细信息
    @GetMapping("/users/json")
    public ResponseEntity<List<UserWithDetails>> getAllUsersJson() {
        List<UserWithDetails> usersWithDetails = userMapper.getAllUsersWithDetails();
        return ResponseEntity.ok(usersWithDetails); // 自动将 List 转换为 JSON 格式返回
    }


    // 删除用户
    @DeleteMapping("/users/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Integer id) {
        userMapper.deleteUser(id);
        return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
    }
}
