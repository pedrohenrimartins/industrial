import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { CadastrarProduto } from './pages/cadastrar-produto/cadastrar-produto';
import { Login } from './pages/login/login';
import { Cadastro } from './pages/cadastro/cadastro';
import { Inventario } from './pages/inventario/inventario';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: Home },
    {path: 'cadastrar-produto', component: CadastrarProduto},
    {path: 'login', component: Login},
    {path: 'cadastro', component: Cadastro},
    {path: 'inventario', component: Inventario}
];
