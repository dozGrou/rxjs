import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {Ex1Component} from './ex1/ex1.component';
import {ColdObservableComponent} from './cold-observable/cold-observable.component';
import {HotObservableComponent} from './hot-observable/hot-observable.component';
import {HttpClientModule} from '@angular/common/http';
import {RealColdComponent} from './real-cold/real-cold.component';
import {WithLatestFromComponent} from './pipe/with-latest-from/with-latest-from.component';
import {PipeOrderComponent} from './pipe/pipe-order/pipe-order.component';
import {CasPratiqueComponent} from './cas-pratique/cas-pratique.component';
import {IifComponent} from './pipe/iif/iif.component';
import {UnsubscribeComponent} from './unsubscribe/unsubscribe.component';
import {CombineLatestComponent} from './combine-latest/combine-latest.component';
import {InputComponent} from './pipe/input/input.component';
import {MapComponent} from './pipe/map/map.component';
import {CatchErrorComponent} from './pipe/catch-error/catch-error.component';
import {MergemapComponent} from './pipe/mergemap/mergemap.component';
import {SwitchMapComponent} from './pipe/switch-map/switch-map.component';

@NgModule({
  declarations: [
    AppComponent,
    Ex1Component,
    ColdObservableComponent,
    HotObservableComponent,
    RealColdComponent,
    WithLatestFromComponent,
    PipeOrderComponent,
    CasPratiqueComponent,
    IifComponent,
    UnsubscribeComponent,
    CombineLatestComponent,
    InputComponent,
    MapComponent,
    CatchErrorComponent,
    MergemapComponent,
    SwitchMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
