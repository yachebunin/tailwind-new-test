<template>
  <div class="p-4 sm:p-6 md:p-10 max-w-full sm:max-w-2xl md:max-w-4xl mx-auto bg-white shadow-md rounded-lg">
    <h1 class="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-gray-800">Todos List</h1>
    <ul class="divide-y divide-gray-200 mb-6">
      <li v-for="todo in paginatedTodos" :key="todo.id" class="py-4 sm:py-6 md:py-8">
        <div :class="{'text-gray-400': todo.completed, 'text-gray-900': !todo.completed}" class="text-lg sm:text-xl md:text-2xl font-medium">
          {{ todo.title }}
        </div>
        <span v-if="todo.completed" class="text-sm sm:text-base md:text-lg text-green-500">Completed</span>
        <span v-else class="text-sm sm:text-base md:text-lg text-red-500">Not completed</span>
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
  name: 'TodosPage',
  components: {
    Pagination
  },
  data() {
    return {
      todos: [],
      page: 1,
      perPage: 10,
    };
  },
  computed: {
    paginatedTodos() {
      const start = (this.page - 1) * this.perPage;
      return this.todos.slice(start, start + this.perPage);
    },
    totalPages() {
      return Math.ceil(this.todos.length / this.perPage);
    }
  },
  methods: {
    async fetchTodos() {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos');
      const data = await response.json();
      this.todos = data;
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
    this.fetchTodos();
  }
}
</script>
