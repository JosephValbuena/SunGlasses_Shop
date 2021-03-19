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

  noticias = [
    {
      imagen: 'https://cdn.shopify.com/s/files/1/1600/4499/products/HHYD20RBX0_L_x600.progressive.jpg',
      preview: 'Los críticos han hablado! Las opiniones están dividas, no terminan de gustar e impactar los modelos grandes y ovalados de la nueva colección Gucci!.',
    },
    {
      imagen: 'https://www.cosasdearquitectos.com/wp-content/uploads/Gafas-Piedra-1.jpeg',
      preview: 'La extraña tendencia de lentes con textura, sobre todo textura de rocas, es algo impresionante el boom actual que está pegando.',
    },
    {
      imagen: 'https://pbs.twimg.com/media/CoalXeeW8AAtsCY.jpg',
      preview: 'Pongale ojo a estos nuevos descuentos que GMO trae para usted, gafas medicadas hasta con el 50% de descuento! Lo esperamos.',
    },
    {
      imagen: 'https://masquemarketing.com/wp-content/uploads/2018/06/publicidad_opticas-1080x675.jpg',
      preview: 'La nueva iniciativa de Natali Ladino, estudiante de Ingeniería Ambiental, ha traido al mercado marcos de gafas hechos con reciclaje!',
    },
    {
      imagen: 'https://parcont.com/wp-content/uploads/2020/03/optometria.png',
      preview: '¿Ya realizó su prueba de los ojos?. Cuidado, no se atrase!, puede generar un daño irreparable, sobre todo con el nuevo Homework.',
    },
    {
      imagen: 'https://img.europapress.es/fotoweb/fotonoticia_20181226123457_420.jpg',
      preview: 'Lea la importancia de los lentes a la hora de leer, cuida tus ojos y tu vida. Te comentamos los beneficios y enfermades que genera el no uso de los lentes.',
    },
    {
      imagen: 'https://www.blog.cazcarra.com/wp-content/uploads/2017/03/ojos-gafas.jpg',
      preview: 'La realidad del mito de cambio de color de ojos debido a los filtros de algunos de los lentes más caros del mercado.',
    },


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

  getNoticias(){
    return this.noticias;
  }

}
