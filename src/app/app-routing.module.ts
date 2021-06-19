import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./components/home/home.component";
import {UserComponent} from "./components/user/user.component";
import {CompaniesComponent} from "./components/companies/companies.component";
import {AuthGuard} from "./auth/auth.guard";
import {PartnersComponent} from "./components/partners/partners.component";

const routes: Routes = [
  {path: 'profile', component: UserComponent, canActivate: [AuthGuard]},
  {path: 'feed', component: CompaniesComponent, canActivate: [AuthGuard]},
  {path: 'partners', component: PartnersComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
