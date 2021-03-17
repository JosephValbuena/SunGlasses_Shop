import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  productos = [];

  constructor(private service: MainService) { }

  ngOnInit(): void {
    this.productos = this.service.getPromociones();
  }

  

}
