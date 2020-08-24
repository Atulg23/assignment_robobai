import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { AdUnit } from '../index/AdUnit';
import { AdunitService } from '../../adunit.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  adunit: any = {};
  angForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private adunitservice: AdunitService,
    private fb: FormBuilder) {
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

    updateAdUnit(prod_id, quantity, prod_name, cost_price, selling_price,) {
      this.route.params.subscribe(params => {
          this.adunitservice.updateAdUnit(prod_id, quantity, prod_name, cost_price, selling_price, params['id']);
          this.router.navigate(['index']);
      });
    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        this.adunitservice.editAdUnit(params['id']).subscribe(res => {
          this.adunit = res;
      });
    });
  }
}
