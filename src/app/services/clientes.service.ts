import { Injectable } from '@angular/core';


interface Cliente {
  nome: string
  sobrenome: string
  telefone: string
  id: number
  email: string
  cpf: string
}

@Injectable({
  providedIn: 'root'// faz referencia ao AppModule
})
export class ClientesService {

  private clientes: Cliente[] = [
    {
      nome: 'Rodrigo',
      sobrenome: 'Araujo',
      telefone: '97778888',
      id: 1,
      email: 'araujo@r.com',
      cpf: '1111111111'
    },
    {
      nome: 'Maria',
      sobrenome: 'Araujo',
      telefone: '97778888',
      email: 'araujo@r.com',
      id: 2,
      cpf: '1111111111'
    },
    {
      nome: 'Paulo',
      sobrenome: 'Araujo',
      telefone: '97778888',
      email: 'araujo@r.com',
      id: 3,
      cpf: '1111111111'
    }
  ]

  constructor() { }

  listarClientes(): Cliente[] {
    //logica da api
    return this.clientes
  }

  listarClientePeloId(id: number): Cliente | undefined {
    //find(()=>{}) precisa de uma função para funcionar, e ele espera um boolean
    const clienteEncontrado = this.clientes.find((c) => {
      return c.id == id
    })

    return clienteEncontrado
  }
}
           