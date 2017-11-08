import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
//import { ColtsComponent } from './colts/colts.component';
//import { PacersComponent } from 'app/goteamapp/pacers/pacers.component';
import { HomeComponent } from './home/home.component';

import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { GoteamappComponent } from './goteamapp/goteamapp.component';
import { TodoappComponent } from './todoapp/todoapp.component';

// NgPrime stuff
import { AccordionModule } from 'primeng/primeng';
import { PanelModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { RadioButtonModule } from 'primeng/primeng';
import { TabMenuModule, MenuModule} from 'primeng/primeng';

// NgPrime stuff


@NgModule({
  declarations: [
    AppComponent,
    //ColtsComponent,
    //PacersComponent,
    HomeComponent,
    NavbarComponent,
    GoteamappComponent,
    TodoappComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    TabMenuModule,
    AccordionModule,
    PanelModule,
    MenuModule,
    ButtonModule,
    RadioButtonModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'goteamapp', component: GoteamappComponent },
      { path: 'todoapp', component: TodoappComponent }
      //{ path: 'pacers', component: PacersComponent},
      //{ path: 'colts', component: ColtsComponent }
      // { path: 'profile/:username', component: ProfileComponent } for parameters
      // { path: '**', component: NotFoundComponent } wild-card catches all other routes and goes to NotFound
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
