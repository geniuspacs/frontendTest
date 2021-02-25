import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AppConfig } from '../app-config';
import { QuestionModel } from '../models/question.model';
import { QuestionsResponse } from '../models/questions.response';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class TrivialService {
  private questions = new BehaviorSubject<QuestionModel[]>([]);
  constructor(private http: HttpClient, private tokenService: TokenService) {}

  getQuestions(): Observable<QuestionModel[]> {
    return this.questions.asObservable();
  }

  public loadQuestions(amount: number, difficulty?: string, type?: string) {
    var url = '/api.php?amount=' + amount;

    if (difficulty) url += '&difficulty=' + difficulty;
    if (type) url += '&type=' + type;

    return this.http
      .get<QuestionsResponse>(`${AppConfig.API_ROOT_URL}${url}`)
      .subscribe((questionsResponse) => {
        this.questions.next(questionsResponse.results);
      });
  }
}
