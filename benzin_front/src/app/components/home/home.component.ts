import { Component } from '@angular/core';
import { cars } from '../../data/cars';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  user: any = null;
  cars = cars;
  searchText: string = '';
  minPrice: number = 0;
  maxPrice: number = 600000;
  selectedDate: string = '';

  constructor() { }

  getDaysLeft(endDate: string): number {
    const currentDate = new Date();
    const end = new Date(endDate);
    const timeDiff = end.getTime() - currentDate.getTime();
    const daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return daysLeft;
  }

  filteredCars() {
    return this.cars.filter(car => {
      const matchesName = car.name.toLowerCase().includes(this.searchText.toLowerCase());
      const matchesPrice = car.price >= this.minPrice && car.price <= this.maxPrice;
      const matchesDate = this.selectedDate ? new Date(car.date) <= new Date(this.selectedDate) : true;
      return matchesName && matchesPrice && matchesDate;
    });
  }

  updateMinPrice() {
    if (this.minPrice > this.maxPrice) {
      this.minPrice = this.maxPrice;
    }
  }

  updateMaxPrice() {
    if (this.maxPrice < this.minPrice) {
      this.maxPrice = this.minPrice;
    }
  }
}