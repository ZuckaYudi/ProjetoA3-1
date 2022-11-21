import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { TelaCadastroComponent } from './tela-cadastro/tela-cadastro.component';

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
    AppRoutingModule
  ],
  providers: [TelaLoginService],
  bootstrap: [AppComponent],
})
export class AppModule { }
