import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Productos } from './../catalogo.model';
import Swiper from 'swiper';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions } from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})
export class CatalogoComponent implements OnInit, AfterViewInit {

  galleryOptions: NgxGalleryOptions [];
  galleryImages: NgxGalleryImage [];

  piezas: Productos[] = [];

  mySwiper: Swiper;

  constructor() { }

  ngOnInit(): void {
    this.galleryOptions = [
      {
          width: '80%',
          height: '600px',
          thumbnailsColumns: 6,
          arrowPrevIcon: 'fa fa-arrow-circle-left',	
          arrowNextIcon: 'fa fa-chevron-right',
          imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
          breakpoint: 800,
          width: '100%',
          height: '600px',
          imagePercent: 80,
          thumbnailsPercent: 20,
          thumbnailsMargin: 20,
          thumbnailMargin: 20
      },
      // max-width 400
      {
          breakpoint: 400,
          preview: false
      }
  ];

    this.galleryImages = [
      {
        small: 'assets/images/01.jpg',
        medium: 'assets/images/01.jpg',
        big: 'assets/images/01.jpg',
        description: 'Lapicero Zombie',
        price: 11
      },
      {
        small: 'assets/images/02.jpg',
        medium: 'assets/images/02.jpg',
        big: 'assets/images/02.jpg',
        description: 'Gato Ying Yang',
        price: 12
      },
      {
        small: 'assets/images/03.jpg',
        medium: 'assets/images/03.jpg',
        big: 'assets/images/03.jpg',
        description: 'Llavero a 2 Colores',
        price: 13
      },
      {
        small: 'assets/images/04.jpg',
        medium: 'assets/images/04.jpg',
        big: 'assets/images/04.jpg',
        description: 'Batman',
        price: 14
      },
      {
        small: 'assets/images/05.jpg',
        medium: 'assets/images/05.jpg',
        big: 'assets/images/05.jpg',
        description: 'Aros para Trixie',
        price: 15
      },
      {
        small: 'assets/images/06.jpg',
        medium: 'assets/images/06.jpg',
        big: 'assets/images/06.jpg',
        description: 'Caja con Relieve',
        price: 16
     },
     {
        small: 'assets/images/07.jpg',
        medium: 'assets/images/07.jpg',
        big: 'assets/images/07.jpg',
        description: 'Caja con Relieve',
        price: 17
      },
      {
        small: 'assets/images/08.jpg',
        medium: 'assets/images/08.jpg',
        big: 'assets/images/08.jpg',
        description: 'Porta Celular Bart',
        price: 18
      },
      {
        small: 'assets/images/09.jpg',
        medium: 'assets/images/09.jpg',
        big: 'assets/images/09.jpg',
        description: 'Porta Celular Bart',
        price: 19
      },
      {
        small: 'assets/images/10.jpg',
        medium: 'assets/images/10.jpg',
        big: 'assets/images/10.jpg',
        description: 'Porta Celular Gato',
        price: 20
      },
      {
        small: 'assets/images/11.jpg',
        medium: 'assets/images/11.jpg',
        big: 'assets/images/11.jpg',
        description: 'Porta Celular Gato',
        price: 21
      }
  ];
}

  ngAfterViewInit() {
    this.mySwiper = new Swiper('.swiper-container', {
      loop: true,
      slidesPerView: 2,
      navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
      }
    });
  }

  clickProductos(id: number) {
    console.log('Productos');
    console.log(id);
  }

}
