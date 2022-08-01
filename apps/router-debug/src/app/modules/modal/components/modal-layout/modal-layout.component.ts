import { AfterViewInit, Component, TemplateRef, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { DialogService } from "@ngneat/dialog";
import { first, switchMap } from "rxjs";

@Component({
  selector: "router-debug-modal-layout",
  templateUrl: "./modal-layout.component.html",
})
export class ModalLayoutComponent implements AfterViewInit {
  @ViewChild("dialogTemplateRef", { static: false }) dialogTemplateRef!: TemplateRef<unknown>;

  constructor(private router: Router, private dialogService: DialogService) {}

  ngAfterViewInit() {
    const dialogRef = this.dialogService.open(this.dialogTemplateRef);

    dialogRef.afterClosed$
      .pipe(
        first(),
        switchMap(() => this.router.navigate(["/"]))
      )
      .subscribe();
  }

  onChildRouteActivate($event: any) {
    console.log("[ModalLayoutComponent] child outlet activated", $event);
  }
}
