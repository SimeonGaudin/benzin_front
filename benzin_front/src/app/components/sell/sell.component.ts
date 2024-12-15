import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.scss']
})
export class SellComponent {
  sellForm: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) {
    this.sellForm = this.fb.group({
      name: ['', [Validators.required]],
      picture: ['', [Validators.required]],
      price: ['', [Validators.required]],
      date: ['', [Validators.required]],
    });
  }

  onSubmit() {
    console.log(this.sellForm.value);
  }
}