import {Component, OnInit} from '@angular/core';
import {QuestionsService} from "../../../../services/questions.service";
import {SimpleQuestion} from "../../../../models/SimpleQuestion";

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  loading: boolean = false;
  questions: SimpleQuestion[];

  constructor(private questionService: QuestionsService) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.questionService.getAll().subscribe(result => {
      this.questions = result;
    }, error => {
      console.error(error)
    }, () => {
      this.loading = false;
    })
  }
}
