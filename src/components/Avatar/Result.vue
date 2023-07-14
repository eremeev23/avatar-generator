<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useAvatarStore } from "@stores/avatarStore.ts";

const avatarStore = useAvatarStore();
const { avatar } = storeToRefs(avatarStore);
</script>

<template>
  <div class="border-3 border-blue">
    <div id="to_print" class="relative min-w-440 w-440 h-440 overflow-hidden">
      <template v-for="(value, key, index) in avatar" :key="key">
        <img
          v-show="value.src"
          :src="`/parts/${key}/${value.src}.png`"
          :alt="`${key}_${index}`"
          class="absolute"
          :style="`
        top: ${typeof value.top === 'number' ? value.top + 'px' : 'auto'};
        bottom: ${typeof value.bottom === 'number' ? value.bottom + 'px' : 'auto'};
        left: ${value.left ? value.left + 'px' : '50%'};
        transform: translateX(${value.left ? 0 : -50}%);
        z-index: ${value.zIndex}
      `"
        />
      </template>
    </div>
  </div>

</template>

<style scoped>

</style>
