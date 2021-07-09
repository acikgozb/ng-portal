//libraries
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//components
import { AppComponent } from './app.component';
import { PortalComponent } from './portal/portal.component';
import { ModalComponent } from './modal/modal.component';
//directives
import { PortalDirective } from './portal/directives/portal.directive';

@NgModule({
  declarations: [
    AppComponent,
    PortalComponent,
    ModalComponent,
    PortalDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
