<template>
  <div>
    <div
      class="Form__appbar"
      v-bind:class="{ Form__appbar_open: sharedState.formOpen }"
    >
      <button class="Form__closeButton" v-on:click="closeForm">
        <svg
          v-on:click="closeForm"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59 7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12 5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"
            fill="#fff"
          />
        </svg>
      </button>
      <div class="Form__appbarBrand">New {{ type }}</div>
      <div></div>
    </div>
    <div
      class="Form"
      v-bind:class="{ Form_open: sharedState.formOpen }"
      v-on:submit=""
    >
      <form style="width: 100%;">
        <div class="Form__label">
          What's the type of your post?
          <p style="color: red;">&nbsp;*</p>
        </div>
        <div
          class="Form__radio"
          v-bind:class="{ Form__radio_question: type === 'Question' }"
          v-on:click="setType('Question')"
        >
          Question
        </div>
        <div
          class="Form__radio"
          v-bind:class="{ Form__radio_discussion: type === 'Discussion' }"
          v-on:click="setType('Discussion')"
        >
          Discussion
        </div>
        <div
          class="Form__radio"
          v-bind:class="{ Form__radio_announcement: type === 'Announcement' }"
          v-on:click="setType('Announcement')"
        >
          Announcement
        </div>
        <div class="Form__label">
          What is your post about?
          <p style="color: red;">&nbsp;*</p>
        </div>
        <input
          type="text"
          class="Form__input"
          placeholder="i.e. JS Array methods"
        />
        <div class="Form__label">Give a more elaborate description</div>
        <textarea
          cols="30"
          rows="5"
          class="Form__textarea"
          placeholder="i.e. I would like to learn about the methods Javascript provides for their default Array() object. I know of .push() and .slice(), but is there anything else?"
        ></textarea>
        <div class="Form__selectContainer">
          <div class="Form__selectLabel">
            Category
            <p style="color: red;">&nbsp;*</p>
          </div>
          <select class="Form__select">
            <option>Year 1</option>
            <option>Year 2</option>
            <option>Year 3</option>
          </select>
        </div>
        <div class="Form__selectContainer">
          <div class="Form__selectLabel">
            Subcategory
          </div>
          <select class="Form__select">
            <option>Semester 1</option>
            <option>Semester 2</option>
          </select>
        </div>
        <div class="Form__label">Post options</div>
        <div class="Form__checkboxContainer">
          <input
            type="checkbox"
            class="Form__checkbox"
            v-model="pinnedChecked"
            v-bind:class="{ Form__checkbox_checked: pinnedChecked }"
            id="checkbox"
          />
          <label for="checkbox" class="Form__checkboxLabel">
            <div class="Form__checkboxLabel_primary">Pinned</div>
            <div class="Form__checkboxLabel_secondary">
              Keep at top of thread list
            </div>
          </label>
        </div>
        <div class="Form__checkboxContainer">
          <input
            type="checkbox"
            class="Form__checkbox"
            v-model="privateChecked"
            v-bind:class="{ Form__checkbox_checked: privateChecked }"
            id="checkbox"
          />
          <label for="checkbox" class="Form__checkboxLabel">
            <div class="Form__checkboxLabel_primary">Private</div>
            <div class="Form__checkboxLabel_secondary">
              Visible to you and staff only
            </div>
          </label>
        </div>
        <div class="Form__checkboxContainer">
          <input
            type="checkbox"
            class="Form__checkbox"
            v-model="anonymousChecked"
            v-bind:class="{ Form__checkbox_checked: anonymousChecked }"
            id="checkbox"
          />
          <label for="checkbox" class="Form__checkboxLabel">
            <div class="Form__checkboxLabel_primary">Anonymous</div>
            <div class="Form__checkboxLabel_secondary">
              Hide your name from students
            </div>
          </label>
        </div>
        <input type="submit" class="Form__submit" label="Submit" />
      </form>
    </div>
  </div>
</template>

<script>
import { store } from "../../store/store";
export default {
  name: "Form",
  data: () => ({
    sharedState: store.state,
    type: "Question",
    pinnedChecked: false,
    privateChecked: false,
    anonymousChecked: false
  }),
  methods: {
    closeForm() {
      store.closeForm();
      document.documentElement.style.overflow = "auto";
    },
    setType(type) {
      this.type = type;
    }
  }
};
</script>

<style>
@import url("./form.css");
</style>
