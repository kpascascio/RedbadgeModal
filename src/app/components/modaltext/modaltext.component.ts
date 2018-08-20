import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { PieService } from '../../services/pie.service';

@Component({
  selector: 'app-modaltext',
  templateUrl: './modaltext.component.html',
  styleUrls: ['./modaltext.component.css']
})
export class ModaltextComponent implements OnInit {
  pie: Object;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ps: PieService
  ) { }

  ngOnInit() {
    this.ps.getPieByName(this.data).subscribe(pie => {
      return this.pie = pie;
    });
  }
}
