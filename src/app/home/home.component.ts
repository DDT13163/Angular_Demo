import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  traiCay = ['Táo', 'Nho', 'Cam', 'Quýt', 'Xoài', 'Ổi'];
  theThao = ['Bóng Đá', 'Bóng Chuyền', 'Bóng Rổ', 'Quần Vợt', 'Bơi'];
  traiCay2 = [{ ten: "Táo", gia: 12, haGia: true }, { ten: "Nho", gia: -3, haGia: false }, { ten: "Xoài", gia: 34.5, haGia: true }];
  constructor() { }

  ngOnInit(): void {
  }

}
