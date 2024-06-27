import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { NotesComponent } from './component/notes/notes.component';
import { LoginComponent } from './component/login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { authGuard }  from './guards/auth.guard';

const routes: Routes = [
   {path: "about" , component:AboutComponent , canActivate: [authGuard]},
   {path: "contact" , component:ContactComponent},
   {path: "home" , component:NotesComponent },
   {path: "login" , component:LoginComponent },
   {path: "logout" , component:LogoutComponent} 
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
