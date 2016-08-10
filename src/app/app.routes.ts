import {provideRouter, RouterConfig} from '@angular/router';
import {ManualOperationComponent} from './manual-operation/manual-operation.component';
import {OverviewComponent} from './overview/overview.component';

const routes: RouterConfig = [
    {
        path: 'manual-operation',
        component: ManualOperationComponent
    },
    {
        path: 'overview',
        component: OverviewComponent
    },
    {
        path: '',
        redirectTo: '/overview',
        pathMatch: 'full'
    }
]

export const appRouterProviders = [
    provideRouter(routes)
];