import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouter } from './app-router';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HotToastModule } from '@ngneat/hot-toast';
import { HttpClientModule } from '@angular/common/http';
import { NgxsResetPluginModule } from 'ngxs-reset-plugin';
import { NgxsModule } from '@ngxs/store';
import { AuthState } from './modules/auth/store/state';
import { environment } from 'src/environments/environment';
import { HttpCacheInterceptorModule } from '@ngneat/cashew';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  SocialAuthServiceConfig,
  SocialLoginModule,
} from '@abacritt/angularx-social-login';
import { GoogleLoginProvider } from '@abacritt/angularx-social-login';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRouter,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpCacheInterceptorModule.forRoot(),
    HotToastModule.forRoot({
      position: 'bottom-center',
    }),
    NgxsModule.forRoot([AuthState], {
      developmentMode: !environment.production,
    }),
    NgxsResetPluginModule.forRoot(),
    SocialLoginModule,
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '118441662440-oiuhherkddmfs1ksa4igu3l0kf8m09dr.apps.googleusercontent.com'
            ),
          },
        ],
        onError: (err) => {
          console.error(err);
        },
      } as SocialAuthServiceConfig,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
