import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NotFoundRoutingModule } from "./not-found-routing,module";
import { NotFoundComponent } from "./not-found.component";
import { MaterialModule } from "app/shared/material.module";

@NgModule({
  imports: [CommonModule, NotFoundRoutingModule, MaterialModule],
  declarations: [NotFoundComponent]
})
export class NotFoundModule {}
