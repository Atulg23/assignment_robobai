import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { AdunitService } from '../../adunit.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  angForm: FormGroup;

  constructor(private adunitservice: AdunitService, private fb: FormBuilder) { 
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      prod_id: ['', Validators.required ],
      quantity: ['', Validators.required ],
      prod_name: ['', Validators.required ],
      cost_price: ['', Validators.required ],
      selling_price: ['', Validators.required ],
   });
  }

  addAdUnit(prod_id, quantity, prod_name, cost_price, selling_price,) {
    this.adunitservice.addAdUnit(prod_id, quantity, prod_name, cost_price, selling_price);
}
  ngOnInit() {
  }

}
