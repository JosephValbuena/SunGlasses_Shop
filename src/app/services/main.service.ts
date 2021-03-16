import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  promociones = [
    {
      imagen: 'https://minisomx.vtexassets.com/arquivos/ids/164152-800-800?width=800&height=800&aspect=true',
      nombre: 'Gafas Rayban',
      descp: 'Exclusivas gafas rayban en color negro',
      precio: '180.000'
    },

    {
      imagen: 'https://mauerstore.com/148-large_default/gafas-sol-madera-acetato-midland-indigo.jpg',
      nombre: 'Gafas Rayban',
      descp: 'Exclusivas gafas rayban en color negro',
      precio: '180.000'
    },

    {
      imagen: 'https://i.linio.com/p/f14f1c343a9ccec87b7f1aac9cb842a5-catalog.jpg',
      nombre: 'Gafas Rayban',
      descp: 'Exclusivas gafas rayban en color negro',
      precio: '180.000'
    },

    {
      imagen: 'https://mobius-luxury.eu/image/catalog/Chopard_Sunglasses/95217-0372/95217-0372_01.jpg',
      nombre: 'Gafas Rayban',
      descp: 'Exclusivas gafas rayban en color negro',
      precio: '180.000'
    },

    {
      imagen: 'https://www.sanborns.com.mx/imagenes-sanborns-ii/1200/7506245479227.jpg',
      nombre: 'Gafas Rayban',
      descp: 'Exclusivas gafas rayban en color negro',
      precio: '180.000'
    },

    {
      imagen: 'https://falabella.scene7.com/is/image/FalabellaCO/3921946_1?q=i?wid=800&hei=800&qlt=70',
      nombre: 'Gafas Rayban',
      descp: 'Exclusivas gafas rayban en color negro',
      precio: '180.000'
    },

    {
      imagen: 'https://www.sanborns.com.mx/imagenes-sanborns-ii/1200/7506245479234.jpg',
      nombre: 'Gafas Rayban',
      descp: 'Exclusivas gafas rayban en color negro',
      precio: '180.000'
    }

  ]

  constructor() {}

  getPromociones(){
    return this.promociones;
  }

}
