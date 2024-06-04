import { CommonModule } from '@angular/common';
import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { IUser } from '../../interfaces/user.interface';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-info.component.html',
  styleUrl: './user-info.component.scss',
})
export class UserInfoComponent implements OnInit {
  private _userService = inject(UserService);

  public user = signal<IUser | undefined>(undefined);
  public idUser = signal<number>(1);
  public userWasFound = signal<boolean>(true);

  public fullName = computed<string | undefined>(() => {
    if (!this.user) return;
    return `${this.user()?.first_name} ${this.user()?.last_name}`;
  });

  ngOnInit(): void {
    this.loadUser(this.idUser());
  }

  loadUser(idUser: number) {
    if (idUser === 0) return;

    this.idUser.set(idUser);
    this.user.set(undefined);

    this._userService.getUserById(idUser).subscribe({
      next: (response: IUser) => {
        this.userWasFound.set(true);
        this.user.set(response);
      },
      error: () => {
        this.userWasFound.set(false);
        this.user.set(undefined);
      },
    });
  }
}
