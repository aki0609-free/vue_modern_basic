export type Rating = 'poor' | 'average' | 'great';

export type SurveyResult = {
  name: string;
  rating: Rating;
  id: string;
};