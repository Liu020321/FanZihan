<script setup lang="ts">
import AddNewUserDrawer from '@/views/apps/user/list/AddNewUserDrawer.vue'
import type { UserProperties } from '@db/apps/users/types'

import { ref, computed, onMounted } from 'vue'
import axios from 'axios'

// 👉 State variables
const usersData = ref<any[]>([]);  // 存储从接口获取的用户数据
const itemsPerPage = ref(10);
const page = ref(1);

// 👉 获取用户数据
const fetchUsers = async () => {
  try {
    const response = await axios.get('http://localhost:8080/auth/users/json');
    usersData.value = response.data;
    // console.log("response.data", response.data);
  } catch (error) {
    console.error("Error fetching users data:", error);
  }
}

// 👉 格式化数据：用户及其评论
const formattedUsers = computed(() => {
  return usersData.value.map(user => {
    // 只保留有评论的项
    const opinions = user.userOpinions.filter(opinion => opinion.opinionText);
    
    // 将每条评论的信息拆分为单独的项，便于表格展示
    return opinions.map(opinion => ({
      nickname: user.userInfo.nickname,
      opinionText: opinion.opinionText,
      opinionType: opinion.opinionType,
      school: user.userInfo.university || user.userInfo.highSchool // 判断显示大学或高中名称
    }));
  }).flat(); // 展开所有评论项
});


// 👉 分页
const paginatedUsers = computed(() => {
  const start = (page.value - 1) * itemsPerPage.value;
  const end = page.value * itemsPerPage.value;
  return formattedUsers.value.slice(start, end);
});

// 👉 表头定义
const headers = ref([
  { title: '昵称', key: 'nickname' },
  { title: '学校', key: 'school' },  // 新增学校列
  { title: '评论内容', key: 'opinionText' },
  { title: '评论类型', key: 'opinionType' },
  { title: '操作', key: 'actions' },
]);


onMounted(() => {
  fetchUsers();
});
</script>

<template>
  <section>
    <VCard class="mb-6">
      <VCardItem class="pb-4">
        <VCardTitle>前辈的建议</VCardTitle>
      </VCardItem>

      <VCardText>
        <VRow>
          <!-- 👉 Select Role -->
          <VCol cols="12" sm="3">
            <AppSelect v-model="selectedRole" placeholder="选择学校" :items="roles" clearable clear-icon="tabler-x" />
          </VCol>
          <!-- 👉 Select Plan -->
          <VCol cols="12" sm="3">
            <AppSelect v-model="selectedPlan" placeholder="选择专业" :items="plans" clearable clear-icon="tabler-x" />
          </VCol>
          <!-- 👉 Select Status -->
          <VCol cols="12" sm="3">
            <AppSelect v-model="selectedStatus" placeholder="最高学历" :items="status" clearable clear-icon="tabler-x" />
          </VCol>
          <VCol cols="12" sm="3">
            <AppSelect v-model="selectedStatus" placeholder="工作经验" :items="status" clearable clear-icon="tabler-x" />
          </VCol>
        </VRow>
      </VCardText>

      <VDivider />

      <VCardText class="d-flex flex-wrap gap-4">
        <div class="me-3 d-flex gap-3">
          <AppSelect :model-value="itemsPerPage" :items="[
            { value: 10, title: '10' },
            { value: 25, title: '25' },
            { value: 50, title: '50' },
            { value: 100, title: '100' },
            { value: -1, title: 'All' },
          ]" style="inline-size: 6.25rem;" @update:model-value="itemsPerPage = parseInt($event, 10)" />
          <!-- </div> -->
          <AppSelect :model-value="viewType" :items="[
            { value: 'latest', title: '最新' },
            { value: 'hot', title: '热度' }
          ]" style="inline-size: 6.25rem;" @update:model-value="viewType = $event" />
        </div>
        <VSpacer />

        <div class="app-user-search-filter d-flex align-center flex-wrap gap-4">
          <!-- 👉 Search  -->
          <div style="inline-size: 15.625rem;">
            <AppTextField v-model="searchQuery" placeholder="搜索建议" />
          </div>

          <!-- 👉 Export button -->
          <!-- <VBtn
            variant="tonal"
            color="secondary"
            prepend-icon="tabler-upload"
          >
            Export
          </VBtn> -->

          <!-- 👉 Add user button -->
          <VBtn prepend-icon="tabler-plus" @click="isAddNewUserDrawerVisible = true">
            我要分享
          </VBtn>
        </div>
      </VCardText>

      <VDivider />

      <!-- SECTION datatable -->
      <!-- 表格部分 -->
      <VDataTableServer v-model:items-per-page="itemsPerPage" v-model:page="page" :headers="headers"
        :items="paginatedUsers" :items-length="formattedUsers.length" class="text-no-wrap">
        <!-- 用户昵称列 -->
        <template #item.nickname="{ item }">
          <div>
            <strong>{{ item.nickname }}</strong>
          </div>
        </template>

        <template v-slot:item.school="{ item }">
            <strong>{{ item.school }}</strong>
          </template>

        <!-- 评论内容列 -->
        <template #item.opinionText="{ item }">
          <div class="wrap-text">
            {{ item.opinionText }}
          </div>
        </template>

        <!-- 评论类型列 -->
        <template #item.opinionType="{ item }">
          <div>
            <strong>{{ item.opinionType }}</strong>
          </div>
        </template>

        <!-- 操作部分：新增 "操作" 列 -->
        <template #item.actions="{ item }">
          <IconBtn @click="deleteUser(item.id)">
            <VIcon icon="tabler-trash" />
          </IconBtn>

          <IconBtn>
            <VIcon icon="tabler-eye" />
          </IconBtn>

          <IconBtn>
            <VIcon icon="tabler-pencil" />
          </IconBtn>
        </template>

        <!-- 分页部分 -->
        <template #bottom>
          <TablePagination v-model:page="page" :items-per-page="itemsPerPage" :total-items="formattedUsers.length" />
        </template>
      </VDataTableServer>
      <!-- SECTION -->
    </VCard>
    <!-- 👉 Add New User -->
    <AddNewUserDrawer v-model:isDrawerOpen="isAddNewUserDrawerVisible" @user-data="addNewUser" />
  </section>
</template>

<style scoped>
.wrap-text {
  word-wrap: break-word;
  /* 自动换行 */
  white-space: normal;
  /* 允许换行 */
  max-width: 600px;
  /* 限制最大宽度，防止过长的文本撑开单元格 */
}
</style>
