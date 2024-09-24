<template>
  <ul class="flex items-center gap-2 md:gap-6">
    <li class="text-xs md:text-sm lg:text-base text-white cursor-pointer hover:text-gray-300">
      <router-link to="/">Home</router-link>
    </li>
    <li class="text-xs md:text-sm lg:text-base text-white cursor-pointer hover:text-gray-300">
      <router-link to="/users">Users</router-link>
    </li>
    <li class="text-xs md:text-sm lg:text-base text-white cursor-pointer hover:text-gray-300">
      <router-link to="/todos">Todos</router-link> <!-- Новая ссылка -->
    </li>
  </ul>
</template>

<script>
export default {
  name: 'NavComponent',
}
</script>
