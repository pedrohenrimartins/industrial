export interface Produto{
    id?: number;
    nome: string;
    categoria: string;
    preco: number;
    estoque: number;
    descricao: string;
}

export interface Pessoa{
    id?: string;
    email: string,
    senha: string    
}