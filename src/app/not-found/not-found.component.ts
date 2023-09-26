import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css'],
  providers:[HeaderComponent]
})
export class NotFoundComponent {
@Input() visible:boolean = false;
@Input() notFoundMessage:string = "Nothing Found!";
@Input() resetLinkText:string = "Reset";
@Input() resetLinkRoute:string="/shop";

constructor(private headerComponent:HeaderComponent) { 


}
public changeNotifToGray(): void {
  this.headerComponent.removeButtonNotif();
}




}
