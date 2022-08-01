import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ModalLayoutComponent } from "./components/modal-layout/modal-layout.component";

@NgModule({
  declarations: [ModalLayoutComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        component: ModalLayoutComponent,
        children: [
          {
            path: "lazy",
            loadChildren: () =>
              import("../lazy-feature/lazy-feature.module").then((m) => m.LazyFeatureModule),
          },
        ],
      },
    ]),
  ],
})
export class ModalModule {}
