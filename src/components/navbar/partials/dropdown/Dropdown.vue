<template>
  <div class="Dropdown" v-bind:class="{ Dropdown_open: open }">
    <div class="Dropdown__navigation">
      <a class="Dropdown__link" href="/"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          class="Dropdown__linkIcon"
        >
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          <path d="M0 0h24v24H0z" fill="none" /></svg
        >Dashboard
      </a>
      <a class="Dropdown__link" href="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          class="Dropdown__linkIcon"
        >
          <path
            d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"
          />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
        Resources
      </a>
      <a class="Dropdown__link Dropdown__link_active" href="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          class="Dropdown__linkIcon Dropdown__linkIcon_active"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"
          />
        </svg>
        Discussion
      </a>
      <a class="Dropdown__link" href="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          class="Dropdown__linkIcon"
        >
          <path
            d="M21 17V5H3v12h18m0-14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-5v2H8v-2H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h18M5 7h6v4H5V7m0 6h6v2H5v-2m8-6h6v2h-6V7m0 4h6v4h-6v-4z"
          />
        </svg>
        Sway
      </a>
    </div>
    <div class="Dropdown__controls">
      <a class="Dropdown__link" href="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          class="Dropdown__linkIcon"
        >
          <path
            d="M21 19v1H3v-1l2-2v-6c0-3.1 2.03-5.83 5-6.71V4a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.29c2.97.88 5 3.61 5 6.71v6l2 2m-7 2a2 2 0 0 1-2 2 2 2 0 0 1-2-2"
          />
        </svg>
        Notifications
      </a>
      <a class="Dropdown__link" href="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          class="Dropdown__linkIcon"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16.67 13.13C18.04 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.57-3.47-6.33-3.87z"
          />
          <circle fill-rule="evenodd" clip-rule="evenodd" cx="9" cy="8" r="4" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4c-.47 0-.91.1-1.33.24a5.98 5.98 0 0 1 0 7.52c.42.14.86.24 1.33.24zM9 13c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"
          />
        </svg>
        Admin
      </a>
      <a class="Dropdown__link" href="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          class="Dropdown__linkIcon"
        >
          <path
            d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
          />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
        Settings
      </a>
      <a class="Dropdown__link Dropdown__link_logout" href="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          class="Dropdown__linkIcon Dropdown__linkIcon_logout"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5a2 2 0 0 0-2 2v4h2V5h14v14H5v-4H3v4a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
          />
        </svg>
        Log Out
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dropdown",
  props: {
    open: Boolean
  }
};
</script>

<style>
@import url("./dropdown.css");
</style>
