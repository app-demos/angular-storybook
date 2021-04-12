import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { UserImageComponent } from './user-image/user-image.component';
import { UserDetailsIconComponent } from './user-details-icon/user-details-icon.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    UserImageComponent,
    UserDetailsIconComponent,
    UserDetailsComponent,
    UserComponent,
  ],
  imports: [
    BrowserModule,
  ],
  exports: [
    UserImageComponent,
    UserDetailsIconComponent,
    UserDetailsComponent,
    UserComponent
  ]
})
export class UserModule { }
