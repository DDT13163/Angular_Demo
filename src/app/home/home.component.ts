import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  traiCay = ['Táo', 'Nho', 'Cam', 'Quýt', 'Xoài', 'Ổi'];
  theThao = ['Bóng Đá', 'Bóng Chuyền', 'Bóng Rổ', 'Quần Vợt', 'Bơi'];
  public vietnamData = [
    { city: 'Chọn thành phố', district: [] },
    { city: 'An Giang', district: ["Thành phố Long Xuyên", "Thành phố Châu Đốc", "Thị xã Tân Châu"] },
    { city: 'Bà Rịa - Vũng Tàu', district: ["Thành phố Vũng Tàu", "Thị xã Bà Rịa", "Thị xã Phú Mỹ"] },
    { city: 'Bạc Liêu', district: ["Thành phố Bạc Liêu", "Huyện Đông Hải", "Huyện Hòa Bình"] }
  ]
  public districts: string[] = [];
  constructor() { }

  ngOnInit(): void {
    console.log('vietnamData = ', this.vietnamData);
  }

  public changeCity(event: any): void {
    const city = event.target.value;
    if (!city) {
      return;
    }

    //Cách 1
    // const search = this.vietnamData.filter((data) => data.city === city);
    // console.log('search', search);
    // if (search && search.length > 0) {
    //   this.districts = search[0].district;
    // }


    //Cách 2
    this.districts = this.vietnamData.find(data => data.city === city)?.district || [];
  }

}
