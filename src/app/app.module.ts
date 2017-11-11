import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { environment } from '../environments/environment.prod';
import { AngularFireModule} from 'angularfire2';
import { AngularFirestoreModule} from 'angularfire2/firestore';

//my Components
import { NavbarComponent } from './navbar/navbar.component';
import { GoteamappComponent } from './goteamapp/goteamapp.component';
import { TodoappComponent } from './todoapp/todoapp.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
// my Components

// NgPrime stuff
import { AccordionModule } from 'primeng/primeng';
import { PanelModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { RadioButtonModule } from 'primeng/primeng';
import { TabMenuModule, MenuModule} from 'primeng/primeng';
import { DataListModule } from 'primeng/primeng';
import { InputTextModule } from 'primeng/primeng';
import { InputTextareaModule } from 'primeng/primeng';
import {OverlayPanelModule} from 'primeng/primeng';
// NgPrime stuff

import { ItemService } from './todoapp/services/item.service';
import { AddItemComponent } from './todoapp/add-item/add-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    GoteamappComponent,
    TodoappComponent,
    ContactComponent,
    AddItemComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase, 'angularfs'),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    TabMenuModule,
    OverlayPanelModule,
    AccordionModule,
    InputTextareaModule,
    DataListModule,
    InputTextModule,
    PanelModule,
    MenuModule,
    ButtonModule,
    RadioButtonModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent },
      { path: '', component: HomeComponent },
      { path: 'goteamapp', component: GoteamappComponent },
      { path: 'contact', component: ContactComponent },
      { path: 'todoapp', component: TodoappComponent }
      // { path: 'profile/:username', component: ProfileComponent } for parameters
      // { path: '**', component: NotFoundComponent } wild-card catches all other routes and goes to NotFound
    ])
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})

export class AppModule { }
