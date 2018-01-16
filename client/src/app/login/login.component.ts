import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent{

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    
  }

  ngDoCheck(){
    if(this.authService.authenticated){
      this.router.navigate(['/public'])
    }
  }

}
