import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'app/shared/shared.module';
import { HelpComponent } from './help.component';
import { HELP_ROUTE } from "./help.route";

@NgModule({
  imports: [SharedModule, RouterModule.forChild([HELP_ROUTE])],
  declarations: [HelpComponent],
})
export class HelpModule {}
