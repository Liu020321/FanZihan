### user表：

```
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,  -- 自增ID
    is_admin BOOLEAN NOT NULL DEFAULT FALSE,  -- 是否是管理员
    account VARCHAR(255) NOT NULL,  -- 账号
    password VARCHAR(255) NOT NULL  -- 密码
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
```

#### user_info表：

```
CREATE TABLE user_info (
    id INT AUTO_INCREMENT PRIMARY KEY,          -- 自增ID
    user_id INT NOT NULL,                       -- 用户ID，外键关联到 users 表
    nickname VARCHAR(255),                      -- 用户网名
    avatar_url VARCHAR(255),                    -- 头像地址
    real_name VARCHAR(255),                     -- 姓名
    gender ENUM('Male', 'Female', 'Other'),     -- 性别
    phone_number VARCHAR(20),                   -- 手机号
    high_school VARCHAR(255),                   -- 高中所在学校
    current_grade ENUM('1', '2', '3') NOT NULL, -- 当前年纪（数字表示）
    university VARCHAR(255),                    -- 本科所在学校
    major_name VARCHAR(255),                    -- 专业名称
    university_grade ENUM('1', '2', '3', '4') NOT NULL,  -- 本科年级
    work_experience ENUM('未毕业', '0-3年', '3-5年', '5年以上') NOT NULL, -- 工作经验
    FOREIGN KEY (user_id) REFERENCES users(id) -- 外键约束，关联到 users 表
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
```

### user_opinions表：

```
CREATE TABLE user_opinions (
    id INT AUTO_INCREMENT PRIMARY KEY,             -- 自增ID
    user_id INT NOT NULL,                          -- 用户ID，外键关联到 users 表
    opinion_type ENUM('就业', '学习', '生活', '其他') NOT NULL,  -- 意见类型
    opinion_text TEXT,                             -- 用户发表的意见（不限字数）
    opinion_images JSON,                           -- 用户上传的图片（可以有多张，使用JSON存储图片地址）
    opinion_time DATETIME NOT NULL,                -- 用户发表意见的时间，精确到小时
    FOREIGN KEY (user_id) REFERENCES users(id)    -- 外键约束，关联到 users 表
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
```

