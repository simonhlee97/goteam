import { Routes, RouterModule } from "@angular/router";
import { ColtsComponent } from "../colts/colts.component";
import { PacersComponent } from "../pacers/pacers.component";




export const routes = [

    { path: 'colts', component: ColtsComponent },
    { path: 'pacers', component: PacersComponent }
   
];