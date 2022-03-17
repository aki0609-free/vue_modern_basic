<script setup lang="ts">
import BaseBadge from './BaseBadge.vue';
type Props = {
  fullName: string;
  infoText: string;
  role: 'admin' | 'author';
}
defineProps<Props>();
</script>

<template>
  <section>
    <div>
      <h3>{{ fullName }}</h3>
      <BaseBadge :type="role" :caption="role.toUpperCase()" />
    </div>
    <p>{{ infoText }}</p>
  </section>
</template>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
section div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>