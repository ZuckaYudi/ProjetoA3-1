import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { TelaCadastroComponent } from './tela-cadastro/tela-cadastro.component';
import { TelaLoginService } from './tela-login/tela-login.service';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{ path: "punjab", component: TelaCadastroComponent }];

@NgModule({
  declarations: [
    AppComponent,
    TelaLoginComponent,
    TelaCadastroComponent,
    LoginComponent,
    Login
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [TelaLoginService],
  bootstrap: [AppComponent],
})
export class AppModule { }
