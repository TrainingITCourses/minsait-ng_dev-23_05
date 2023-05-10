import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CopyRightComponent } from './copy-right/copy-right.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [FooterComponent, HeaderComponent, CopyRightComponent],
  imports: [CommonModule, RouterModule],
  exports: [FooterComponent, HeaderComponent],
})
export class LayoutModule {}
