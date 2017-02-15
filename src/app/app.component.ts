import { Component, OnInit } from '@angular/core';
import { ExampleService } from "./components/example-service/example.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ ExampleService ]
})
export class AppComponent implements OnInit {

	colorIsActive: boolean;
    channels: string;

    constructor(private exampleService: ExampleService) { }

    ngOnInit(): void{
      this.channels = this.exampleService.getData();
    }

}
