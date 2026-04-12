import { Component } from '@angular/core';
import { HeaderAdmin } from '../../shared/header-admin/header-admin';
import { MenuAdminInventario } from '../../shared/menu-admin-inventario/menu-admin-inventario';

@Component({
  selector: 'app-inventario',
  imports: [HeaderAdmin, MenuAdminInventario],
  templateUrl: './inventario.html',
  styleUrl: './inventario.css',
})
export class Inventario {}
