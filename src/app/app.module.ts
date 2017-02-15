import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TakesData } from './components/takes-data/takes-data.component';
import { SafePipe } from './components/safepipe/safe-pipe.pipe'
import { UpperPipe } from './components/upper-case-pipe/upper-case.pipe';
import { ExampleService } from './components/example-service/example.service';
import { HighlightDirective } from './components/example-directive/highlight.directive';
import { ReversePipe } from './components/reversepipe/reverse.pipe';
import { TestPipeGenPipe } from './test-pipe-gen.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TakesData,
    SafePipe,
    HighlightDirective,
    ReversePipe,
    TestPipeGenPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ExampleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
