import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-prime-dropdown',
  templateUrl: './prime-dropdown.component.html',
  styleUrls: ['./prime-dropdown.component.scss'],
})
export class PrimeDropdownComponent implements OnInit {
  groupForm: FormGroup;
  @Input() cities: any[];
  @Input() citiesSelection: any;
  @Output() selectedCity = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {
    this.groupForm = this.fb.group({
      selectedCities: ['', Validators.nullValidator],
    });
  }

  ngOnInit(): void {
    this.groupForm.get('selectedCities').setValue(this.citiesSelection);
  }

  changeCity(event) {
    this.selectedCity.emit(event.value);
  }
}
