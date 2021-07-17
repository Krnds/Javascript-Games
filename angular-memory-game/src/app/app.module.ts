import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { GameCardAnimalComponent } from './game-card-animal/game-card-animal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RestartDialogComponent } from './restart-dialog/restart-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { GameCardPlantComponent } from './game-card-plant/game-card-plant.component';

@NgModule({
  declarations: [
    AppComponent,
    GameCardAnimalComponent,
    RestartDialogComponent,
    GameCardPlantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'game-card-animal', component: GameCardAnimalComponent},
      {path: 'game-card-plant', component: GameCardPlantComponent},
      // {path: '', component: AppComponent}
    ]),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }