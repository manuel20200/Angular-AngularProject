import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    //RecipesModule,          It is imported in lazy mode app-routing.module
    //ShoppingListModule,     It is imported in lazy mode app-routing.module
    SharedModule,
    CoreModule,
    //AuthModule              It is imported in lazy mode app-routing.module
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
