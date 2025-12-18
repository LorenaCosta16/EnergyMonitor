import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; 
import { Sidebar } from '../sidebar/sidebar';


@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, Sidebar], 
  templateUrl: './main-layout.html',
  styleUrls: ['./main-layout.css']
})
export class MainLayoutComponent { 

}
