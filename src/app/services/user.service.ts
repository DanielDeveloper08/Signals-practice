import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { IUser, IUserResponse } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _http = inject(HttpClient);
  private baseUrl = 'https://reqres.in/api/users';

  public getUserById(idUser: number): Observable<IUser> {
    return this._http.get<IUserResponse>(`${this.baseUrl}/${idUser}`).pipe(
      map((response) => response.data)
    );
  }
}
