import { HttpClient } from '@angular/common/http';
import { Component,inject, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'weather';
  
  
  public weatherData:any;
  
  private lat = ''
  private long = ''

  http = inject(HttpClient);

 

  sunny = ()=>{
    if(this.weatherData.weather[0].main == 'Clouds'){

      return 'cloudy.png';
    }else if(this.weatherData.weather[0].main == 'Rain'){

      return 'cloudy_rain.png'
    }else{

      return 'sun.png'
    }
  };

  wrapperColor = ()=>{
    if(this.sunny()=='sun.png'){
      return 'background-color: lightblue;';
    }else{
      return 'background-color: rgb(56, 78, 111);'
    }
  }
  
 

  

  ngOnInit(){      
    
    
    
                                                                                            // your api key
    this.http.get("https://api.openweathermap.org/data/2.5/weather?lat=28.20&lon=76.82&appid={ your api key}").subscribe({
      next: (data: any)=>{
        this.weatherData = data;
      },
    })



  }

  
  

}
