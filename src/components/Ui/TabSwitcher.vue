<script setup lang="ts">
import { Part } from "@stores/avatarStore.ts";

interface Props {
  tabs: {
    [key: string]: Part
  }
}

interface Emits {
  (e: "switch", value: string): void;
}

defineProps<Props>();
const emits = defineEmits<Emits>();

/*! typeof key === 'string' ? key : '' Добавлен из-за неверной ошибки Volar */
</script>

<template>
  <div class="tab-switcher">
    <div class="tab-switcher__inner-wrapper">
      <div
        class="tab-switcher__tab"
        v-for="(value, key, i) in tabs"
        :key="value.title"
      >
        <input
          class="tab-switcher__tab-input"
          @change="emits('switch', typeof key === 'string' ? key : '')"
          type="radio"
          name="tab_switcher"
          :id="typeof key === 'string' ? key : ''"
          :value="key"
          :checked="i === 0"
        />
        <label
          class="tab-switcher__tab-label"
          :for="typeof key === 'string' ? key : ''"
        >
          {{ value.title }}
        </label>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tab-switcher {
  padding-bottom: 1rem;
  height: fit-content;
  border-bottom: 3px solid var(--blue);

  &__inner-wrapper {
    display: flex;
    gap: 1rem;
  }

  &__tab {
    &-label {
      position: relative;
      cursor: pointer;
      font-weight: 500;
      text-transform: uppercase;
      transition: color .2s ease;

      &::before {
        position: absolute;
        content: "";
        bottom: -4px;
        left: 50%;
        transform: translateX(-50%);
        height: 3px;
        width: 0;
        border-radius: 9999px;
        background-color: currentColor;
        transition: background-color .3s ease, width .3s ease;
      }
    }

    &-input {
      display: none;
    }
  }
}
input:checked + label {
  color: var(--purple);

  &::before {
    width: 100%;
  }
}
</style>
