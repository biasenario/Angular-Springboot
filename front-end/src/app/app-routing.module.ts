import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PessoaListComponent } from './pessoa-list/pessoa-list.component';
import { PessoaCreateComponent } from './pessoa-create/pessoa-create.component';
import { PessoaDetailsComponent } from './pessoa-details/pessoa-details.component';


const routes: Routes = [
  { path: '', redirectTo: '/pessoas', pathMatch: 'full' },
  { path: 'pessoas', component: PessoaListComponent  },
  { path: 'add', component: PessoaCreateComponent },
  { path: 'details/:id', component: PessoaDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
