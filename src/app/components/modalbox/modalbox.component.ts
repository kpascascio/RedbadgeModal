import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ModaltextComponent } from '../modaltext/modaltext.component'; // we need to include the component here
import { Modaltext2Component } from '../modaltext2/modaltext2.component'; // other text box for dialog 2

@Component({
  selector: 'app-modalbox',
  templateUrl: './modalbox.component.html',
  styleUrls: ['./modalbox.component.css']
})
export class ModalboxComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() { }

  openBox1Dialog() {
    this.dialog.open(ModaltextComponent);
  }

  openBox2Dialog() {
    this.dialog.open(Modaltext2Component);
  }

}
