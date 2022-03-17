<script setup lang="ts">
import { reactive } from 'vue';
import { User } from './types/types';
import TheHeader from './components/TheHeader.vue';
import BaseList from './components/BaseList.vue';
import UserInfo from './components/UserInfo.vue';

const activeUser = reactive<User>({
  name: 'Maximillian Schwarzmuller',
  description: 'Site owner and admin',
  role: 'admin',
});
</script>

<template>
  <TheHeader />
  <BaseList />
  <UserInfo
    :full-name="activeUser.name"
    :info-text="activeUser.description"
    :role="activeUser.role"
  />
</template>

<style>
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
</style>
