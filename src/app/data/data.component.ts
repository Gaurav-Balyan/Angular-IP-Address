import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss'],
})
export class DataComponent implements OnInit {
  cities: any[];
  city: any;
  cityCollection: string;

  constructor() {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
    ];
    this.city = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
    ];
  }

  showSelectedCity(selectedCities) {
    this.cityCollection = selectedCities;
  }

  ngOnInit(): void {
    this.cityCollection = this.city;
  }
}
