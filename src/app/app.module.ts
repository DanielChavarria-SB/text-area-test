import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MiaChatBurbleModule } from './components/mia-chat-burble/mia-chat-burble.module';
import { ChatInputModule } from './components/chat-input/chat-input.module';
import { RealestateCardModule } from './components/realestate-card/realestate-card.module';
import { ContactCardModule } from './components/contact-card/contact-card.module';
import { HttpClientModule } from '@angular/common/http';
import { MiaSelectionModule } from './components/mia-selection/mia-selection.module';
import { OptionsCardsModule } from './components/options-cards/options-cards.module';
import { MatSliderModule } from '@angular/material/slider';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export function playerFactory() {
  return player;
}


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MiaChatBurbleModule,
    ChatInputModule,
    RealestateCardModule,
    ContactCardModule,
    HttpClientModule,
    MiaSelectionModule,
    OptionsCardsModule,
    MatSliderModule,
    ScrollingModule,
    LottieModule.forRoot({ player: playerFactory }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
