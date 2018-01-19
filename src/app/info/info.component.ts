import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  public items: Array<{value: any, label: string}> = [];
  constructor() { }

  ngOnInit() {
    const x = {'value': '1', 'label': '1 - year'};
    const y = {'value': '2', 'label': '2 - years'};
    this.items.push(x);
    this.items.push(y);
  }

}
