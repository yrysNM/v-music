<template>
  <!-- Header -->
  <header id="header" class="bg-gray-700">
    <nav class="container mx-auto flex justify-start items-center py-5 px-4">
      <!-- App Name -->
      <a class="text-white font-bold uppercase text-2xl mr-4" href="#">Music</a>

      <div class="flex flex-grow items-center">
        <!-- Primary Navigation -->
        <ul class="flex flex-row mt-1">
          <!-- Navigation Links -->
          <li>
            <a class="px-2 text-white" href="#" @click="openModal"
              >Login / Register</a
            >
          </li>
          <li>
            <a class="px-2 text-white" href="#">Manage</a>
          </li>
        </ul>
      </div>
    </nav>
    <auth-modal :isOpen="isOpen" @closeModal="closeModal" />
  </header>
</template>

<script lang="ts">
import { Ref, ref } from "vue";
import AuthModal from "./AuthModal.vue";

export default {
  components: {
    AuthModal,
  },
  setup() {
    let isOpen: Ref<boolean> = ref(false);

    const openModal = () => {
      isOpen.value = true;
    };

    const closeModal = (): void => {
      isOpen.value = false;
    };

    return {
      isOpen,
      openModal,
      closeModal,
    };
  },
};
</script>

<style lang="scss" scoped></style>
