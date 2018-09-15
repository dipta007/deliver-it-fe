import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FlexLayoutModule} from "@angular/flex-layout";

@NgModule({
  exports: [
    CdkTableModule,
    CdkTreeModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
  ],
  declarations: []
})
export class DemoMaterialModule {}

import {LogInRestService} from "./login/login.rest.service"
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { RegisterRestService } from './register/register.rest.service';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { AgmCoreModule } from '@agm/core';
import { TravelPlanComponent } from './travel-plan/travel-plan.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { PickUpComponent } from './pick-up/pick-up.component'
import { CookieService } from 'ngx-cookie-service';
import { DropUpComponent } from './drop-up/drop-up.component';
import { DeliveryRequestComponent } from './delivery-request/delivery-request.component';
import { AreYouSureComponent } from './are-you-sure/are-you-sure.component';
import { NewProductComponent } from './new-product/new-product.component';
import { DeliveriesComponent } from './deliveries/deliveries.component';
import { SideNavAdminComponent } from './side-nav-admin/side-nav-admin.component';
import { DeliveryApprovalComponent } from './delivery-approval/delivery-approval.component';

const appRoutes: Routes = [
  { path: '', component: StartScreenComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'customer', component: SideNavComponent },
  { path: 'admin', component: SideNavAdminComponent },
  { path: 'user/:id', component: ProfilePageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    StartScreenComponent,
    TravelPlanComponent,
    SideNavComponent,
    ProfilePageComponent,
    PickUpComponent,
    DropUpComponent,
    DeliveryRequestComponent,
    AreYouSureComponent,
    NewProductComponent,
    DeliveriesComponent,
    SideNavAdminComponent,
    DeliveryApprovalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCxsTCwvW4UYtD2uFavPRgIf0vgY_-jw2E',
      // apiKey: 'AIzaSyAeZrO8_5S397GxAsF7kCqgh2zEv0OUG4c',
      libraries: ["places"]
    }),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  entryComponents: [AppComponent, AreYouSureComponent],
  bootstrap: [AppComponent],
  providers: [
    LogInRestService,
    RegisterRestService,
    CookieService
  ]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);