import { Component } from '@angular/core';
import { IpServiceService } from './ip-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private ip: IpServiceService) {}

  title = 'ipaddress';
  ipAddress: string;

  ngOnInit() {
    this.getIP();
  }
  getIP() {
    this.ip.getIPAddress().subscribe((res: any) => {
      this.ipAddress = res.ip;
    });
  }
}
