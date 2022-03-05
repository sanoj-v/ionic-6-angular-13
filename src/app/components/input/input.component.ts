import { Component, forwardRef, Injector, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormControl, NgControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputComponent),
    multi: true
  }]
})
export class InputComponent implements ControlValueAccessor, OnInit {
  fm = new FormControl();
  ngControl: NgControl;
  constructor(public injector: Injector) { }
  ngOnInit() {
    this.ngControl = this.injector.get(NgControl);
    this.fm.valueChanges.subscribe(v => {
      this.onChange(v);
    });
  }

  onChange = (_: any) => { }
  onTouched = () => { }

  writeValue(obj: any) {
    this.fm.setValue(obj);
  }
  registerOnChange(fn: any) {
    this.onChange = fn;
  }
  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }
}
