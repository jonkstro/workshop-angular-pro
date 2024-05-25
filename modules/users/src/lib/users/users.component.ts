import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './shared/users.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'lib-users',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
  // pra evitar usar subscribes vamos usar a variavel abaixo recebendo o observable
  // é convenção botar $ no final se for um observable
  users$ = this.userService.getUsers();

  constructor(private userService: UserService) {}

  // ngOnInit(): void {
  //   // precisa do subscribe pois a chamada http retorna um Observable de users
  //   this.userService.getUsers().subscribe((users) => {
  //     console.log(users);
  //   });
  // }
}
