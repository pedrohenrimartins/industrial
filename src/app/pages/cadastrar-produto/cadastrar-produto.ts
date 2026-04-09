import { Component } from '@angular/core';
import { MenuAdmin } from '../../shared/menu-admin/menu-admin';
import { HeaderAdmin } from '../../shared/header-admin/header-admin';

@Component({
  selector: 'app-cadastrar-produto',
  imports: [MenuAdmin, HeaderAdmin],
  templateUrl: './cadastrar-produto.html',
  styleUrl: './cadastrar-produto.css',
})
export class CadastrarProduto {}
