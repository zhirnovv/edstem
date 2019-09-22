<template>
  <div class="Card">
    <div class="Card__upper">
      <div class="Card__title">Using ::stdin in C++</div>
      <div class="Card__type">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="#78508c"
        >
          <path d="M16 12V4h1V2H7v2h1v8l-2 2v2h5.2v6h1.6v-6H18v-2l-2-2z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="#FFB400"
        >
          <path
            d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.45 4.73L5.82 21 12 17.27z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="#82ba0c"
        >
          <path d="M21 7L9 19l-5.5-5.5 1.41-1.41L9 16.17 19.59 5.59 21 7z" />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="#0085ff"
        >
          <path
            d="M9 10a3.04 3.04 0 0 1 3-3 3.04 3.04 0 0 1 3 3 3.04 3.04 0 0 1-3 3 3.04 3.04 0 0 1-3-3m3 9l4 1v-3.08A7.54 7.54 0 0 1 12 18a7.54 7.54 0 0 1-4-1.08V20m4-16a5.78 5.78 0 0 0-4.24 1.74A5.78 5.78 0 0 0 6 10a5.78 5.78 0 0 0 1.76 4.23A5.78 5.78 0 0 0 12 16a5.78 5.78 0 0 0 4.24-1.77A5.78 5.78 0 0 0 18 10a5.78 5.78 0 0 0-1.76-4.26A5.78 5.78 0 0 0 12 4m8 6a8.04 8.04 0 0 1-.57 2.8A7.84 7.84 0 0 1 18 15.28V23l-6-2-6 2v-7.72A7.9 7.9 0 0 1 4 10a7.68 7.68 0 0 1 2.33-5.64A7.73 7.73 0 0 1 12 2a7.73 7.73 0 0 1 5.67 2.36A7.68 7.68 0 0 1 20 10z"
          />
        </svg>
      </div>
    </div>
    <div class="Card__lower">
      <div class="Card__author">User Name</div>
      <div class="Card__subject">Tutorials</div>
      <div class="Card__stats">❤5 ️💬5</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card"
};
</script>

<style>
@import url("./card.css");
</style>
