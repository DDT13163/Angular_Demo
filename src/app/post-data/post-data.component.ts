import { Component, OnInit } from '@angular/core';
import { HttpServerService } from '../Services/http-server.service';

@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.scss']
})
export class PostDataComponent implements OnInit {

  constructor(private httpServerService: HttpServerService) { }

  ngOnInit(): void {
    const payload = {
      "userId": 104,
      "name": "Tom"
    };
    this.httpServerService.postComments(payload).subscribe(data => {
      console.log('postComment', data);
    });
  }

}
