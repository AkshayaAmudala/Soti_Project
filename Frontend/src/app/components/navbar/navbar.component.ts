import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService} from 'src/app/services/auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isLoggedIn: any;

  constructor(private authService: AuthService, private router: Router){
    this.isLoggedIn = this.authService.checkToken()
  }

  onLogin(){
this.router.navigateByUrl('login')
  }

  onLogout(){
    this.authService.logout();
    this.router.navigateByUrl('login')
  }
}
