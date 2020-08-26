import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Productos } from './../catalogo.model';
import Swiper, { Navigation } from 'swiper';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})
export class CatalogoComponent implements OnInit, AfterViewInit {

  piezas: Productos[] = [
    {
      id: '1',
      image: 'assets/images/01.jpeg',
      title: 'Lapicero Zombie',
      price: 10,
      description: 'x'
    }
  ];

  mySwiper: Swiper;

  constructor() { }

  ngOnInit(): void {
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
