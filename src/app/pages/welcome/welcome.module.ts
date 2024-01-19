import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';

import { NzButtonModule } from 'ng-zorro-antd/button';

import { NzStepsModule } from 'ng-zorro-antd/steps';


@NgModule({
  imports: [WelcomeRoutingModule,
            NzButtonModule,
            NzStepsModule],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
