import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
})
export class StartComponent implements OnInit, OnChanges {
  @Input()
  rating: number = 0;
  @Output()
  ratingClicked: EventEmitter<string> = new EventEmitter<string>();
  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChange');
  }

  ngOnInit() {
    console.log('ngOnInit');
  }
  rate() {
    console.log('Rating');
    this.ratingClicked.emit(`Rating:${this.rating}`);
  }
}
