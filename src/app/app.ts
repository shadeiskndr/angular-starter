import { Component } from '@angular/core';
import { Dialog1Component } from './ng-material-tw/free-dialogs/dialog-1/dialog-1.component';
import { LoginEmailPasswordComponent } from './ng-material-tw/free-authentication/login-email-password/login-email-password.component';
import { OnboardingFeed1Component } from './ng-material-tw/free-lists/onboarding-feed-1/onboarding-feed-1.component';
import { SimpleWithIconsComponent } from './ng-material-tw/free-lists/simple-with-icons/simple-with-icons.component';
import { Badge1Component } from './ng-material-tw/free-badges/badge-1/badge-1.component';
import { GridList1Component } from './ng-material-tw/free-grid-lists/grid-list-1/grid-list-1.component';
import { PageShell1Component } from './ng-material-tw/free-page-shells/page-shell-1/page-shell-1.component';
import { PageHeading1Component } from './ng-material-tw/free-page-headings/page-heading-1/page-heading-1.component';
import { NavWithPageHeaderComponent } from './ng-material-tw/free-stacked-layouts/nav-with-page-header/nav-with-page-header.component';
import { FullWidthThreeColumnComponent } from './ng-material-tw/free-multi-column/full-width-three-column/full-width-three-column.component';
import { SimpleStackedListComponent } from './ng-material-tw/free-stacked-lists/simple';
import { AreaChart1Component } from './ng-material-tw/free-area-charts/area-chart-1/area-chart-1.component';
import { DonutChart1Component } from './ng-material-tw/free-donut-charts/donut-chart-1/donut-chart-1.component';
import { BarChart1Component } from './ng-material-tw/free-bar-charts/bar-chart-1/bar-chart-1.component';
import { LineChart1Component } from './ng-material-tw/free-line-charts/line-chart-1/line-chart-1.component';
@Component({
  selector: 'app-root',
  imports: [
    Dialog1Component,
    LoginEmailPasswordComponent,
    OnboardingFeed1Component,
    SimpleWithIconsComponent,
    Badge1Component,
    GridList1Component,
    PageShell1Component,
    NavWithPageHeaderComponent,
    PageHeading1Component,
    FullWidthThreeColumnComponent,
    SimpleStackedListComponent,
    AreaChart1Component,
    BarChart1Component,
    DonutChart1Component,
    LineChart1Component,
  ],
  templateUrl: './app.html',
})
export class App {
  title = 'angular-starter';
}
