import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  name = 'Trọng';
  age = 40;
  age2 = 25;
  constructor() { }

  ngOnInit(): void {
  }

  public resetName(): void {
    console.log('resetName');
    this.name = '';
  }

}
