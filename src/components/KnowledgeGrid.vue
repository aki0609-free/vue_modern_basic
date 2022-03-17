<script setup lang="ts">
import { Topic } from '../types/types';
import KnowledgeElement from './KnowledgeElement.vue';

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
  <ul>
    <KnowledgeElement
      v-for="topic in topics"
      :key="topic.id"
      :id="topic.id"
      :topic-name="topic.title"
      :description="topic.description"
      @select-topic="selectTopic"
    />
  </ul>
</template>

<style>
</style>
