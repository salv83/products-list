import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SliderType } from 'igniteui-angular';
import { PriceRange } from '../model/price-range';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  @Output() selectedFilterChanged = new EventEmitter<any>();

  constructor() { }

  filter: string;
  selectedFilter: string;
  form: FormGroup;
  filtervalues = {
    'gfpiping': 1714,
    'coriolis': 274,
    'chemapp': 424
  };
  currentPriceSliderValue: number = 0;
  lowerprice: number = 0;
  upperprice: number = 6500;
  selectionValues = {
    'gfpiping': null,
    'coriolis': null,
    'chemapp': null,
    'pricelower': null,
    'priceupper': null,
    'score': null,
    'name': null,
    'price': null,
  };


  public sliderType = SliderType;
  public priceRange: PriceRange = new PriceRange(0, 6500);

  somethingChanged(formvalue: any) {
    this.formcheck(formvalue);
    this.selectedFilterChanged.emit(this.selectionValues);
  }

  ngOnInit() {
    this.form = new FormGroup({
      gfpiping: new FormControl(''),
      coriolis: new FormControl(''),
      chemapp: new FormControl(''),
      orderSelect: new FormControl(''),
      price: new FormControl('')
    });
  }

  getPriceRange(event) {
    this.lowerprice = this.form.value.price.lower;
    this.upperprice = this.form.value.price.upper;
    this.formcheck(this.form.value);
    this.selectedFilterChanged.emit(this.selectionValues);
  }

  formcheck(formvalue) {
    if (formvalue.gfpiping == true) {
      this.selectionValues.gfpiping = this.filtervalues.gfpiping;
    } else {
      this.selectionValues.gfpiping = null;
    }
    if (formvalue.coriolis == true) {
      this.selectionValues.coriolis = this.filtervalues.coriolis;
    } else {
      this.selectionValues.coriolis = null;
    }
    if (formvalue.chemapp == true) {
      this.selectionValues.chemapp = this.filtervalues.chemapp;
    } else {
      this.selectionValues.chemapp = null;
    }
    if (formvalue.orderSelect == "score") {
      this.selectionValues.score = true;
    } else {
      this.selectionValues.score = null;
    }
    if (formvalue.orderSelect == "price") {
      this.selectionValues.price = true;
    } else {
      this.selectionValues.price = null;
    }
    if (formvalue.orderSelect == "name") {
      this.selectionValues.name = true;
    } else {
      this.selectionValues.name = null;
    }
    this.selectionValues.pricelower = this.lowerprice;
    this.selectionValues.priceupper = this.upperprice;
  }
}