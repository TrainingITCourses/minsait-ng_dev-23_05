import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CopyRightComponent } from './copy-right/copy-right.component';

@NgModule({
  declarations: [FooterComponent, HeaderComponent, CopyRightComponent],
  imports: [CommonModule],
  exports: [FooterComponent, HeaderComponent],
})
export class LayoutModule {}
