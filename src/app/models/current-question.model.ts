export class CurrentQuestionModel {
  question: string;
  answers: string[];
  correctAnswerIndex?: number;

  constructor() {
    this.question = '';
    this.answers = [];
    this.correctAnswerIndex = undefined;
  }
}
