import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';
import Swiper from 'swiper';
import SwiperCore, {Scrollbar, Navigation} from 'swiper/core';
// import SwiperCore, {
//   Navigation,
//   Pagination,
//   Scrollbar,
//   A11y,
// } from 'swiper/core';

SwiperCore.use([Scrollbar, Navigation]);
// SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit, AfterViewInit{

  proms = [];

  constructor(private service: MainService) { }

  ngOnInit(): void {
    this.proms = this.service.getPromociones();
  }

  ngAfterViewInit(){
    const swiper = new Swiper('.swiper-container',{
      slidesPerView: 4.3,
      freeMode: false,
      spaceBetween: 0,
      scrollbar: {
        el: '.swiper-scrollbar',
        hide: false,
        snapOnRelease: true,
        draggable: true,
        dragSize: 'auto'
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

    })
  }

  // onSwiper(swiper) {
  //   console.log(swiper);
  // }
  // onSlideChange() {
  //   console.log('slide change');
  // }

}
