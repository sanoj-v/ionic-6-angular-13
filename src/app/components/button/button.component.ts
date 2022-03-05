import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() label: string;
  @Output() click: EventEmitter<any> = new EventEmitter<any>();

  onButtonClick(event) {
    event.stopPropagation();
    this.click.emit();
  }
}
