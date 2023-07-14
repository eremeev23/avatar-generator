<script setup lang="ts">
import { ref } from "vue";
import { storeToRefs } from "pinia";
import html2canvas from "html2canvas";
import { useAvatarStore } from "@stores/avatarStore.ts";
import UiTabSwitcher from "@components/Ui/TabSwitcher.vue";
import UiVariants from "@components/Ui/Variants.vue";

const avatarStore = useAvatarStore();
const { avatar } = storeToRefs(avatarStore);
const activeTab = ref<string>("head");

const toPrint = () => {
  const avatar = document.getElementById("to_print")
  if (avatar) {
    html2canvas(avatar)
      .then((canvas) => {
        document.body.appendChild(canvas);

        const image = canvas.toDataURL("image/png", 1.0);
        const link = document.createElement("a");

        link.download = "my-avatar.png";
        link.href = image;
        link.click();
      }
    );
  }
}
</script>

<template>
  <div class="flex flex-col justify-between">
    <div class="flex flex-col gap-8">
      <UiTabSwitcher
        :tabs="avatar"
        @switch="activeTab = $event"
      />
      <UiVariants :part="activeTab" />
    </div>
    <button
      @click="toPrint"
      class="w-fit px-10 py-2 border-3 border-blue bg-blue text-light font-medium uppercase hover:bg-transparent hover:text-blue transition-colors"
    >
      Print
    </button>
  </div>
</template>

<style scoped>

</style>
