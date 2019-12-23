import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent }, 
 ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    FormsModule, ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
