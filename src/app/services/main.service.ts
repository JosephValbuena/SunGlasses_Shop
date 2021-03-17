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
    },
    {
      imagen: 'https://www.sanborns.com.mx/imagenes-sanborns-ii/1200/7506245479234.jpg',
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

  tendencias = [
    {
      imagen: 'https://cdn.shopify.com/s/files/1/1600/4499/products/HCLA20BBTP_L_e022f8e2-ad41-4043-81bb-a27090b3952c_x600.progressive.jpg',
      nombre: 'Gold Green Bottle MOMA',
      precio: '$160.000'

    },
    {
      imagen: 'https://cdn.shopify.com/s/files/1/1600/4499/products/gafas-de-sol-hawkers-140003-g_x600.progressive.jpg',
      nombre: 'POLARIZED CARBON BLACK',
      precio: '$160.000'
    },
    {
      imagen: 'https://cdn.shopify.com/s/files/1/1600/4499/products/gafas-sol-hawkers-one-ftr10-g_9e24bff2-1ae7-4976-83de-ee27063b89d5_x600.progressive.jpg',
      nombre: 'FUSION - ROSE GOLD ONE',
      precio: '$140.000'
    },
    {
      imagen: 'https://cdn.shopify.com/s/files/1/1600/4499/products/W18TR11-g_x600.progressive.jpg',
      nombre: 'CARBON BLACK - DARK WARWICK',
      precio: '$89.000'
    },
    {
      imagen: 'https://cdn.shopify.com/s/files/1/1600/4499/products/gafas-sol-hawkers-one-lifestyle-liftr08-g_x600.progressive.jpg',
      nombre: 'CRYSTAL RED - BLUE GRADIENT ONE LS',
      precio: '$89.000'
    },
    {
      imagen: 'https://cdn.shopify.com/s/files/1/1600/4499/products/gafas-sol-hawkers-one-venm-hybrid-votr04-g_x600.progressive.jpg',
      nombre: 'CHROME ONE VENM HYBRID',
      precio: '$160.000'
    },
    {
      imagen: 'https://cdn.shopify.com/s/files/1/1600/4499/products/gafas-sol-hawkers-one-otr02-g_19bab1b1-ded2-4f16-82c3-5db9a1ea0f6e_x600.progressive.jpg',
      nombre: 'CARBON BLACK - EMERALD ONE',
      precio: '$89.000'
    },
    {
      imagen: 'https://cdn.shopify.com/s/files/1/1600/4499/products/gafas-sol-hawkers-moma-moma1-g_x600.progressive.jpg',
      nombre: 'SILVER - BLACK GRADIENT MOMA',
      precio: '$160.000'
    },
    
  ];

  nuevo = [
    {
      imagen: 'https://cdn.shopify.com/s/files/1/1600/4499/products/HSHA20GSM0-L_x600.progressive.jpg',
      nombre: 'SHADOW - MIRROR',
      precio: '$89.000'
    },
    {
      imagen: 'https://cdn.shopify.com/s/files/1/1600/4499/products/HSHA20KKM0-L_x600.progressive.jpg',
      nombre: 'SHADOW - ROSE GOLD',
      precio: '$89.000'
    },
    {
      imagen: 'https://cdn.shopify.com/s/files/1/1600/4499/products/HSHA20DEM0-L_x600.progressive.jpg',
      nombre: 'SHADOW - GREEN',
      precio: '$89.000'
    },
    {
      imagen: 'https://cdn.shopify.com/s/files/1/1600/4499/products/hawkers-carbono-spotted-blue-chrome-one-CC18TR04-l_x600.progressive.jpg',
      nombre: 'ONE - POLARIZED CARBONO BLUE CHROME',
      precio: '$160.000'
    },
    {
      imagen: 'https://cdn.shopify.com/s/files/1/1600/4499/products/HLAX20BDMP_L_6379fc68-83ed-4565-b381-7a4554d03336_x600.progressive.jpg',
      nombre: 'LAX - POLARIZED GOLD',
      precio: '$89.000'
    },
    {
      imagen: 'https://cdn.shopify.com/s/files/1/1600/4499/products/HSHA20KKMP_L_x600.progressive.jpg',
      nombre: 'SHADOW - POLARIZED ROSE GOLD',
      precio: '$175.000'
    },
    {
      imagen: 'https://cdn.shopify.com/s/files/1/1600/4499/products/HOLS20BBTP_L_0718047c-77ef-49d0-987a-9ac3fe296de1_x600.progressive.jpg',
      nombre: 'ONE LS - POLARIZED DARK',
      precio: '$89.000'
    },
    {
      imagen: 'https://cdn.shopify.com/s/files/1/1600/4499/products/HMOT20BLTP_L_191ff291-b0e4-4b46-bb8e-246e1d85b36b_x600.progressive.jpg',
      nombre: 'MOTION - POLORIZED SKY',
      precio: '$89.000'
    }
  ];

  constructor() {}

  getPromociones(){
    return this.promociones;
  }

  getTendencias(){
    return this.tendencias;
  }

  getNuevos(){
    return this.nuevo;
  }

}
