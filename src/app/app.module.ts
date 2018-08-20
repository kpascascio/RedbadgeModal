import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule} from '@angular/material/dialog';
import { MatButtonModule, MatInputModule, MatFormFieldModule } from '@angular/material';
import { AppComponent } from './app.component';
import { ModalboxComponent } from './components/modalbox/modalbox.component';
import { ModaltextComponent } from './components/modaltext/modaltext.component';
import { Modaltext2Component } from './components/modaltext2/modaltext2.component';
import { PieService } from './services/pie.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    ModalboxComponent, // this is the modal box
    ModaltextComponent, Modaltext2Component // this is the component that goes inside of the modal
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule
  ],
  providers: [
    PieService
  ],
  bootstrap: [AppComponent],
  entryComponents: [ModaltextComponent, Modaltext2Component],
  // You need to have the component that is the inside of the dialog in this property
})
export class AppModule { }
