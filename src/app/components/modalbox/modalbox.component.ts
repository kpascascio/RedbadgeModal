import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ModaltextComponent } from '../modaltext/modaltext.component'; // we need to include the component here
import { Modaltext2Component } from '../modaltext2/modaltext2.component'; // other text box for dialog 2
import { PieService } from '../../services/pie.service';

@Component({
  selector: 'app-modalbox',
  templateUrl: './modalbox.component.html',
  styleUrls: ['./modalbox.component.css']
})
export class ModalboxComponent implements OnInit {

  pieArr: Array<Object>;

  constructor(public dialog: MatDialog, private ps: PieService) { }

  ngOnInit() {
    this.ps.getPies().subscribe((pies: Array<Object>) => {
      return this.pieArr = pies;
    });
   }

  pieDetails(name) {
    this.dialog.open(ModaltextComponent, {
      data: name
    });
  }

  openBox2Dialog() {
    this.dialog.open(Modaltext2Component);
  }

}
