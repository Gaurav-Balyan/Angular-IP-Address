import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-prime-dropdown',
  templateUrl: './prime-dropdown.component.html',
  styleUrls: ['./prime-dropdown.component.scss'],
})
export class PrimeDropdownComponent implements OnInit {
  @Input() cities: any[];
  @Input() city: any;
  @Output() selectedCity = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  changeCity() {
    this.selectedCity.emit(this.city);
  }
}
