import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-nuevos',
  templateUrl: './nuevos.component.html',
  styleUrls: ['./nuevos.component.css']
})
export class NuevosComponent implements OnInit {

  nuevos = [];

  constructor(private service: MainService) { }

  ngOnInit(): void {
    this.nuevos = this.service.getNuevos();
  }

}
