import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ModalFeatureComponent } from "./component/modal-feature/modal-feature.component";

@NgModule({
  declarations: [ModalFeatureComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        component: ModalFeatureComponent,
      },
    ]),
  ],
})
export class LazyFeatureModule {}
