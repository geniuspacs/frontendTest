import { QuestionModel } from './question.model';

export class QuestionsResponse {
  responseCode?: number;
  results: QuestionModel[];

  constructor() {
    this.responseCode = undefined;
    this.results = [];
  }
}
