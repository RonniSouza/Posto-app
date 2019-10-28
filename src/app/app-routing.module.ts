import { PrecoComponent } from './minha-conta/preco/preco.component';
import { MeuPostoComponent } from './minha-conta/meu-posto/meu-posto.component';
import { MinhaContaComponent } from './minha-conta/minha-conta.component';
import { SobreComponent } from './sobre/sobre.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent},
  { path: 'sobre', component: SobreComponent},
  { path: 'minhaconta', component: MinhaContaComponent},
  { path: 'meuposto', component: MeuPostoComponent},
  { path: 'precos', component: PrecoComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
