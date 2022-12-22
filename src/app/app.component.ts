import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { chartModal, HighchartService } from './highchart.service';
import * as Highcharts from "highcharts";
import * as mqttt from "mqtt";
import { SelectItem, PrimeNGConfig} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Firestore-Angular-Highcharts";
  items$!: chartModal[];
  Highcharts: typeof Highcharts = Highcharts;
  chardata: any[] = [];
  chartOptions: any;
  constructor(private highchartservice: HighchartService) {}
  ngOnInit() {
    this.highchartservice.rates$.subscribe((assets) => {
      this.items$ = assets;
      if (this.items$) {
        this.items$.forEach((element) => {
          this.chardata.push(element.rate);
        });
        this.getChart();
      }
    });
  }
  getChart() {
    this.chartOptions = {
      series: [{
        data: this.chardata,
      }, ],
      chart: {
        type: "line",
      },
      title: {
        text: "Temperature",
      },    
    };
  }
}
