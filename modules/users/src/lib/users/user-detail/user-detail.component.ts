import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../shared/users.service';
import { ActivatedRoute } from '@angular/router';
import { getParamsId } from './utils/get-params-id';
import { switchMap } from 'rxjs';

@Component({
  selector: 'lib-user-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss',
})
export class UserDetailComponent {
  // injeção das dependencias de serviços
  constructor(private userService: UserService) {}
  // vamos usar pipe para não usar subscribes dentro do componente direto
  // novamente, como é um Observable, vamos botar $ no final
  user$ = getParamsId().pipe(
    // switchMap é usado quando temos um Observable e queremos retornar outro Observable no map
    switchMap((id) => this.userService.getUserById(id))
  );

  // não vamos fazer subscribes dentro de outros igual está abaixo
  // ngOnInit(): void {
  //   this.activatedRoute.params.subscribe((params) => {
  //     this.userService.getUserById(params['id']).subscribe();
  //   });
  // }
}
