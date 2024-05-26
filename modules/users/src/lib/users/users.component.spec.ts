import { mockUsers } from './mocks/user.mock';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UsersComponent } from './users.component';
import { UserService } from './shared/users.service';
import { of } from 'rxjs';
import { provideRouter } from '@angular/router';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersComponent],
      // adicionando as dependencias
      providers: [
        // pra evitar que dê erros, vamos passar rotas vazias
        provideRouter([]),
        {
          // aqui estamos dizendo que quando chamarmos userService.getUsers deverá retornar a lista mockada ao invés da lista do http
          provide: UserService,
          useValue: {
            // o of é pra ele virar Observable
            getUsers: () => of(mockUsers),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should list users', () => {
    const users: HTMLElement[] = fixture.nativeElement.querySelectorAll('li');
    expect(users.length).toBe(2);

    // testando se o nome que tá no html é o mesmo nome que tá mockado em cada usuario retornado no mock
    users.forEach((user, index) => {
      expect(user.textContent).toBe(mockUsers[index].name);
    });
  });
});
