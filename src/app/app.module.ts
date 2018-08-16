import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material';
import { AppComponent } from './app.component';
import { ModalboxComponent } from './components/modalbox/modalbox.component';
import { ModaltextComponent } from './components/modaltext/modaltext.component';



@NgModule({
  declarations: [
    AppComponent,
    ModalboxComponent, // this is the modal box
    ModaltextComponent // this is the component that goes inside of the modal
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ModaltextComponent] // You need to have the component that is the inside of the dialog in this property
})
export class AppModule { }
