<script setup lang="ts">
type Props = {
  id: string;
  topicName: string;
  description: string;
}
type Emits = {
  (e: 'select-topic', id: string): void
}

const props = defineProps<Props>();
const emits = defineEmits<Emits>();

const selectTopic = () => {
  emits('select-topic', props.id);
}
</script>

<template>
  <li>
    <h3>{{ topicName }}</h3>
    <p>{{ description }}</p>
    <button @click="selectTopic">Learn More</button>
  </li>
</template>

