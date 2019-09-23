<template>
  <div class="Card">
    <div class="Card__action_left">
      <svg
        viewBox="0 0 33 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="Card__action_leftIcon"
      >
        <path
          d="M26.125 4.125H6.861c-1.526 0-2.722 1.224-2.722 2.75l-.014 19.25c0 1.512 1.21 2.75 2.736 2.75h19.264a2.758 2.758 0 0 0 2.75-2.75V6.875a2.75 2.75 0 0 0-2.75-2.75zm0 16.5h-5.5A4.128 4.128 0 0 1 16.5 24.75a4.128 4.128 0 0 1-4.125-4.125H6.861V6.875h19.264v13.75z"
          fill="#fff"
        />
      </svg>
      <div class="Card__action_leftLabel">Unread</div>
    </div>
    <div class="Card__action_right">
      <svg
        viewBox="0 0 33 33"
        fill="none"
        class="Card__action_rightIcon"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.5 23.746l8.497 5.129-2.255-9.666 7.508-6.504-9.886-.839L16.5 2.75l-3.864 9.116-9.886.839 7.508 6.504-2.255 9.666 8.497-5.129z"
          fill="#fff"
        />
      </svg>
      <div class="Card__action_rightLabel">
        Star
      </div>
    </div>
    <div class="Card__content" v-pan="dragHandler" :style="style">
      <div class="Card__upper">
        <div class="Card__title">
          <div class="Card__unreadBadge" v-if="isUnread"></div>
          <!-- card type -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            style="marginRight: 4px; flex-shrink: 0;"
            v-if="type === 0"
          >
            <path
              d="M18 8H6V6h12v2m0 3H6V9h12v2m0 3H6v-2h12v2m4-10a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14l4 4V4z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            style="marginRight: 4px; flex-shrink: 0;"
            v-if="type === 1"
          >
            <path
              d="M11 18h2v-2h-2v2m1-16A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m0-14a4 4 0 0 0-4 4h2a2 2 0 0 1 2-2 2 2 0 0 1 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5a4 4 0 0 0-4-4z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            style="marginRight: 4px; flex-shrink: 0;"
            v-if="type === 2"
          >
            <path
              d="M12 8H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h1v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h3l5 4V4l-5 4m3 7.6L13 14H4v-4h9l2-1.6v7.2m6.5-3.6c0 1.71-.96 3.26-2.5 4V8c1.53.75 2.5 2.3 2.5 4z"
            />
          </svg>
          {{ title }}
        </div>
        <div class="Card__badges">
          <!-- pin -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="#78508c"
          >
            <path d="M16 12V4h1V2H7v2h1v8l-2 2v2h5.2v6h1.6v-6H18v-2l-2-2z" />
          </svg>
          <!-- star -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="#FFB400"
            v-if="isStarred"
          >
            <path
              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.45 4.73L5.82 21 12 17.27z"
            />
          </svg>
          <!-- tick -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="#82ba0c"
          >
            <path d="M21 7L9 19l-5.5-5.5 1.41-1.41L9 16.17 19.59 5.59 21 7z" />
          </svg>
          <!-- award -->
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
        <div class="Card__stats">
          <!-- likes -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="#b0b0b0"
          >
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5 2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35z"
            />
          </svg>
          5 ️
          <!-- comments -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="#b0b0b0"
          >
            <path
              d="M9 22a1 1 0 0 1-1-1v-3H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6.1l-3.7 3.71c-.2.19-.45.29-.7.29H9m1-6v3.08L13.08 16H20V4H4v12h6M6 7h12v2H6V7m0 4h9v2H6v-2z"
            />
          </svg>
          5
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    title: String,
    type: Number
  },
  data: () => ({
    horizontalSwipeDiff: 0,
    prevSwipeX: 0,
    deltaX: 0,
    isStarred: false,
    isUnread: false
  }),
  computed: {
    style() {
      return {
        transform: "translate3d(" + this.deltaX + "px, 0, 0)"
      };
    }
  },
  methods: {
    dragHandler(event) {
      if (event.isFinal && this.deltaX === 70) {
        // unread if threshold 70px threshold is hit
        console.log("unread");
        this.deltaX = 0;
        // timeout to prevent viewport stretching bug
        setTimeout(() => {
          this.isUnread = true;
        }, 100);
        return;
      }
      if (event.isFinal && this.deltaX === -70) {
        // star if threshold -70px threshold is hit
        this.deltaX = 0;
        // timeout to prevent viewport stretching bug
        setTimeout(() => {
          this.isStarred = true;
        }, 100);
        return;
      }
      // reset card if pan action ended
      if (event.isFinal) {
        this.deltaX = 0;
        return;
      }
      if (event.deltaX >= 70) {
        // stop card movement when 70px threshold is hit
        this.deltaX = 70;
        return;
      } else if (event.deltaX <= -70) {
        // stop card movement when -70px threshold is hit
        this.deltaX = -70;
        return;
      }
      this.deltaX = event.deltaX;
    }
  }
};
</script>

<style>
@import url("./card.css");
</style>
