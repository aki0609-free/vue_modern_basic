<script setup lang="ts">
import { reactive, ref } from 'vue';
import { Friend } from '../types/types';

const detailsAreVisible = ref<boolean>(false);
const friend = reactive<Friend>({
  id: 'manuel',
  name: 'Manuel Lorenz',
  phone: '0123 45678 90',
  email: 'manuel@localhost.com'
});

const toggleDetails = () => {
  return detailsAreVisible.value = !detailsAreVisible.value;
}

</script>

<template>
  <li>
    <h2>{{ friend.name }}</h2>
    <button @cilck="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <ul>
      <li>
        Phone:
        <strong>{{ friend.phone }}</strong>
      </li>
      <li>
        Email:
        <strong>{{ friend.email }}</strong>
      </li>
    </ul>
  </li>
</template>
