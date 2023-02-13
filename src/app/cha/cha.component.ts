import { Component, OnInit, ViewChild } from '@angular/core';
import { ConComponent } from '../con/con.component';

@Component({
  selector: 'app-cha',
  templateUrl: './cha.component.html',
  styleUrls: ['./cha.component.scss']
})
export class ChaComponent implements OnInit {
public chaMessage = '';
@ViewChild('thangTeo') thangTeo: ConComponent | undefined;
@ViewChild('thangTi') thangTi: ConComponent | undefined;

  constructor() { }

  ngOnInit(): void {}

  public goiCon(name: string) {
    console.log('Đứa nào gọi ba thế?', name);
    this.chaMessage = "Chào " + name;
  }

  public choTien() {
    this.thangTeo?.choTien(10);
    this.thangTi?.choTien(20);
  }

}
