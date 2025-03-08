import type { User } from '@db/auth/types';

// DB 类型，包含 fetchUsers 方法
interface DB {
  userTokens: string[];
  users: User[];
  fetchUsers(): Promise<void>;
}

export const db: DB = {
  // 假设的一些用户 token
  userTokens: [
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MX0.fhc3wykrAnRpcKApKhXiahxaOe8PSHatad31NuIZ0Zg',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Mn0.cat2xMrZLn0FwicdGtZNzL7ifDTAKWB0k1RurSWjdnw',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6M30.PGOfMaZA_T9W05vMj5FYXG5d47soSPJD1WuxeUfw4L4',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NH0.d_9aq2tpeA9-qpqO0X4AmW6gU2UpWkXwc04UJYFWiZE',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NX0.ocO77FbjOSU1-JQ_BilEZq2G_M8bCiB10KYqtfkv1ss',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Nn0.YgQILRqZy8oefhTZgJJfiEzLmhxQT_Bd2510OvrrwB8',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6N30.KH9RmOWIYv_HONxajg7xBIJXHEUvSdcBygFtS2if8Jk',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OH0.shrp-oMHkVAkiMkv_aIvSx3k6Jk-X7TrH5UeufChz_g',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OX0.9JD1MR3ZkwHzhl4mOHH6lGG8hOVNZqDNH6UkFzjCqSE',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTB9.txWLuN4QT5PqTtgHmlOiNerIu5Do51PpYOiZutkyXYg',
  ],

  users: [], // 初始为空，后端数据加载进来后更新

  // 异步从后端获取用户数据
  async fetchUsers() {
    try {
      const response = await fetch('http://localhost:8080/auth/users');
      const usersData: any[] = await response.json();  // 假设后端返回的数据是数组
  
      // 将后端返回的用户数据映射到前端所需的格式
      this.users = usersData.map((userData) => {
        if (userData.userInfo) {  // 确保 userInfo 不为 null
          return {
            id: userData.id,
            fullName: userData.userInfo.realName,  // 映射为 realName
            username: userData.userInfo.nickname,  // 映射为 nickname
            password: userData.password,
            avatar: userData.userInfo.avatarUrl ? `${import.meta.env.BASE_URL ?? '/'}${userData.userInfo.avatarUrl}` : '',
            email: userData.account,  // 映射为 account
            role: userData.isAdmin ? 'admin' : 'client',  // isAdmin 映射为角色
            abilityRules: userData.isAdmin
              ? [{ action: 'manage', subject: 'all' }]  // 管理员权限
              : [{ action: 'read', subject: 'AclDemo' }],  // 普通用户权限
          };
        } else {
          console.warn(`User info is missing for user ${userData.id}`);
          return null;
        }
      }).filter(user => user !== null);  // 过滤掉无效的用户
  
      console.log('Users fetched:', this.users);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  }
  
}
