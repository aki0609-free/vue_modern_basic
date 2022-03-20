<script setup lang="ts">import { ref } from 'vue';
import { Rating, SurveyResult } from '../../types/types';
import BaseCard from '../UI/BaseCard.vue';
import BaseButton from '../UI/BaseButton.vue';

type Emits = {
  (e: 'survey-submit', surveyData: Omit<SurveyResult, 'id'>): void
}
const emits = defineEmits<Emits>();

const enteredName = ref<string>('');
const chosenRating = ref<Rating | null>(null);
const invalidInput = ref<boolean>(false);

const submitSurvey = () => {
  if (enteredName.value === '' || !chosenRating.value) {
    invalidInput.value = true;
    return;
  }
  invalidInput.value = false;

  emits('survey-submit', {
    name: enteredName.value,
    rating: chosenRating.value
  });

  enteredName.value = '';
  chosenRating.value = null;
}
</script>

<template>
  <section>
    <BaseCard>
      <h2>How was your learning experience ?</h2>
      <form @submit.prevent="submitSurvey">
        <div class="form-control">
          <label for="name">Your Name</label>
          <input type="text" id="name" name="name" v-model.trim="enteredName" />
        </div>
        <h3>My Learning experience was ...</h3>
        <div class="form-control">
          <input type="radio" id="rating-poor" value="poor" name="rating" v-model="chosenRating" />
          <label for="rating-poor">Poor</label>
        </div>
        <div class="form-control">
          <input
            type="radio"
            id="rating-average"
            value="average"
            name="rating"
            v-model="chosenRating"
          />
          <label for="rating-average">Average</label>
        </div>
        <div class="form-control">
          <input type="radio" id="rating-great" value="great" name="rating" v-model="chosenRating" />
          <label for="rating-great">Great</label>
        </div>
        <p
          v-if="invalidInput"
        >One or more input fields are invalid. Please check your provided data.</p>
        <div>
          <BaseButton>Submit</BaseButton>
        </div>
      </form>
    </BaseCard>
  </section>
</template>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}
input[type="text"] {
  display: block;
  width: 20rem;
  margin-top: 0.5rem;
}
</style>
