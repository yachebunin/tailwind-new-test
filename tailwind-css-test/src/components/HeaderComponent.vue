<template>
  <div class="flex items-center min-h-[80px] px-4 sm:px-10 md:px-20 bg-gray-800 text-white">
    <LogoComponent />
    <div class="ml-auto flex items-center">
      <!-- Бургер меню для мобильных устройств -->
      <button @click="toggleMenu" class="sm:hidden">
        <MenuIcon class="w-8 h-8 text-white"/>
      </button>

      <!-- Навигационное меню для планшетов и десктопов -->
      <div class="hidden sm:flex items-center gap-6">
        <NavComponent />
        <SubscribeButton />
      </div>
    </div>

    <!-- Мобильное меню -->
    <div v-if="isMenuOpen" class="absolute top-16 left-0 w-full bg-gray-800 text-white flex flex-col items-center gap-4 p-4 sm:hidden">
      <NavComponent />
    </div>
  </div>
</template>

<script>
import LogoComponent from "@/components/LogoComponent.vue";
import NavComponent from "@/components/NavComponent.vue";
import SubscribeButton from "@/components/SubscribeButton.vue";
import { MenuIcon } from '@heroicons/vue/outline';

export default {
  name: 'HeaderComponent',
  components: { LogoComponent, NavComponent, SubscribeButton, MenuIcon },
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
}
</script>
