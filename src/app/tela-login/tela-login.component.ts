import { Component, OnInit } from '@angular/core';
import { TelaLoginService } from './tela-login.service';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.css']
})
export class TelaLoginComponent implements OnInit {

  telaLogin: any[];

  constructor(private telaLoginService: TelaLoginService) { }

  ngOnInit(): void {
    this.telaLogin = this.telaLoginService.getTelaLogin();
  }

}
