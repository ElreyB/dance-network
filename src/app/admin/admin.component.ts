import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.css"]
})
export class AdminComponent implements OnInit {
  operation = null;
  constructor() {}

  ngOnInit() {}

  operationTask(task) {
    this.operation = task;
  }
}
