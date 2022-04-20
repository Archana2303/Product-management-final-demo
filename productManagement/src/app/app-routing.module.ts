import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AddComponent } from './add/add.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DeleteComponent } from './delete/delete.component';
import { FetchComponent } from './fetch/fetch.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  {path : 'add-component', component: AddComponent},
  {path : 'update-component', component: UpdateComponent},
  {path : 'delete-component', component: DeleteComponent},
  {path : 'fetch-component', component: FetchComponent},
  {path : 'home-component', component: HomeComponent},
  {path : 'services-component', component: ServicesComponent},
  {path : 'aboutus-component', component: AboutusComponent},
  {path : 'contactus-component', component: ContactusComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponents= [AddComponent,DeleteComponent,UpdateComponent,FetchComponent,HomeComponent,ServicesComponent,AboutusComponent,ContactusComponent];