import { Component } from '@angular/core';
import { Header } from '../../shared/header/header';
import { Footer } from '../../shared/footer/footer';

@Component({
  selector: 'app-carrinho',
  imports: [Header, Footer],
  templateUrl: './carrinho.html',
  styleUrl: './carrinho.css',
})
export class Carrinho {}
