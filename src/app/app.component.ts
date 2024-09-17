import { Component } from '@angular/core';
import { ChartConfiguration, ChartOptions, ChartType, Chart, registerables } from "chart.js";

// import { IDropdownSettings } from 'ng-multiselect-dropdown';

import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'EstadisticasProgramacion';

  isDarkMode = false;

  chart: any = [];

  lenguajes = [
    'JavaScript', 
    'TypeScript', 
    'Angular', 
    'Vue', 
    'React', 
    'React-Native', 
    'Ionic', 
    'Node', 
    'Java',
    'Laravel', 
    'C#'
  ];

  datasetGlobal: any = [{
            data: [30,40,60,70,90,95,97],
            label: 'JavaScript',
            fill: false,
            tension: 0.5,
            borderColor: 'Yellow',
            backgroundColor: 'Yellow'
        },
        {
          data: [40,45,50,80,90,95,97],
          label: 'TypeScript',
          fill: false,
          tension: 0.5,
          borderColor: 'blue',
          backgroundColor: 'blue'
        }, 
        {
          data: [20,30,60,80,90,95,97],
          label: 'Angular',
          fill: false,
          tension: 0.5,
          borderColor: 'red',
          backgroundColor: 'red'
        },
        {
        data: [10,20,70,85,80,80,97],
        label: 'Vue',
        fill: false,
        tension: 0.5,
        borderColor: 'green',
        backgroundColor: 'green'
        },
        {
          data: [10,20,70,60,67,80,95],
          label: 'Laravel',
          fill: false,
          tension: 0.5,
          borderColor: 'orange',
          backgroundColor: 'orange'
          },
        {
        data: [15,30,50,80,60,80,90],
        label: 'React',
        fill: false,
        tension: 0.5,
        borderColor: '#0dcaf0',
        backgroundColor: '#0dcaf0'
        },
        {
        data: [10,30,60,80,70,80,95],
        label: 'React-Native',
        fill: false,
        tension: 0.5,
        borderColor: '#0d6efd',
        backgroundColor: '#0d6efd'
        },
        {
        data: [5,10,5,20,60,75,75],
        label: 'Ionic',
        fill: false,
        tension: 0.5,
        borderColor: '#675bcb',
        backgroundColor: '#675bcb'
        },
        {
        data: [10,50,60,80,70,80,90],
        label: 'Node',
        fill: false,
        tension: 0.5,
        borderColor: '#20c997',
        backgroundColor: '#20c997'
        },
        {
        data: [30,50,60,50,70,85,95],
        label: 'Java',
        fill: false,
        tension: 0.5,
        borderColor: '#e9ecef',
        backgroundColor: '#e9ecef'
        },
        {
        data: [30,50,60,80,50,30,40],
        label: 'C#',
        fill: false,
        tension: 0.5,
        borderColor: 'purple',
        backgroundColor: 'purple'
        }] 

  constructor() {

    Chart.register(...registerables)
      
  
  }

  // selectedOptions: string[] = [];

  // onSelectOptions(event: any) {
  //   const selectedOptions = Array.from(event.target.selectedOptions) as HTMLOptionElement[];
  //   this.selectedOptions = selectedOptions.map(option => option.value);
  //   console.log(this.selectedOptions);
  // }
  selectedOptions: string[] = [];

  onSelectionChange(event: any) {
    this.selectedOptions = event.value;
    console.log(this.selectedOptions); // muestra las opciones seleccionadas en la consola

    let chartStatus = Chart.getChart("canvas"); // <canvas> id

    if (chartStatus != undefined) {
      chartStatus.destroy();
    }
    if (this.chart) {
    
    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
          labels: [2018,2019,2020,2021,2022,2023,2024],
          datasets:  this.datasetGlobal.filter((data:any) => {
          if(this.selectedOptions.length > 0) {
            return this.selectedOptions.some(option => option === data.label);
          } else {
              return this.datasetGlobal
          }
        })
      },
      
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
        }
    });
  }
  }
 
  ngOnInit(): void {
    this.Init();
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
  }



  Init() {
      let chartStatus = Chart.getChart("canvas"); // <canvas> id

      if (chartStatus != undefined) {
        chartStatus.destroy();
      }
      if (this.chart) {
      
      this.chart = new Chart('canvas', {
        type: 'line',
        data: {
            labels: [2018,2019,2020,2021,2022,2023,2024],
            datasets: this.datasetGlobal
        },
        
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
          }
      });
    }
}
}
