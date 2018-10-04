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

  constructor(private service: FireBaseService) {}

  ngOnInit() {
    console.log(this.id);

    this.currentFit = this.service.getFit(this.id);

    this.currentFit.subscribe((s) => {
      this.currentFighter = this.service.gitFighter(s.id);
    });
  }
}
