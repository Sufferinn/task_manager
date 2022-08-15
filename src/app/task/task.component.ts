import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Task } from '../Task';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  public tasks: Task[] = [];
  public text: any;

  constructor(public service: HttpService) { }

  ngOnInit(): void {
    this.delete();
  }
  addTask(text: any) {
    let body = {
      name: this.text,
      data: '16.08.2022',
      done: false,
    };
    this.service.createTask(body).subscribe((result) => {
      this.tasks.push(result);
    });
  }
  deleteTask(task: any) {
    this.service.deleteProduct(task).subscribe(() => {
      this.delete();
    });
  }

  delete() {
    this.service.getTasks().subscribe((result) => {
      this.tasks = result;
    });
  }
}
