import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID} from "@angular/core";
//import '@angular/common/locales/global/ru';
import {registerLocaleData} from "@angular/common";
import localeRu from '@angular/common/locales/ru';

registerLocaleData(localeRu, 'ru');

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorComponent } from './components/error/error.component';
import { RecipesListComponent } from './components/recipes-list/recipes-list.component';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';

import { AccessDeniedComponent } from './components/access-denied/access-denied.component';
import { AuthorizationComponent } from './components/authorization/authorization.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import {FormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import {UserService} from "./services/user.service";
import {AuthInterceptor} from "./interceptors/auth-interceptor.service";

import {RecipesService} from "./services/recipes.service";
import { ToastrModule } from 'ngx-toastr';
import {ToolsModule} from "./tools/tools.module";
import { ModalModule } from 'ngx-bootstrap/modal';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import {BROWSER_STORAGE, BrowserStorageService} from "./services/browser-storage.service";
import { RecipeSlideComponent } from './components/recipe-slide/recipe-slide.component';
import { WhyWeComponent } from './components/why-we/why-we.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';


@NgModule({
    declarations: [
        AppComponent,
        ErrorComponent,
        RecipesListComponent,
        RecipeDetailComponent,
        AccessDeniedComponent,
        AuthorizationComponent,
        RegistrationComponent,
        NavigationComponent,
        MainPageComponent,
        RecipeSlideComponent,
        WhyWeComponent,
        SubscribeComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        ToolsModule,
        BsDropdownModule.forRoot(),
        ToastrModule.forRoot({positionClass: 'toast-top-center'}),
        ModalModule.forRoot(),
        CarouselModule.forRoot(),
    ],
    providers: [
        {provide: LOCALE_ID, useValue: 'ru'},
        RecipesService,
        UserService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        },
      BrowserStorageService,
      { provide: BROWSER_STORAGE, useFactory: () => sessionStorage }],
    exports: [

    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
