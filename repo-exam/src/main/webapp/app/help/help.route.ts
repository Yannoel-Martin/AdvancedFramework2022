import { Route } from '@angular/router';

import { HelpComponent } from './help.component';

export const HELP_ROUTE: Route = {
  path: '',
  component: HelpComponent,
  data: {
    pageTitle: 'help.title',
  },
};
