/*
 Navicat Premium Dump SQL

 Source Server         : 本机
 Source Server Type    : MySQL
 Source Server Version : 80403 (8.4.3)
 Source Host           : localhost:3306
 Source Schema         : graduation

 Target Server Type    : MySQL
 Target Server Version : 80403 (8.4.3)
 File Encoding         : 65001

 Date: 25/02/2025 20:52:12
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for user_info
-- ----------------------------
DROP TABLE IF EXISTS `user_info`;
CREATE TABLE `user_info`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `nickname` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `avatar_url` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `real_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `gender` enum('Male','Female','Other') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `phone_number` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `high_school` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `current_grade` enum('1','2','3') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `university` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `major_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `university_grade` enum('1','2','3','4') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `work_experience` enum('未毕业','0-3年','3-5年','5年以上') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `user_id`(`user_id` ASC) USING BTREE,
  CONSTRAINT `user_info_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 64 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user_info
-- ----------------------------
INSERT INTO `user_info` VALUES (1, 1, '我张狂', NULL, '张三', 'Male', '12345678', '石家庄高中', '3', '石家庄铁道大学', '软件工程', '4', '未毕业');
INSERT INTO `user_info` VALUES (2, 2, '我姓刘', NULL, '刘环', 'Male', '789465132', '内蒙古高中', '2', '内蒙古大学', '计算机科学与技术', '3', '未毕业');
INSERT INTO `user_info` VALUES (3, 3, '李是谁', NULL, '李四', 'Female', '936374561', '北京附属中学', '3', NULL, NULL, '1', '未毕业');
INSERT INTO `user_info` VALUES (7, 4, 'BobWhite', 'https://example.com/avatar4.jpg', 'Bob White', 'Male', '12345678904', 'High School D', '1', 'University A', 'Mathematics', '1', '未毕业');
INSERT INTO `user_info` VALUES (8, 5, 'CharlieGreen', 'https://example.com/avatar5.jpg', 'Charlie Green', 'Male', '12345678905', 'High School E', '2', 'University B', 'Chemistry', '2', '5年以上');
INSERT INTO `user_info` VALUES (9, 6, 'DianaBlack', 'https://example.com/avatar6.jpg', 'Diana Black', 'Female', '12345678906', 'High School F', '3', 'University C', 'Biology', '3', '未毕业');
INSERT INTO `user_info` VALUES (10, 7, 'EveYellow', 'https://example.com/avatar7.jpg', 'Eve Yellow', 'Female', '12345678907', 'High School G', '1', 'University D', 'Literature', '1', '0-3年');
INSERT INTO `user_info` VALUES (11, 8, 'FrankBlue', 'https://example.com/avatar8.jpg', 'Frank Blue', 'Male', '12345678908', 'High School H', '2', 'University E', 'History', '2', '3-5年');
INSERT INTO `user_info` VALUES (12, 9, 'GraceRed', 'https://example.com/avatar9.jpg', 'Grace Red', 'Female', '12345678909', 'High School I', '3', 'University F', 'Art', '3', '5年以上');
INSERT INTO `user_info` VALUES (13, 10, 'HankPurple', 'https://example.com/avatar10.jpg', 'Hank Purple', 'Male', '12345678910', 'High School J', '1', 'University G', 'Engineering', '1', '未毕业');
INSERT INTO `user_info` VALUES (14, 11, 'IvyPink', 'https://example.com/avatar11.jpg', 'Ivy Pink', 'Female', '12345678911', 'High School K', '2', 'University H', 'Psychology', '2', '未毕业');
INSERT INTO `user_info` VALUES (15, 12, 'JackSilver', 'https://example.com/avatar12.jpg', 'Jack Silver', 'Male', '12345678912', 'High School L', '1', 'University I', 'Law', '1', '0-3年');
INSERT INTO `user_info` VALUES (16, 13, 'LilyGold', 'https://example.com/avatar13.jpg', 'Lily Gold', 'Female', '12345678913', 'High School M', '3', 'University J', 'Philosophy', '3', '3-5年');
INSERT INTO `user_info` VALUES (17, 14, 'MikeCopper', 'https://example.com/avatar14.jpg', 'Mike Copper', 'Male', '12345678914', 'High School N', '2', 'University K', 'Environmental Science', '2', '5年以上');
INSERT INTO `user_info` VALUES (18, 15, 'NinaBronze', 'https://example.com/avatar15.jpg', 'Nina Bronze', 'Female', '12345678915', 'High School O', '1', 'University L', 'Sociology', '1', '未毕业');
INSERT INTO `user_info` VALUES (19, 16, 'OscarDiamond', 'https://example.com/avatar16.jpg', 'Oscar Diamond', 'Male', '12345678916', 'High School P', '2', 'University M', 'Business Administration', '2', '0-3年');
INSERT INTO `user_info` VALUES (20, 17, 'PaulaEmerald', 'https://example.com/avatar17.jpg', 'Paula Emerald', 'Female', '12345678917', 'High School Q', '3', 'University N', 'Accounting', '3', '3-5年');
INSERT INTO `user_info` VALUES (21, 18, 'QuinnRuby', 'https://example.com/avatar18.jpg', 'Quinn Ruby', 'Male', '12345678918', 'High School R', '1', 'University O', 'Nursing', '1', '未毕业');
INSERT INTO `user_info` VALUES (22, 19, 'RitaAmethyst', 'https://example.com/avatar19.jpg', 'Rita Amethyst', 'Female', '12345678919', 'High School S', '2', 'University P', 'Theology', '2', '0-3年');
INSERT INTO `user_info` VALUES (23, 20, 'SteveOpal', 'https://example.com/avatar20.jpg', 'Steve Opal', 'Male', '12345678920', 'High School T', '3', 'University Q', 'Geography', '3', '5年以上');
INSERT INTO `user_info` VALUES (24, 21, 'TinaTopaz', 'https://example.com/avatar21.jpg', 'Tina Topaz', 'Female', '12345678921', 'High School U', '1', 'University R', 'Veterinary Science', '1', '未毕业');
INSERT INTO `user_info` VALUES (25, 22, 'UrsulaSapphire', 'https://example.com/avatar22.jpg', 'Ursula Sapphire', 'Female', '12345678922', 'High School V', '2', 'University S', 'Chemistry', '2', '未毕业');
INSERT INTO `user_info` VALUES (26, 23, 'VictorJade', 'https://example.com/avatar23.jpg', 'Victor Jade', 'Male', '12345678923', 'High School W', '1', 'University T', 'Electrical Engineering', '1', '3-5年');
INSERT INTO `user_info` VALUES (27, 24, 'WendyPearl', 'https://example.com/avatar24.jpg', 'Wendy Pearl', 'Female', '12345678924', 'High School X', '2', 'University U', 'Computer Science', '2', '5年以上');
INSERT INTO `user_info` VALUES (28, 25, 'XanderMoon', 'https://example.com/avatar25.jpg', 'Xander Moon', 'Male', '12345678925', 'High School Y', '3', 'University V', 'Mathematics', '3', '未毕业');
INSERT INTO `user_info` VALUES (29, 26, 'YasmineStar', 'https://example.com/avatar26.jpg', 'Yasmine Star', 'Female', '12345678926', 'High School Z', '1', 'University W', 'Psychology', '1', '0-3年');
INSERT INTO `user_info` VALUES (30, 27, 'ZaneCloud', 'https://example.com/avatar27.jpg', 'Zane Cloud', 'Male', '12345678927', 'High School AA', '2', 'University X', 'Political Science', '2', '未毕业');
INSERT INTO `user_info` VALUES (31, 28, 'AbbySun', 'https://example.com/avatar28.jpg', 'Abby Sun', 'Female', '12345678928', 'High School AB', '3', 'University Y', 'Sociology', '3', '3-5年');
INSERT INTO `user_info` VALUES (32, 29, 'BenEarth', 'https://example.com/avatar29.jpg', 'Ben Earth', 'Male', '12345678929', 'High School AC', '1', 'University Z', 'Law', '1', '未毕业');
INSERT INTO `user_info` VALUES (33, 30, 'CathySky', 'https://example.com/avatar30.jpg', 'Cathy Sky', 'Female', '12345678930', 'High School AD', '2', 'University A', 'Theology', '2', '5年以上');

-- ----------------------------
-- Table structure for user_opinions
-- ----------------------------
DROP TABLE IF EXISTS `user_opinions`;
CREATE TABLE `user_opinions`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `opinion_type` enum('就业','学习','生活','其他') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `opinion_text` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL,
  `opinion_time` datetime NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `user_id`(`user_id` ASC) USING BTREE,
  CONSTRAINT `user_opinions_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 34 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user_opinions
-- ----------------------------
INSERT INTO `user_opinions` VALUES (1, 1, '就业', '目前找工作的过程充满挑战，感觉自己在面试中的表现还需要改进，特别是在自我介绍时不够简洁明了，期待能够通过不断的学习提升自己', '2025-02-19 11:03:37');
INSERT INTO `user_opinions` VALUES (2, 1, '学习', '最近学习了一些关于机器学习的基础知识，感觉有点难以理解，但我相信只要坚持下去，就能掌握其中的核心概念。希望能找到一些好资源帮助自己。', '2025-02-04 11:05:29');
INSERT INTO `user_opinions` VALUES (3, 2, '生活', '最近生活节奏有点快，工作和学习压力都很大，但还是尽量保持每天运动和足够的休息时间，确保身心健康。', '2025-02-12 11:05:56');
INSERT INTO `user_opinions` VALUES (4, 1, '学习', '关于编程学习的一些看法', '2025-02-17 10:00:00');
INSERT INTO `user_opinions` VALUES (5, 2, '生活', '我希望学校能提供更多的心理健康支持', '2025-02-17 11:00:00');
INSERT INTO `user_opinions` VALUES (6, 3, '就业', '关于就业市场的看法，特别是理工科的机会', '2025-02-17 12:00:00');
INSERT INTO `user_opinions` VALUES (7, 4, '学习', '我对高等教育课程的意见', '2025-02-17 13:00:00');
INSERT INTO `user_opinions` VALUES (8, 5, '生活', '大学生活的点点滴滴', '2025-02-17 14:00:00');
INSERT INTO `user_opinions` VALUES (9, 6, '其他', '对校园设施的改进意见', '2025-02-17 15:00:00');
INSERT INTO `user_opinions` VALUES (10, 7, '学习', '学习方法的个人心得', '2025-02-17 16:00:00');
INSERT INTO `user_opinions` VALUES (11, 8, '就业', '就业过程中的困难与挑战', '2025-02-17 17:00:00');
INSERT INTO `user_opinions` VALUES (12, 9, '生活', '如何平衡学业与生活的经验分享', '2025-02-17 18:00:00');
INSERT INTO `user_opinions` VALUES (13, 10, '学习', '我对学校课程设置的建议', '2025-02-17 19:00:00');
INSERT INTO `user_opinions` VALUES (14, 11, '生活', '关于校园环境的优化建议', '2025-02-17 20:00:00');
INSERT INTO `user_opinions` VALUES (15, 12, '就业', '如何更好地准备求职面试', '2025-02-17 21:00:00');
INSERT INTO `user_opinions` VALUES (16, 13, '学习', '对于课程内容的反馈', '2025-02-17 22:00:00');
INSERT INTO `user_opinions` VALUES (17, 14, '生活', '大学宿舍管理方面的建议', '2025-02-17 23:00:00');
INSERT INTO `user_opinions` VALUES (18, 15, '学习', '学术研究中的困难与挑战', '2025-02-18 00:00:00');
INSERT INTO `user_opinions` VALUES (19, 16, '就业', '关于科技行业的职业前景', '2025-02-18 01:00:00');
INSERT INTO `user_opinions` VALUES (20, 17, '生活', '如何调整学业与社会活动的平衡', '2025-02-18 02:00:00');
INSERT INTO `user_opinions` VALUES (21, 18, '学习', '关于学习效率的一些想法', '2025-02-18 03:00:00');
INSERT INTO `user_opinions` VALUES (22, 19, '就业', '如何进入国际公司工作的经验分享', '2025-02-18 04:00:00');
INSERT INTO `user_opinions` VALUES (23, 20, '生活', '我的大学生活体验与建议', '2025-02-18 05:00:00');
INSERT INTO `user_opinions` VALUES (24, 21, '学习', '学术写作中的技巧与建议', '2025-02-18 06:00:00');
INSERT INTO `user_opinions` VALUES (25, 22, '就业', '科技创新对未来就业的影响', '2025-02-18 07:00:00');
INSERT INTO `user_opinions` VALUES (26, 23, '生活', '校园社团活动的重要性', '2025-02-18 08:00:00');
INSERT INTO `user_opinions` VALUES (27, 24, '学习', '如何更好地利用大学资源', '2025-02-18 09:00:00');
INSERT INTO `user_opinions` VALUES (28, 25, '就业', '我的创业经验与教训', '2025-02-18 10:00:00');
INSERT INTO `user_opinions` VALUES (29, 26, '生活', '关于学生公寓环境的一些反馈', '2025-02-18 11:00:00');
INSERT INTO `user_opinions` VALUES (30, 27, '学习', '如何在大学期间培养科研能力', '2025-02-18 12:00:00');
INSERT INTO `user_opinions` VALUES (31, 28, '就业', '准备求职过程中需要注意的事项', '2025-02-18 13:00:00');
INSERT INTO `user_opinions` VALUES (32, 29, '生活', '我的校园文化活动体验', '2025-02-18 14:00:00');
INSERT INTO `user_opinions` VALUES (33, 30, '学习', '如何高效利用课外时间进行自我提升', '2025-02-18 15:00:00');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `is_admin` tinyint(1) NOT NULL DEFAULT 0,
  `account` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 64 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (1, 1, 'admin@admin.com', 'admin');
INSERT INTO `users` VALUES (2, 0, 'test@test.com', 'test');
INSERT INTO `users` VALUES (3, 1, 'uaer@user.com', 'admin');
INSERT INTO `users` VALUES (4, 0, 'user1@test.com', 'password1');
INSERT INTO `users` VALUES (5, 0, 'user2@test.com', 'password2');
INSERT INTO `users` VALUES (6, 1, 'admin1@test.com', 'adminpassword1');
INSERT INTO `users` VALUES (7, 0, 'user3@test.com', 'password3');
INSERT INTO `users` VALUES (8, 1, 'admin2@test.com', 'adminpassword2');
INSERT INTO `users` VALUES (9, 0, 'user4@test.com', 'password4');
INSERT INTO `users` VALUES (10, 0, 'user5@test.com', 'password5');
INSERT INTO `users` VALUES (11, 0, 'user6@test.com', 'password6');
INSERT INTO `users` VALUES (12, 1, 'admin3@test.com', 'adminpassword3');
INSERT INTO `users` VALUES (13, 0, 'user7@test.com', 'password7');
INSERT INTO `users` VALUES (14, 0, 'user8@test.com', 'password8');
INSERT INTO `users` VALUES (15, 0, 'user9@test.com', 'password9');
INSERT INTO `users` VALUES (16, 1, 'admin4@test.com', 'adminpassword4');
INSERT INTO `users` VALUES (17, 0, 'user10@test.com', 'password10');
INSERT INTO `users` VALUES (18, 0, 'user11@test.com', 'password11');
INSERT INTO `users` VALUES (19, 1, 'admin5@test.com', 'adminpassword5');
INSERT INTO `users` VALUES (20, 0, 'user12@test.com', 'password12');
INSERT INTO `users` VALUES (21, 0, 'user13@test.com', 'password13');
INSERT INTO `users` VALUES (22, 1, 'admin6@test.com', 'adminpassword6');
INSERT INTO `users` VALUES (23, 0, 'user14@test.com', 'password14');
INSERT INTO `users` VALUES (24, 0, 'user15@test.com', 'password15');
INSERT INTO `users` VALUES (25, 0, 'user16@test.com', 'password16');
INSERT INTO `users` VALUES (26, 1, 'admin7@test.com', 'adminpassword7');
INSERT INTO `users` VALUES (27, 0, 'user17@test.com', 'password17');
INSERT INTO `users` VALUES (28, 0, 'user18@test.com', 'password18');
INSERT INTO `users` VALUES (29, 1, 'admin8@test.com', 'adminpassword8');
INSERT INTO `users` VALUES (30, 0, 'user19@test.com', 'password19');
INSERT INTO `users` VALUES (31, 0, 'user20@test.com', 'password20');
INSERT INTO `users` VALUES (32, 1, 'admin9@test.com', 'adminpassword9');
INSERT INTO `users` VALUES (33, 0, 'user21@test.com', 'password21');
INSERT INTO `users` VALUES (34, 0, 'user1@test.com', 'password1');
INSERT INTO `users` VALUES (35, 0, 'user2@test.com', 'password2');
INSERT INTO `users` VALUES (36, 1, 'admin1@test.com', 'adminpassword1');
INSERT INTO `users` VALUES (37, 0, 'user3@test.com', 'password3');
INSERT INTO `users` VALUES (38, 1, 'admin2@test.com', 'adminpassword2');
INSERT INTO `users` VALUES (39, 0, 'user4@test.com', 'password4');
INSERT INTO `users` VALUES (40, 0, 'user5@test.com', 'password5');
INSERT INTO `users` VALUES (41, 0, 'user6@test.com', 'password6');
INSERT INTO `users` VALUES (42, 1, 'admin3@test.com', 'adminpassword3');
INSERT INTO `users` VALUES (43, 0, 'user7@test.com', 'password7');
INSERT INTO `users` VALUES (44, 0, 'user8@test.com', 'password8');
INSERT INTO `users` VALUES (45, 0, 'user9@test.com', 'password9');
INSERT INTO `users` VALUES (46, 1, 'admin4@test.com', 'adminpassword4');
INSERT INTO `users` VALUES (47, 0, 'user10@test.com', 'password10');
INSERT INTO `users` VALUES (48, 0, 'user11@test.com', 'password11');
INSERT INTO `users` VALUES (49, 1, 'admin5@test.com', 'adminpassword5');
INSERT INTO `users` VALUES (50, 0, 'user12@test.com', 'password12');
INSERT INTO `users` VALUES (51, 0, 'user13@test.com', 'password13');
INSERT INTO `users` VALUES (52, 1, 'admin6@test.com', 'adminpassword6');
INSERT INTO `users` VALUES (53, 0, 'user14@test.com', 'password14');
INSERT INTO `users` VALUES (54, 0, 'user15@test.com', 'password15');
INSERT INTO `users` VALUES (55, 0, 'user16@test.com', 'password16');
INSERT INTO `users` VALUES (56, 1, 'admin7@test.com', 'adminpassword7');
INSERT INTO `users` VALUES (57, 0, 'user17@test.com', 'password17');
INSERT INTO `users` VALUES (58, 0, 'user18@test.com', 'password18');
INSERT INTO `users` VALUES (59, 1, 'admin8@test.com', 'adminpassword8');
INSERT INTO `users` VALUES (60, 0, 'user19@test.com', 'password19');
INSERT INTO `users` VALUES (61, 0, 'user20@test.com', 'password20');
INSERT INTO `users` VALUES (62, 1, 'admin9@test.com', 'adminpassword9');
INSERT INTO `users` VALUES (63, 0, 'user21@test.com', 'password21');

SET FOREIGN_KEY_CHECKS = 1;
