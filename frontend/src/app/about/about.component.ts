import { AboutService } from './../services/about.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  message: string;
  status: number;
  errorMessage: string;

  constructor(private about: AboutService) { }

  ngOnInit() {
    this.about.getAbout().subscribe(
      data => {
        this.message = data.message;
      },
      error => {
        this.status = error.error.status;
        this.errorMessage = error.error.message;
      }
    );
  }

}
