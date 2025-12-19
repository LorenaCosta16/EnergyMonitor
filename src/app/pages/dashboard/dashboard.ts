import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet, BaseChartDirective],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit {
  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'],
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55],
        label: 'Consumo (kWh)',
        fill: true,
        tension: 0.5,
        borderColor: 'rgb(20, 184, 166)',
        backgroundColor: 'rgba(20, 184, 166, 0.3)'
      }
    ]
  };

  public lineChartOptions: ChartConfiguration<'line'>['options'] = {
    responsive: true,
    maintainAspectRatio: false
  };

  public lineChartLegend = true;

  ngOnInit(): void {
    // Dados podem ser carregados de uma API aqui
  }
}
