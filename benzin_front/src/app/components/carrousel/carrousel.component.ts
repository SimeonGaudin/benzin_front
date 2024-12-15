import { Component, OnInit, OnDestroy } from '@angular/core';
import { cars } from '../../data/cars';

@Component({
  selector: 'carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.scss']
})
export class CarrouselComponent implements OnInit, OnDestroy {
  slideIndex: number = 0;
  cars = cars;
  interval: any;

  constructor() { }

  ngOnInit(): void {
    this.showSlide(this.slideIndex);
    this.interval = setInterval(() => {
      this.nextSlide();
    }, 3000);
  }

  ngOnDestroy(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  showSlide(index: number) {
    const slides = document.getElementsByClassName('carousel-item') as HTMLCollectionOf<HTMLElement>;
    if (index >= slides.length) {
      this.slideIndex = 0;
    } else if (index < 0) {
      this.slideIndex = slides.length - 1;
    } else {
      this.slideIndex = index;
    }
    const offset = -this.slideIndex * 100;
    const carouselInner = document.querySelector('.carousel-inner') as HTMLElement;
    carouselInner.style.transform = `translateX(${offset}%)`;
  }

  nextSlide() {
    this.showSlide(this.slideIndex + 1);
  }

  prevSlide() {
    this.showSlide(this.slideIndex - 1);
  }

  getDaysLeft(endDate: string): number {
    const currentDate = new Date();
    const end = new Date(endDate);
    const timeDiff = end.getTime() - currentDate.getTime();
    const daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return daysLeft;
  }
}