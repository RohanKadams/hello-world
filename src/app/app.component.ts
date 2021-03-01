import { Component, LOCALE_ID, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'hello-world';
  public submit(f){
    console.log(" = ",f);
  }
  ngOnInit(){
    localStorage.setItem("token",'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJhZG1pbiI6dHJ1ZSwicHJvZmlsZSI6ZmFsc2V9.wV_thg4T9GCvrjG2izBbC6c9Y6P6jGAIRoRa_d6oUTw')
  }
}
