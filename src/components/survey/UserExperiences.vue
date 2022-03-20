<script setup lang="ts">
import { SurveyResult as Result } from '../../types/types';
import BaseCard from '../UI/BaseCard.vue';
import BaseButton from '../UI/BaseButton.vue';
import SurveyResult from './SurveyResult.vue';

type Props = {
  results: Result[]
}
defineProps<Props>();
</script>

<template>
  <section>
    <BaseCard>
      <h2>Submitted Experiences</h2>
      <div>
        <BaseButton>Load Submitted Experiences</BaseButton>
      </div>
      <ul>
        <SurveyResult
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></SurveyResult>
      </ul>
    </BaseCard>
  </section>
</template>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>