import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  name: string = "";
  age: number | null = null;
  errorMessage: string = "";
  successMessage: string = "";

  constructor() {}

  //funciones del formulario
  onSubmit(): void{
    this.onValidate();
    if(!this.errorMessage){
      this.successMessage = "Formulario Validado correctamente";
    }
  }
  onValidate(): void{
    if(!this.name || this.name.trim() === ""){
      this.errorMessage = "El nombre no puede estar vacio";
    }
    else if(!this.age || this.age <= 13){
      this.errorMessage = "La edad debe ser mayor a 13 años";
    }
    else{
      this.errorMessage = "";
    }
  }

}
