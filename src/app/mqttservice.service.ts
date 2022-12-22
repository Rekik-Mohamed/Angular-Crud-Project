import { Injectable } from '@angular/core';
import { MqttService } from 'ngx-mqtt';

@Injectable({
  providedIn: 'root'
})
export class MqttserviceService {
    constructor(private _mqttService: MqttService) {}
    // Connect to the MQTT broker
    connect() {
      this._mqttService.connect();
    }
}
    // Subscribe to a topic
    /*subscribe(topic: string) {
      this._mqttService.observe(topic).subscribe((message: //IMqttMessage) => {
        console.log(message.payload.toString());
      });
    }
  
    // Publish a message to a topic
    publish(topic: string, message: string) {
      this._mqttService.unsafePublish(topic, message, { qos: 1, retain: true });

  }
}*/
