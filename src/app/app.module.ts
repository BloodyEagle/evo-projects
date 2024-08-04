import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {registerLocaleData} from "@angular/common";
import localeRu from '@angular/common/locales/ru';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ErrorComponent} from './components/error/error.component';
import {RecipesListComponent} from './components/recipes-list/recipes-list.component';
import {RecipeDetailComponent} from './components/recipe-detail/recipe-detail.component';
import {AccessDeniedComponent} from './components/access-denied/access-denied.component';
import {AuthorizationComponent} from './components/authorization/authorization.component';
import {RegistrationComponent} from './components/registration/registration.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavigationComponent} from './components/navigation/navigation.component';
import {MainPageComponent} from './components/main-page/main-page.component';
import {FormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";

import {BsDropdownModule} from 'ngx-bootstrap/dropdown';

import {UserService} from "./services/user.service";
import {AuthInterceptor} from "./interceptors/auth-interceptor.service";

import {RecipesService} from "./services/recipes.service";
import {ToastrModule} from 'ngx-toastr';
import {ToolsModule} from "./tools/tools.module";
import {ModalModule} from 'ngx-bootstrap/modal';
import {CarouselModule} from 'ngx-bootstrap/carousel';
import {BROWSER_STORAGE, BrowserStorageService} from "./services/browser-storage.service";
import {RecipeSlideComponent} from './components/recipe-slide/recipe-slide.component';
import {WhyWeComponent} from './components/why-we/why-we.component';
import {SubscribeComponent} from './components/subscribe/subscribe.component';
import {NgxsModule} from "@ngxs/store";
import {NgxsReduxDevtoolsPluginModule} from "@ngxs/devtools-plugin";
import {NgxsLoggerPluginModule} from "@ngxs/logger-plugin";
import {AuthState} from "./store/auth-state";
import {LikesState} from "./store/likes-state";
import {FavoritesState} from "./store/favorites-state";

registerLocaleData(localeRu, 'ru');


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
    NgxsModule.forRoot([AuthState, LikesState, FavoritesState], {developmentMode: true}),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
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
    {provide: BROWSER_STORAGE, useFactory: () => sessionStorage}],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
