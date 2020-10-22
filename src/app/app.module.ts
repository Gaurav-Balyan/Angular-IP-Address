import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { MultiSelectModule } from 'primeng/multiselect';

import { AppComponent } from './app.component';
import { DataComponent } from './data/data.component';
import { PrimeDropdownComponent } from './prime-dropdown/prime-dropdown.component';

@NgModule({
  declarations: [AppComponent, DataComponent, PrimeDropdownComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    DropdownModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MultiSelectModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
