import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {Ex1Component} from './ex1/ex1.component';
import {ColdObservableComponent} from './cold-observable/cold-observable.component';
import {HotObservableComponent} from './hot-observable/hot-observable.component';
import {RealColdComponent} from './real-cold/real-cold.component';
import {IifComponent} from './pipe/iif/iif.component';
import {UnsubscribeComponent} from './unsubscribe/unsubscribe.component';
import {WithLatestFromComponent} from './pipe/with-latest-from/with-latest-from.component';
import {PipeOrderComponent} from './pipe/pipe-order/pipe-order.component';
import {InputComponent} from './pipe/input/input.component';
import {CombineLatestComponent} from './combine-latest/combine-latest.component';
import {MergemapComponent} from './pipe/mergemap/mergemap.component';
import {SwitchMapComponent} from './pipe/switch-map/switch-map.component';

const routes: Routes = [{
  path: 'ex1',
  component: Ex1Component,
}, {
  path: 'cold',
  component: ColdObservableComponent,
}, {
  path: 'hot',
  component: HotObservableComponent,
}, {
  path: 'real-cold',
  component: RealColdComponent,
}, {
  path: 'pipe/iif',
  component: IifComponent,
}, {
  path: 'pipe/withLatestFrom',
  component: WithLatestFromComponent,
}, {
  path: 'pipe/pipe-order',
  component: PipeOrderComponent,
}, {
  path: 'pipe/switchMap',
  component: SwitchMapComponent,
}, {
  path: 'pipe/mergeMap',
  component: MergemapComponent,
}, {
  path: 'pipe/combineLatest',
  component: CombineLatestComponent,
}, {
  path: 'unsubscribe',
  component: UnsubscribeComponent,
}, {
  path: 'search',
  component: InputComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
