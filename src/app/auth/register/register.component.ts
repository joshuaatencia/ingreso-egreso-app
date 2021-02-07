import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public authServices: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(value: any): void {
    console.log(value);
    this.authServices.crearUsuario(value['correo'], value['contrasena'], value['nombre'])
  }

}
