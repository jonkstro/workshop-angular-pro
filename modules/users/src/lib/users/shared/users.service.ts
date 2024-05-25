import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
@Injectable({
  providedIn: 'root',
})
export class UserService {
  // apiUrl = 'https://65009f9718c34dee0cd53786.mockapi.io/users';
  // pegar os dados da api fake
  readonly API_URL = 'http://localhost:3000/users';

  // injetando a dependencia do http no construtor
  constructor(private http: HttpClient) {}

  // método getUsers vai listar todos os users (Array de users)
  getUsers() {
    return this.http.get<User[]>(this.API_URL);
  }
  // método que vai retornar um user especifico
  getUserById(id: string) {
    return this.http.get<User>(`${this.API_URL}/${id}`);
  }

  // TODO: Adicionar outros métodos
}
