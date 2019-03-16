import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Custom Modules
import { AppRoutingModule } from './routing/app-routing.module';


// All components
import { AppComponent } from './app.component';

// Style libs



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
