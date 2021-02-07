import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import swal from 'sweetalert2'
import * as firebase from 'firebase';
import { map } from 'rxjs/operators'
import { User } from '../models/user.model';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth,
    private router: Router,
    private angularFireStore: AngularFirestore

  ) { }

  crearUsuario(correo: string, contrasena: string, nombre?: string) {
    this.auth.auth.createUserWithEmailAndPassword(correo, contrasena).then(resp => {

      const user: User = {
        nombre: nombre,
        email: resp.user.email,
        uid: resp.user.uid
      };


      this.angularFireStore.doc(user.uid + '/usuario').set(user).then(resp => {
        this.router.navigate(['/']);
      }).catch(err => {
        console.log(err);
      })


    }).catch(error => {
      console.log(error);
      swal.fire('Error al intentar registrarse', '', 'error');
    })
  }

  login(correo: string, contrasena: string): void {
    this.auth.auth.signInWithEmailAndPassword(correo, contrasena).then(data => {
      this.router.navigate(['/']);
    }).catch(err => {
      swal.fire('Error al intentar loguearse', 'porfavor intenta denuevo', 'error');
    });
  }

  logout(): void {
    this.auth.auth.signOut();
    this.router.navigate(['/login']);
  }

  initAuthListener() {
    return this.auth.authState.subscribe((fbUser: firebase.User) => {
      console.log(fbUser);
    });
  }

  isThereAuth() {
    return this.auth.authState
      .pipe(
        map(fbUser => {
          console.log(fbUser);
          if (fbUser == null) {
            this.router.navigate(['/login']);
          }

          return fbUser != null;
        })
      );
  }

}
