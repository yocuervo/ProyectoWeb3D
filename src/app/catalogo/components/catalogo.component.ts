import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Productos } from './../catalogo.model';
import Swiper from 'swiper';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})
export class CatalogoComponent implements OnInit, AfterViewInit {

  piezas: Productos[] = [
    {
      id: '1',
      image: 'assets/images/01.jpg',
      title: 'Lapicero Zombie',
      price: 10,
      description: 'x'
    },
    {
      id: '2',
      image: 'assets/images/02.jpg',
      title: 'Gato Ying Yang',
      price: 10,
      description: 'x'
    },
    {
      id: '3',
      image: 'assets/images/03.jpg',
      title: 'Llavero a 2 Colores',
      price: 10,
      description: 'x'
    },
    {
      id: '4',
      image: 'assets/images/04.jpg',
      title: 'Batman',
      price: 10,
      description: 'x'
    },
    {
      id: '5',
      image: 'assets/images/05.jpg',
      title: 'Aros para Trixie',
      price: 10,
      description: 'x'
    },
    {
      id: '6',
      image: 'assets/images/06.jpg',
      title: 'Caja con Relieve',
      price: 10,
      description: 'x'
    },
    {
      id: '7',
      image: 'assets/images/07.jpg',
      title: 'Caja con Relieve',
      price: 10,
      description: 'x'
    },
    {
      id: '8',
      image: 'assets/images/08.jpg',
      title: 'Porta Celular Bart',
      price: 10,
      description: 'x'
    }, {
      id: '9',
      image: 'assets/images/09.jpg',
      title: 'Porta Celular Bart',
      price: 10,
      description: 'x'
    }, {
      id: '10',
      image: 'assets/images/10.jpg',
      title: 'Porta Celular Gato',
      price: 10,
      description: 'x'
    }, {
      id: '11',
      image: 'assets/images/11.jpg',
      title: 'Porta Celular Gato',
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
