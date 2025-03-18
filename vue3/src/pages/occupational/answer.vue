<script lang="ts" setup>
import { questions } from "@/data/questions"; // 引入你的问题数据
import * as demoCode from '@/views/demos/forms/form-elements/checkbox/demoCodeCheckbox';
import { ref } from 'vue';

const currentQuestion = ref(0);  // 当前问题索引
const scores = ref<number[]>([]);  // 存储用户答案的分数
const topCategories = ref<any[]>([]);  // 存储推荐的前3个专业类别及对应专业名称
const selectedCheckbox = ref<number | null>(null);  // 用于存储当前选中的选项的分数

// 存储面板的展开状态，默认所有面板都展开
const expandedPanels = ref([true, true, true]);

// 选择答案
function selectOption(score: number) {
  scores.value.push(score);
  currentQuestion.value++;

  // 当所有题目回答完后，计算推荐的专业
  if (currentQuestion.value === questions.length) {
    calculateRecommendation();
  }
}

// 计算推荐的专业
function calculateRecommendation() {
  const categories = {
    "信息技术类": { score: 0, majors: ['计算机科学', '人工智能', '大数据', '网络安全'] },
    "工程类": { score: 0, majors: ['电气工程', '机械工程', '土木工程', '环境工程'] },
    "医学类": { score: 0, majors: ['临床医学', '药学', '护理学', '公共卫生'] },
    "教育类": { score: 0, majors: ['教育学', '心理学', '学前教育'] },
    "商学类": { score: 0, majors: ['工商管理', '市场营销', '财务管理', '人力资源'] },
    "人文学科类": { score: 0, majors: ['中文', '历史学', '哲学', '外语'] },
    "艺术设计类": { score: 0, majors: ['视觉艺术', '环境设计', '产品设计', '动画'] },
    "社会科学类": { score: 0, majors: ['社会学', '公共管理', '人类学'] },
    "生物科学类": { score: 0, majors: ['生物技术', '生物医学'] },
    "农业类": { score: 0, majors: ['农学', '园艺', '农业资源与环境'] },
    "传媒类": { score: 0, majors: ['新闻学', '广播电视'] },
    "法律类": { score: 0, majors: ['法学', '国际法'] },
    "建筑类": { score: 0, majors: ['建筑学', '城市规划'] }
  };

  // 根据用户的分数为各个专业类别加分
  scores.value.forEach((score, index) => {
    if (index < 10) {
      categories["信息技术类"].score += score;
    } else if (index < 20) {
      categories["工程类"].score += score;
    } else if (index < 30) {
      categories["医学类"].score += score;
    } else if (index < 40) {
      categories["教育类"].score += score;
    } else if (index < 50) {
      categories["商学类"].score += score;
    } else if (index < 60) {
      categories["人文学科类"].score += score;
    } else if (index < 70) {
      categories["艺术设计类"].score += score;
    } else if (index < 80) {
      categories["社会科学类"].score += score;
    } else if (index < 90) {
      categories["生物科学类"].score += score;
    } else if (index < 100) {
      categories["农业类"].score += score;
    } else if (index < 110) {
      categories["传媒类"].score += score;
    } else if (index < 120) {
      categories["法律类"].score += score;
    } else if (index < 130) {
      categories["建筑类"].score += score;
    }
  });

  // 根据分类得分排序并取前3个
  const sortedCategories = Object.entries(categories)
    .sort((a, b) => b[1].score - a[1].score)
    .slice(0, 3);  // 只取前三个推荐类别

  // 设置推荐的类别及其对应的专业名称
  topCategories.value = sortedCategories.map(([category, data]) => ({
    name: category,
    majors: data.majors
  }));
}
</script>

<template>
  <div>
    <div v-if="currentQuestion < questions.length">
      <AppCardCode :title="'第 ' + (currentQuestion + 1) + ' 题: ' + questions[currentQuestion].text"
        :code="demoCode.colors">
        <div class="options-container">
          <VCol cols="12" md="6" v-for="option in questions[currentQuestion].options" :key="option.text">
            <div class="demo-space-x">
              <VCheckbox :label="option.text" v-model="selectedCheckbox" :value="option.score"
                :color="option.text.toLowerCase()" @change="selectOption(option.score)" />
            </div>
          </VCol>
        </div>
      </AppCardCode>
    </div>

    <div v-else>

      <!-- 👉 Basic  -->
      <AppCardCode
        title="根据您的回答，以下是您可能适合的大学专业推荐："
        :code="demoCode.basic">

      <!-- 展示推荐分类和专业 -->
      <VExpansionPanels v-model="expandedPanels" multiple>
        <VExpansionPanel v-for="(category, index) in topCategories" :key="index">
          <VExpansionPanelTitle>
            {{ category.name }}
          </VExpansionPanelTitle>
          <VExpansionPanelText>
            <div class="majors-list">
              <span v-for="(major, i) in category.majors" :key="i" class="major-item">
                {{ major }}
              </span>
            </div>
          </VExpansionPanelText>
        </VExpansionPanel>
      </VExpansionPanels>
    </AppCardCode>
    </div>
  </div>
</template>

<style scoped>
button {
  padding: 10px;
  margin: 5px;
}

.options-container {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.majors-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.major-item {
  border-radius: 5px;
  background-color: #f0f0f0;
  font-size: 1em;
  padding-block: 5px;
  padding-inline: 10px;
}
</style>
