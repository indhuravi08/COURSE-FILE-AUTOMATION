import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupData = { name: '', email: '', password: '' };

  constructor(private http: HttpClient, private router: Router) {}

  onSignup() {
    this.http.post('http://localhost:5000/api/signup', this.signupData).subscribe(
      (res: any) => {
        alert('Signup successful! You can now log in.');
        this.router.navigate(['/login']); // Redirect to login page
      },
      (err) => {
        alert('Signup failed! Please try again.');
        console.error(err);
      }
    );
  }
}
