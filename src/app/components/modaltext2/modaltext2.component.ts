import { Component, OnInit, Inject } from '@angular/core';
import { PieService } from '../../services/pie.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material';
import { Pie } from '../../models/Pie';

@Component({
  selector: 'app-modaltext2',
  templateUrl: './modaltext2.component.html',
  styleUrls: ['./modaltext2.component.css']
})
export class Modaltext2Component implements OnInit {
  pieDetails: Pie;
  pieForm: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private ps: PieService, private fb: FormBuilder) { }

  ngOnInit() {
    this.ps.getPieByName(this.data).subscribe((pie: Pie) => {
      this.pieDetails = pie;
      return this.createForm();
    });

  }

  createForm() {
    this.pieForm = this.fb.group({
      id: new FormControl(this.pieDetails.id),
      name_of_pie: new FormControl(this.pieDetails.name_of_pie),
      base_of_pie: new FormControl(this.pieDetails.base_of_pie)
    });
  }

  submitForm() {
    this.ps.updatePie(this.pieForm.value).subscribe(pie => {
      return pie;
    });
  }

}
