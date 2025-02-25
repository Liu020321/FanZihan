<script lang="ts" setup>
const school = ref()
const types = ref()


const schoolList = ['石家庄铁道大学', '清华大学', '北京大学', '燕山大学', '石家庄医科大学']
const typeList = ['就业', '学习', '生活', '其他']
</script>

<template>
  <VForm @submit.prevent="() => { }">
    <VRow>
      <!-- 👉 选择学校 -->
      <VCol cols="12">
        <AppSelect v-model="school" :items="schoolList" label="选择学校" placeholder="选择你所在的学校" />
      </VCol>

      <!-- 👉 选择类型 -->
      <VCol cols="12">
        <AppSelect v-model="types" :items="typeList" label="选择类型" placeholder="选择你要分享的意见类型" />
      </VCol>

      <!-- 👉 意见内容 -->
      <VCol cols="12">
        <AppTextarea label="意见内容" placeholder="请输入你要分享的意见" rows="5" />
      </VCol>


      <VCol cols="12" class="d-flex gap-4">
        <VBtn type="submit">
          提交
        </VBtn>

        <VBtn type="reset" color="secondary" variant="tonal">
          重置
        </VBtn>
      </VCol>
    </VRow>
  </VForm>
</template>
