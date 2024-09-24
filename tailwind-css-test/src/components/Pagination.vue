<template>
  <div class="pagination flex flex-col sm:flex-row justify-between items-center mt-4 gap-4 sm:gap-2">
    <button
        @click="prevPage"
        :disabled="currentPage === 1"
        class="bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
    >
      Prev
    </button>
    <span class="text-gray-600 font-medium">Page {{ currentPage }} of {{ totalPages }}</span>
    <button
        @click="nextPage"
        :disabled="currentPage === totalPages"
        class="bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 px-4 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
    >
      Next
    </button>
  </div>
</template>

<script>
export default {
  name: 'PaginationComponent',
  props: {
    currentPage: {
      type: Number,
      required: true
    },
    totalPages: {
      type: Number,
      required: true
    }
  },
  emits: ['prev-page', 'next-page'],
  methods: {
    prevPage() {
      if (this.currentPage > 1) {
        this.$emit('prev-page');
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.$emit('next-page');
      }
    }
  }
}
</script>
