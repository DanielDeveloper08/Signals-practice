import { Routes } from '@angular/router';
import { LayoutSignalsComponent } from './layout/layout-signals/layout-signals.component';
import { CounterPageComponent } from './pages/counter-page/counter-page.component';
import { UserInfoComponent } from './pages/user-info/user-info.component';
import { PropertiesComponent } from './pages/properties/properties.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutSignalsComponent,
        children: [
            {
                path: 'counter',
                component: CounterPageComponent,
            },
            {
                path: 'user-info',
                component: UserInfoComponent
            },
            {
                path: 'properties',
                component: PropertiesComponent
            },
            {
                path: '**',
                redirectTo: 'counter'
            }

        ]
    }
];
