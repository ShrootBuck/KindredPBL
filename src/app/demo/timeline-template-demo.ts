import { Component, ChangeDetectorRef } from "@angular/core";
import { MatButtonToggleChange } from "@angular/material/button-toggle";

type EventItem = {
  header: string;
  location: string;
  description: string;
  rufusOrder: number; // Time Order = Rufus's POV
  danaOrder: number; // Book Order = order in book
};

@Component({
  selector: "timeline-template-demo",
  templateUrl: "./timeline-template-demo.html",
})
export class TimelineTemplateDemo {
  events: EventItem[];

  state = "rufus";

  constructor(private cdr: ChangeDetectorRef) {
    this.events = [
      {
        header: "rufusOrder=1,danaOrder=2",
        location: "The Weylin Manor",
        description: "Description stuff all can go here.",
        rufusOrder: 1,
        danaOrder: 2,
      },
      {
        header: "rufusOrder=2,danaOrder=1",
        location: "The Weylin Manor",
        description: "Description stuff all can go here.",
        rufusOrder: 2,
        danaOrder: 1,
      },
      {
        header: "rufusOrder=3,danaOrder=4",
        location: "The Weylin Manor",
        description: "Description stuff all can go here.",
        rufusOrder: 3,
        danaOrder: 4,
      },
      {
        header: "rufusOrder=4,danaOrder=3",
        location: "The Weylin Manor",
        description: "Description stuff all can go here.",
        rufusOrder: 4,
        danaOrder: 3,
      },
    ];
  }

  beginSort(toggleChange: MatButtonToggleChange) {
    console.log(toggleChange.source.value);
    if (toggleChange.source.value == "rufus") {
      this.sortEventsByRufusOrder();

      document.body.style.background = "white";
      document.getElementById("title").style.color = "black";
    } else if (toggleChange.source.value == "dana") {
      this.sortEventsByDanaOrder();

      document.body.style.background = "rgb(25, 25, 25)";
      document.getElementById("title").style.color = "white";
    } else {
      // uh oh, BUG!
    }
  }

  sortEventsByRufusOrder() {
    this.events = [...this.events].sort((a, b) => a.rufusOrder - b.rufusOrder);
  }

  sortEventsByDanaOrder() {
    this.events = [...this.events].sort((a, b) => a.danaOrder - b.danaOrder);
  }
}
