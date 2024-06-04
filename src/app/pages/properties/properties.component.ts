import { CommonModule } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';
import { IUser } from '../../interfaces/user.interface';

@Component({
  selector: 'app-properties',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './properties.component.html',
  styleUrl: './properties.component.scss',
})
export class PropertiesComponent {
  public counter = signal( 10 );

  public user = signal<IUser>(
    {
      id: 1,
      email: "george.bluth@reqres.in",
      first_name: 'George',
      last_name: "Bluth",
      avatar: "https://reqres.in/img/faces/1-image.jpg"
    }
  );


  public changeUserEffect = effect(()=>{
    console.log( `${ this.user().first_name } - ${ this.counter() } ` );
  })

  increaseBy( value: number ) {
    this.counter.update( current => current + value );
  }


  public fullName = computed<string | undefined>(() => {
    if (!this.user) return;
    return `${this.user().first_name} ${this.user()?.last_name}`;
  });

  onFieldUpdate(field: keyof IUser, value:string){

     this.user.update( current => ({
      ...current,
      [field]: value
    }))

    // this.user.update(current =>{
    //     switch( field ){
    //       case 'email':
    //         current.email = value; break;
    //       case 'first_name':
    //         current.first_name = value; break;
    //       case 'last_name':
    //         current.last_name = value; break;
    //       case 'avatar':
    //         current.avatar = value; break;
    //       case 'id':
    //         current.id = Number(value); break;
    //     }

    //     return structuredClone(current);
    // })
  }
}
