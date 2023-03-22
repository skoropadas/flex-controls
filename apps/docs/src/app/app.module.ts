import { NgDocModule } from "@ng-doc/app";
import { NG_DOC_ROUTING, NgDocGeneratedModule } from "@ng-doc/generated";
import { RouterModule } from "@angular/router";
import { NgDocSidebarModule } from "@ng-doc/app/components/sidebar";
import { NgDocNavbarModule } from "@ng-doc/app/components/navbar";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NxWelcomeComponent} from './nx-welcome.component';
import {ControlDirective} from './control.directive';

@NgModule({
    declarations: [AppComponent, NxWelcomeComponent, ControlDirective],
    imports: [BrowserModule, BrowserAnimationsModule, NgDocNavbarModule, NgDocSidebarModule, RouterModule.forRoot(NG_DOC_ROUTING), NgDocModule.forRoot(), NgDocGeneratedModule.forRoot()],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
