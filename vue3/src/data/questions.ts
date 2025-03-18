export interface Option {
  text: string;
  score: number;
}

export interface Question {
  id: number;
  text: string;
  options: Option[];
}

// 60道题目的完整数据
export const questions: Question[] = [
  {
    id: 1,
    text: '你喜欢处理数据和解决数学问题吗？',
    options: [
      { text: '是的，我很喜欢', score: 3 },
      { text: '偶尔喜欢', score: 2 },
      { text: '不太喜欢', score: 1 },
      { text: '完全不喜欢', score: 0 }
    ]
  },
  {
    id: 2,
    text: '你对艺术和设计感兴趣吗？',
    options: [
      { text: '非常感兴趣', score: 3 },
      { text: '有点兴趣', score: 2 },
      { text: '不太感兴趣', score: 1 },
      { text: '完全不感兴趣', score: 0 }
    ]
  },
  {
    id: 3,
    text: '你是否喜欢与人沟通并影响他们的想法？',
    options: [
      { text: '非常喜欢', score: 3 },
      { text: '偶尔喜欢', score: 2 },
      { text: '不太喜欢', score: 1 },
      { text: '完全不喜欢', score: 0 }
    ]
  },
  {
    id: 4,
    text: '你喜欢通过创新解决问题吗？',
    options: [
      { text: '是的，我很喜欢', score: 3 },
      { text: '有点喜欢', score: 2 },
      { text: '不太喜欢', score: 1 },
      { text: '完全不喜欢', score: 0 }
    ]
  },
  {
    id: 5,
    text: '你喜欢逻辑推理和解决抽象问题吗？',
    options: [
      { text: '非常喜欢', score: 3 },
      { text: '有点喜欢', score: 2 },
      { text: '不太喜欢', score: 1 },
      { text: '完全不喜欢', score: 0 }
    ]
  },
  {
    id: 6,
    text: '你喜欢在团队中协作并讨论问题吗？',
    options: [
      { text: '非常喜欢', score: 3 },
      { text: '有点喜欢', score: 2 },
      { text: '不太喜欢', score: 1 },
      { text: '完全不喜欢', score: 0 }
    ]
  },
  {
    id: 7,
    text: '你喜欢独立思考并解决问题吗？',
    options: [
      { text: '非常喜欢', score: 3 },
      { text: '有点喜欢', score: 2 },
      { text: '不太喜欢', score: 1 },
      { text: '完全不喜欢', score: 0 }
    ]
  },
  {
    id: 8,
    text: '你是否喜欢表达自己并影响他人的看法？',
    options: [
      { text: '非常喜欢', score: 3 },
      { text: '偶尔喜欢', score: 2 },
      { text: '不太喜欢', score: 1 },
      { text: '完全不喜欢', score: 0 }
    ]
  },
  {
    id: 9,
    text: '你对自然科学（如物理、化学、生物）有兴趣吗？',
    options: [
      { text: '非常感兴趣', score: 3 },
      { text: '有点兴趣', score: 2 },
      { text: '不太感兴趣', score: 1 },
      { text: '完全不感兴趣', score: 0 }
    ]
  },
  {
    id: 10,
    text: '你是否喜欢解决复杂的技术问题？',
    options: [
      { text: '是的，我非常享受', score: 3 },
      { text: '偶尔享受', score: 2 },
      { text: '不太享受', score: 1 },
      { text: '完全不享受', score: 0 }
    ]
  },
  {
    id: 11,
    text: '你喜欢了解新技术和工具吗？',
    options: [
      { text: '非常喜欢', score: 3 },
      { text: '偶尔喜欢', score: 2 },
      { text: '不太喜欢', score: 1 },
      { text: '完全不喜欢', score: 0 }
    ]
  },
  {
    id: 12,
    text: '你喜欢组织和计划活动吗？',
    options: [
      { text: '非常喜欢', score: 3 },
      { text: '偶尔喜欢', score: 2 },
      { text: '不太喜欢', score: 1 },
      { text: '完全不喜欢', score: 0 }
    ]
  },
  {
    id: 13,
    text: '你是否喜欢帮助他人并解决他们的问题？',
    options: [
      { text: '非常喜欢', score: 3 },
      { text: '偶尔喜欢', score: 2 },
      { text: '不太喜欢', score: 1 },
      { text: '完全不喜欢', score: 0 }
    ]
  },
  {
    id: 14,
    text: '你对历史、文化和社会现象有兴趣吗？',
    options: [
      { text: '非常感兴趣', score: 3 },
      { text: '有点兴趣', score: 2 },
      { text: '不太感兴趣', score: 1 },
      { text: '完全不感兴趣', score: 0 }
    ]
  },
  {
    id: 15,
    text: '你喜欢进行实验和实际操作吗？',
    options: [
      { text: '非常喜欢', score: 3 },
      { text: '偶尔喜欢', score: 2 },
      { text: '不太喜欢', score: 1 },
      { text: '完全不喜欢', score: 0 }
    ]
  },
  {
    id: 16,
    text: '你喜欢解决与人际关系相关的问题吗？',
    options: [
      { text: '非常喜欢', score: 3 },
      { text: '偶尔喜欢', score: 2 },
      { text: '不太喜欢', score: 1 },
      { text: '完全不喜欢', score: 0 }
    ]
  },
  {
    id: 17,
    text: '你是否喜欢规划未来并制定长远目标？',
    options: [
      { text: '非常喜欢', score: 3 },
      { text: '偶尔喜欢', score: 2 },
      { text: '不太喜欢', score: 1 },
      { text: '完全不喜欢', score: 0 }
    ]
  },
  {
    id: 18,
    text: '你是否喜欢通过计算机和程序解决问题？',
    options: [
      { text: '是的，我很喜欢', score: 3 },
      { text: '偶尔喜欢', score: 2 },
      { text: '不太喜欢', score: 1 },
      { text: '完全不喜欢', score: 0 }
    ]
  },
  {
    id: 19,
    text: '你是否喜欢组织和分析数据？',
    options: [
      { text: '非常喜欢', score: 3 },
      { text: '偶尔喜欢', score: 2 },
      { text: '不太喜欢', score: 1 },
      { text: '完全不喜欢', score: 0 }
    ]
  },
  {
    id: 20,
    text: '你喜欢参与社会活动和公共事务吗？',
    options: [
      { text: '非常喜欢', score: 3 },
      { text: '偶尔喜欢', score: 2 },
      { text: '不太喜欢', score: 1 },
      { text: '完全不喜欢', score: 0 }
    ]
  },
  {
    id: 21,
    text: '你对数字、统计数据感兴趣吗？',
    options: [
      { text: '非常感兴趣', score: 3 },
      { text: '有点兴趣', score: 2 },
      { text: '不太感兴趣', score: 1 },
      { text: '完全不感兴趣', score: 0 }
    ]
  },
  {
    id: 22,
    text: '你喜欢通过网络或软件来表达创意吗？',
    options: [
      { text: '非常喜欢', score: 3 },
      { text: '偶尔喜欢', score: 2 },
      { text: '不太喜欢', score: 1 },
      { text: '完全不喜欢', score: 0 }
    ]
  },
  {
    id: 23,
    text: '你是否喜欢探索未知的领域并解决难题？',
    options: [
      { text: '是的，非常喜欢', score: 3 },
      { text: '偶尔喜欢', score: 2 },
      { text: '不太喜欢', score: 1 },
      { text: '完全不喜欢', score: 0 }
    ]
  },
  {
    id: 24,
    text: '你是否喜欢管理和指导他人？',
    options: [
      { text: '非常喜欢', score: 3 },
      { text: '偶尔喜欢', score: 2 },
      { text: '不太喜欢', score: 1 },
      { text: '完全不喜欢', score: 0 }
    ]
  },
  {
    id: 25,
    text: '你是否喜欢创办自己的企业或项目？',
    options: [
      { text: '是的，非常喜欢', score: 3 },
      { text: '偶尔喜欢', score: 2 },
      { text: '不太喜欢', score: 1 },
      { text: '完全不喜欢', score: 0 }
    ]
  },
  {
    id: 26,
    text: '你是否对技术或工艺方面有兴趣？',
    options: [
      { text: '非常感兴趣', score: 3 },
      { text: '有点兴趣', score: 2 },
      { text: '不太感兴趣', score: 1 },
      { text: '完全不感兴趣', score: 0 }
    ]
  },
  {
    id: 27,
    text: '你喜欢在工作中分析并解决复杂问题吗？',
    options: [
      { text: '非常喜欢', score: 3 },
      { text: '偶尔喜欢', score: 2 },
      { text: '不太喜欢', score: 1 },
      { text: '完全不喜欢', score: 0 }
    ]
  },
  {
    id: 28,
    text: '你是否喜欢研究人类行为和心理？',
    options: [
      { text: '非常喜欢', score: 3 },
      { text: '偶尔喜欢', score: 2 },
      { text: '不太喜欢', score: 1 },
      { text: '完全不喜欢', score: 0 }
    ]
  },
  {
    id: 29,
    text: '你是否喜欢分析社会现象并研究其影响？',
    options: [
      { text: '非常喜欢', score: 3 },
      { text: '偶尔喜欢', score: 2 },
      { text: '不太喜欢', score: 1 },
      { text: '完全不喜欢', score: 0 }
    ]
  },
  {
    id: 30,
    text: '你是否喜欢在工作中使用逻辑和分析能力？',
    options: [
      { text: '非常喜欢', score: 3 },
      { text: '偶尔喜欢', score: 2 },
      { text: '不太喜欢', score: 1 },
      { text: '完全不喜欢', score: 0 }
    ]
  },
  {
    id: 31,
    text: '你是否喜欢在工作中快速决策并承担责任？',
    options: [
      { text: '非常喜欢', score: 3 },
      { text: '偶尔喜欢', score: 2 },
      { text: '不太喜欢', score: 1 },
      { text: '完全不喜欢', score: 0 }
    ]
  },
  {
    id: 32,
    text: '你是否喜欢在工作中创造性地处理问题？',
    options: [
      { text: '非常喜欢', score: 3 },
      { text: '偶尔喜欢', score: 2 },
      { text: '不太喜欢', score: 1 },
      { text: '完全不喜欢', score: 0 }
    ]
  },
  {
    id: 33,
    text: '你是否喜欢管理团队并带领团队完成任务？',
    options: [
      { text: '非常喜欢', score: 3 },
      { text: '偶尔喜欢', score: 2 },
      { text: '不太喜欢', score: 1 },
      { text: '完全不喜欢', score: 0 }
    ]
  },
  {
    id: 34,
    text: '你是否喜欢探索新的技术领域？',
    options: [
      { text: '非常喜欢', score: 3 },
      { text: '偶尔喜欢', score: 2 },
      { text: '不太喜欢', score: 1 },
      { text: '完全不喜欢', score: 0 }
    ]
  },
  {
    id: 35,
    text: '你是否喜欢分析和改进系统或流程？',
    options: [
      { text: '非常喜欢', score: 3 },
      { text: '偶尔喜欢', score: 2 },
      { text: '不太喜欢', score: 1 },
      { text: '完全不喜欢', score: 0 }
    ]
  },
  {
    id: 36,
    text: '你是否喜欢了解复杂的技术原理和概念？',
    options: [
      { text: '非常喜欢', score: 3 },
      { text: '偶尔喜欢', score: 2 },
      { text: '不太喜欢', score: 1 },
      { text: '完全不喜欢', score: 0 }
    ]
  },
  {
    id: 37,
    text: '你是否喜欢在工作中设计创新的解决方案？',
    options: [
      { text: '非常喜欢', score: 3 },
      { text: '偶尔喜欢', score: 2 },
      { text: '不太喜欢', score: 1 },
      { text: '完全不喜欢', score: 0 }
    ]
  },
  {
    id: 38,
    text: '你是否喜欢从失败中学习并进行自我改进？',
    options: [
      { text: '非常喜欢', score: 3 },
      { text: '偶尔喜欢', score: 2 },
      { text: '不太喜欢', score: 1 },
      { text: '完全不喜欢', score: 0 }
    ]
  },
  {
    id: 39,
    text: '你是否喜欢独立工作并管理自己的时间？',
    options: [
      { text: '非常喜欢', score: 3 },
      { text: '偶尔喜欢', score: 2 },
      { text: '不太喜欢', score: 1 },
      { text: '完全不喜欢', score: 0 }
    ]
  },
  {
    id: 40,
    text: '你是否喜欢利用科技来提高工作效率？',
    options: [
      { text: '非常喜欢', score: 3 },
      { text: '偶尔喜欢', score: 2 },
      { text: '不太喜欢', score: 1 },
      { text: '完全不喜欢', score: 0 }
    ]
  },
  {
    id: 41,
    text: '你是否喜欢在工作中与团队成员进行沟通？',
    options: [
      { text: '非常喜欢', score: 3 },
      { text: '偶尔喜欢', score: 2 },
      { text: '不太喜欢', score: 1 },
      { text: '完全不喜欢', score: 0 }
    ]
  },
  {
    id: 42,
    text: '你是否喜欢进行市场调研和了解行业趋势？',
    options: [
      { text: '非常喜欢', score: 3 },
      { text: '偶尔喜欢', score: 2 },
      { text: '不太喜欢', score: 1 },
      { text: '完全不喜欢', score: 0 }
    ]
  },
  {
    id: 43,
    text: '你是否喜欢在不确定的情况下做出决策？',
    options: [
      { text: '非常喜欢', score: 3 },
      { text: '偶尔喜欢', score: 2 },
      { text: '不太喜欢', score: 1 },
      { text: '完全不喜欢', score: 0 }
    ]
  },
  {
    id: 44,
    text: '你是否喜欢在挑战中找到解决方案并改进现状？',
    options: [
      { text: '非常喜欢', score: 3 },
      { text: '偶尔喜欢', score: 2 },
      { text: '不太喜欢', score: 1 },
      { text: '完全不喜欢', score: 0 }
    ]
  },
  {
    id: 45,
    text: '你是否喜欢设计并优化用户体验？',
    options: [
      { text: '非常喜欢', score: 3 },
      { text: '偶尔喜欢', score: 2 },
      { text: '不太喜欢', score: 1 },
      { text: '完全不喜欢', score: 0 }
    ]
  },
  {
    id: 46,
    text: '你是否喜欢分析不同文化对工作行为的影响？',
    options: [
      { text: '非常喜欢', score: 3 },
      { text: '偶尔喜欢', score: 2 },
      { text: '不太喜欢', score: 1 },
      { text: '完全不喜欢', score: 0 }
    ]
  },
  {
    id: 47,
    text: '你是否喜欢在复杂的项目中协调各方？',
    options: [
      { text: '非常喜欢', score: 3 },
      { text: '偶尔喜欢', score: 2 },
      { text: '不太喜欢', score: 1 },
      { text: '完全不喜欢', score: 0 }
    ]
  },
  {
    id: 48,
    text: '你是否喜欢向他人展示你的想法和成果？',
    options: [
      { text: '非常喜欢', score: 3 },
      { text: '偶尔喜欢', score: 2 },
      { text: '不太喜欢', score: 1 },
      { text: '完全不喜欢', score: 0 }
    ]
  },
  {
    id: 49,
    text: '你是否喜欢与专家或行业领袖交流？',
    options: [
      { text: '非常喜欢', score: 3 },
      { text: '偶尔喜欢', score: 2 },
      { text: '不太喜欢', score: 1 },
      { text: '完全不喜欢', score: 0 }
    ]
  },
  {
    id: 50,
    text: '你是否喜欢通过跨领域的合作来解决问题？',
    options: [
      { text: '非常喜欢', score: 3 },
      { text: '偶尔喜欢', score: 2 },
      { text: '不太喜欢', score: 1 },
      { text: '完全不喜欢', score: 0 }
    ]
  },
  {
    id: 51,
    text: '你是否喜欢在工作中运用创新的方法和工具？',
    options: [
      { text: '非常喜欢', score: 3 },
      { text: '偶尔喜欢', score: 2 },
      { text: '不太喜欢', score: 1 },
      { text: '完全不喜欢', score: 0 }
    ]
  },
  {
    id: 52,
    text: '你是否喜欢解决跨领域的复杂问题？',
    options: [
      { text: '非常喜欢', score: 3 },
      { text: '偶尔喜欢', score: 2 },
      { text: '不太喜欢', score: 1 },
      { text: '完全不喜欢', score: 0 }
    ]
  },
  {
    id: 53,
    text: '你是否喜欢和其他领域的专家一起工作？',
    options: [
      { text: '非常喜欢', score: 3 },
      { text: '偶尔喜欢', score: 2 },
      { text: '不太喜欢', score: 1 },
      { text: '完全不喜欢', score: 0 }
    ]
  },
  {
    id: 54,
    text: '你是否喜欢在工作中带领他人进行决策？',
    options: [
      { text: '非常喜欢', score: 3 },
      { text: '偶尔喜欢', score: 2 },
      { text: '不太喜欢', score: 1 },
      { text: '完全不喜欢', score: 0 }
    ]
  },
  {
    id: 55,
    text: '你是否喜欢在创新项目中进行实际操作？',
    options: [
      { text: '非常喜欢', score: 3 },
      { text: '偶尔喜欢', score: 2 },
      { text: '不太喜欢', score: 1 },
      { text: '完全不喜欢', score: 0 }
    ]
  },
  {
    id: 56,
    text: '你是否喜欢在工作中运用人工智能技术？',
    options: [
      { text: '非常喜欢', score: 3 },
      { text: '偶尔喜欢', score: 2 },
      { text: '不太喜欢', score: 1 },
      { text: '完全不喜欢', score: 0 }
    ]
  },
  {
    id: 57,
    text: '你是否喜欢在工作中进行自我挑战？',
    options: [
      { text: '非常喜欢', score: 3 },
      { text: '偶尔喜欢', score: 2 },
      { text: '不太喜欢', score: 1 },
      { text: '完全不喜欢', score: 0 }
    ]
  },
  {
    id: 58,
    text: '你是否喜欢通过编程解决技术难题？',
    options: [
      { text: '非常喜欢', score: 3 },
      { text: '偶尔喜欢', score: 2 },
      { text: '不太喜欢', score: 1 },
      { text: '完全不喜欢', score: 0 }
    ]
  },
  {
    id: 59,
    text: '你是否喜欢探索未知领域并解决问题？',
    options: [
      { text: '非常喜欢', score: 3 },
      { text: '偶尔喜欢', score: 2 },
      { text: '不太喜欢', score: 1 },
      { text: '完全不喜欢', score: 0 }
    ]
  },
  {
    id: 60,
    text: '你是否喜欢与他人共同合作以达到目标？',
    options: [
      { text: '非常喜欢', score: 3 },
      { text: '偶尔喜欢', score: 2 },
      { text: '不太喜欢', score: 1 },
      { text: '完全不喜欢', score: 0 }
    ]
  }
];
