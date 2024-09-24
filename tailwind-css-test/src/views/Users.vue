<template>
  <div class="p-4 sm:p-6 md:p-10 max-w-full sm:max-w-2xl md:max-w-4xl mx-auto bg-white shadow-md rounded-lg">
    <h1 class="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 md:mb-8 text-gray-800">Users List</h1>
    <ul class="divide-y divide-gray-200 mb-4 sm:mb-6 md:mb-8">
      <li v-for="user in paginatedUsers" :key="user.id" class="py-2 sm:py-4 md:py-6">
        <div class="text-sm sm:text-lg md:text-xl font-medium text-gray-900">{{ user.name }}</div>
        <div class="text-xs sm:text-sm md:text-base text-gray-600">{{ user.email }}</div>
      </li>
    </ul>
    <Pagination
        :currentPage="page"
        :totalPages="totalPages"
        @prev-page="prevPage"
        @next-page="nextPage"
    />
  </div>
</template>

<script>
import Pagination from '@/components/Pagination.vue';

export default {
  name: 'UsersPage',
  components: {
    Pagination
  },
  data() {
    return {
      users: [],
      page: 1,
      perPage: 5,
    };
  },
  computed: {
    paginatedUsers() {
      const start = (this.page - 1) * this.perPage;
      return this.users.slice(start, start + this.perPage);
    },
    totalPages() {
      return Math.ceil(this.users.length / this.perPage);
    }
  },
  methods: {
    async fetchUsers() {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      this.users = data;
    },
    prevPage() {
      if (this.page > 1) {
        this.page--;
      }
    },
    nextPage() {
      if (this.page < this.totalPages) {
        this.page++;
      }
    }
  },
  mounted() {
    this.fetchUsers();
  }
}
</script>
