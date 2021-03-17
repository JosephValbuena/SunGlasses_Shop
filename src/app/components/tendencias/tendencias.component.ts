import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-tendencias',
  templateUrl: './tendencias.component.html',
  styleUrls: ['./tendencias.component.css']
})
export class TendenciasComponent implements OnInit {
  
  tendencias = [];

  constructor(private service: MainService) { }

  ngOnInit(): void {
    this.tendencias = this.service.getTendencias();
  }

}
