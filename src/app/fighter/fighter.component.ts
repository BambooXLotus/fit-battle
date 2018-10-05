import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { FireBaseService } from './../fire-base.service';
import { Fighter } from './fighter.model';

@Component({
  selector: 'app-fighter',
  templateUrl: './fighter.component.html',
  styleUrls: ['./fighter.component.scss']
})
export class FighterComponent implements OnInit {
  @Input()
  id: string;

  @Input()
  photo: string;

  @Input()
  title: string;

  currentFighter: Observable<Fighter>;

  constructor(private service: FireBaseService) {}

  ngOnInit() {
    this.currentFighter = this.service.getFighter(this.id);
  }
}
