<script setup lang="ts">
import { storeToRefs } from "pinia";
import { useAvatarStore } from "@stores/avatarStore.ts";

interface Props {
  part: string;
}
defineProps<Props>();

const { avatar } = storeToRefs(useAvatarStore());

const variantClickHandler = (part: string, src: string) => {
  avatar.value[part].src = src;
}
</script>

<template>
  <div class="w-full grid h-[280px] grid-cols-5 gap-2 overflow-y-scroll">
    <div
      v-if="avatar[part].removable"
      @click="variantClickHandler(part, ``)"
      class="cursor-pointer aspect-square h-24 p-2 flex justify-center align-center border-3 border-blue transition-colors"
      :class="{ 'border-purple': '' === avatar[part].src }"
    >
      <img
        class="object-contain"
        :src="`/parts/empty.png`"
        alt="empty"
      />
    </div>
    <div
      v-for="variant in avatar[part].variants"
      :key="variant"
      @click="variantClickHandler(part, `${part}${variant}`)"
      class="cursor-pointer aspect-square h-24 p-2 flex justify-center align-center border-3 border-blue transition-colors"
      :class="{ 'border-purple': `${part}${variant}` === avatar[part].src }"
    >
      <img
        class="object-contain"
        :src="`/parts/${part}/${part + variant}.png`"
        :alt="part + variant"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.overflow-y-scroll {
  padding-right: 20px;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--blue);
  }
}
</style>
