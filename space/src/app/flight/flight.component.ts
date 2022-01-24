import { Component, OnInit } from '@angular/core';
import { FlightserviceService } from '../flightservice.service';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {

  sucess: boolean = true;
  LandSucc: boolean = true;
  showError!: string;
  name='kabilan';



  constructor(private http: FlightserviceService) { }

  flightData: any = []
  dev_name = "kabilan";

  ngOnInit(): void {
    this.http.fetchFlights().subscribe((data: any) => {
      this.flightData = data;
      if (this.flightData.length == 0) {
        this.showError = "No Record Found";
      }
      console.log("Data :", this.flightData)
    })
  }

sendYear(year: any): void {
    console.log(year);
    this.http.fetchAll(year, this.sucess, this.LandSucc).subscribe((data: any) => {
      this.flightData = data;
      console.log("sucees :", this.flightData)
    })
  }
  sendSuccess(succ: any) {
    this.sucess = succ;
    this.http.fetchLanchSucess(succ).subscribe((data: any) => {
      this.flightData = data;
      console.log("sucees :", this.flightData)
    })
  }
  LandSuccLuanchSucc(val: any) {
    this.LandSucc = val;
    this.http.fetchLanchSucessAndLandSuccess(val).subscribe((data: any) => {
      this.flightData = data;
      console.log("Land :", this.flightData)
    })
  }

}
