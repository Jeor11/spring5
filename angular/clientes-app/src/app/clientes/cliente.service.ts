import { Injectable } from '@angular/core';
import { CLIENTES } from './clientes.json';
import { Cliente } from './clientes';
import {of, Observable} from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class ClienteService {

constructor() { }

getClientes(): Observable<Cliente[]> {
  return of(CLIENTES);
};
}
