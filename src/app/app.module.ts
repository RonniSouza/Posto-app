import { AuthService } from './login/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { SobreComponent } from './sobre/sobre.component';
import { MinhaContaComponent } from './minha-conta/minha-conta.component';
import { MeuPostoComponent } from './minha-conta/meu-posto/meu-posto.component';
import { PrecoComponent } from './minha-conta/preco/preco.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    SobreComponent,
    MinhaContaComponent,
    MeuPostoComponent,
    PrecoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
