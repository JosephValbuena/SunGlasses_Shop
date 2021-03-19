import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

  noticias = [];

  constructor(private servicio: MainService) { }

  ngOnInit(): void {
    this.noticias = this.servicio.getNoticias();
  }

}
