import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

//my Components
import { NavbarComponent } from './navbar/navbar.component';
import { GoteamappComponent } from './goteamapp/goteamapp.component';
import { TodoappComponent } from './todoapp/todoapp.component';
import { AppComponent } from './app.component';
import { ColtsComponent } from './goteamapp/colts/colts.component';
import { PacersComponent } from './goteamapp/pacers/pacers.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
// my Components

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
    ColtsComponent,
    PacersComponent,
    HomeComponent,
    NavbarComponent,
    GoteamappComponent,
    TodoappComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    TabMenuModule,
    AccordionModule,
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
      // { path: 'pacers', component: PacersComponent},
      // { path: 'colts', component: ColtsComponent }
      // { path: 'profile/:username', component: ProfileComponent } for parameters
      // { path: '**', component: NotFoundComponent } wild-card catches all other routes and goes to NotFound
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
