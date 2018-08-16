import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ModaltextComponent } from '../modaltext/modaltext.component'; // we need to include the component here

@Component({
  selector: 'app-modalbox',
  templateUrl: './modalbox.component.html',
  styleUrls: ['./modalbox.component.css']
})
export class ModalboxComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() { }

  openDialog() {
    this.dialog.open(ModaltextComponent);
  }

}
