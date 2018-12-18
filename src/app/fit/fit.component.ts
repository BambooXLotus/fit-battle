import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Fighter } from './../fighter/fighter.model';
import { FireBaseService } from './../fire-base.service';
import { Fit } from './fit.model';

@Component({
  selector: 'app-fit',
  templateUrl: './fit.component.html',
  styleUrls: ['./fit.component.scss']
})
export class FitComponent implements OnInit {
  @Input()
  id: string;
  @Input()
  title: string;

  currentFit: Observable<Fit> | null = null;
  currentFighter: Observable<Fighter> | null = null;

  votes: Observable<any> | null = null;

  constructor(private service: FireBaseService) {}

  ngOnInit() {
    console.log(this.id);

    this.currentFit = this.service.getFit(this.id);

    this.currentFit.subscribe((fit) => {
      this.currentFighter = this.service.getFighter(fit.fighter.id);
      this.votes = this.service.getVotes(this.id);
    });
  }

  vote() {
    this.service.updateVote(this.id);
    // this.service.login();
  }

  uploadPhoto(event) {
    const file = event.target.files[0];

    this.service.uploadPhoto(file, this.id);
  }
}
