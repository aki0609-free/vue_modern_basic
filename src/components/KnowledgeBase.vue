<script setup lang="ts">
import { Topic } from '../types/types';
import KnowledgeGrid from './KnowledgeGrid.vue';

type Props = {
  topics: Topic[];
}
type Emits = {
  (e: 'select-topic', topicId: string): void
}
defineProps<Props>();
const emits = defineEmits<Emits>();

const selectTopic = (id: string) => {
  emits('select-topic', id);
}
</script>

<template>
  <section>
    <h2>Select a Topic</h2>
    <KnowledgeGrid :topics="topics" @select-topic="selectTopic" />
  </section>
</template>

