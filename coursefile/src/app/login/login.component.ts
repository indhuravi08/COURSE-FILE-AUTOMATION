import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginData = { email: '', password: '' };

  constructor(private http: HttpClient, private router: Router) {}

  onLogin() {
    this.http.post('http://localhost:5000/api/login', this.loginData).subscribe(
      (res: any) => {
        alert('Login successful!');
        this.router.navigate(['/dashboard']); // Redirect to dashboard
      },
      (err) => {
        alert('Invalid credentials! Please try again.');
        console.error(err);
      }
    );
  }
}
