import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { AuthService } from "../../shared/auth.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();

  constructor(public authService: AuthService) {}

  ngOnInit() {}

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }
}
