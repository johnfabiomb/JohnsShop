import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

/**
 * Components
 */
import WindowComponent from './window/window.component';
import SideBarComponent from './side-bar/side-bar.component';
import AuthContainerComponent from './auth-container/auth-container.component';
import PanelContainerComponent from './panel-container/panel-container.component';

/**
 * Template module
 */
@NgModule({
  declarations: [
    WindowComponent,
    SideBarComponent,
    AuthContainerComponent,
    PanelContainerComponent,
  ],
  imports: [CommonModule, RouterModule],
})
export default class TemplateModule {}
