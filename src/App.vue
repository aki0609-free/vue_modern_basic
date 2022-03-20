<script setup lang="ts">import { ref } from 'vue';
import { SurveyResult } from './types/types';
import LearningSurvey from './components/survey/LearningSurvey.vue';
import UserExperiences from './components/survey/UserExperiences.vue';

const savedSurveyResults = ref<SurveyResult[]>([]);

const storeSurvey = (surveyData: Omit<SurveyResult, 'id'>) => {
  const surveyResult = {
    id: new Date().toISOString(),
    name: surveyData.name,
    rating: surveyData.rating,
  } as SurveyResult;
  savedSurveyResults.value.push(surveyResult);
}
</script>

<template>
  <LearningSurvey @survey-submit="storeSurvey" />
  <UserExperiences :results="savedSurveyResults" />
</template>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
</style>
