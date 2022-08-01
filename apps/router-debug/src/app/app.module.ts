import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { DialogModule } from "@ngneat/dialog";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    DialogModule.forRoot(),
    RouterModule.forRoot(
      [
        {
          path: "modal",
          outlet: "modal",
          loadChildren: () => import("./modules/modal/modal.module").then((m) => m.ModalModule),
        },
      ],
      {
        enableTracing: false,
        errorHandler: (err: unknown) => {
          console.error("[RouterErrorHandler]", err);
        },
      }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
