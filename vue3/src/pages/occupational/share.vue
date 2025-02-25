<script setup lang="ts">
import * as demoCode from '@/views/demos/forms/form-layout/demoCodeFormLayout'
</script>

<template>
  <div>
    <VRow>

      <VCol cols="12">
        <!-- 👉 意见分享 -->
        <AppCardCode
          title="意见分享"
          :code="demoCode.multipleColumn"
        >
          <DemoFormLayoutMultipleColumn />
        </AppCardCode>
      </VCol>
    </VRow>

  </div>
</template>
