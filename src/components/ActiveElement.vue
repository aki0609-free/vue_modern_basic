<script setup lang="ts">
type Props = {
  topicTitle: string;
  text: string;
}
defineProps<Props>();
</script>

<template>
  <section>
    <h2>{{ topicTitle }}</h2>
    <p>{{ text }}</p>
  </section>
</template>

