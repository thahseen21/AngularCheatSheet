import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-sizer',
  templateUrl: './sizer.component.html',
  styleUrls: ['./sizer.component.css'],
})
export class SizerComponent implements OnInit {
  @Input() fontSize: number = 0
  @Input() methodFromParent: any
  //This wont works since the property doesnt matches
  // @Output() fontSizeChange = new EventEmitter<number>()

  //Works
  // @Output('sizeChange') fontSizeChange = new EventEmitter<number>()

  @Output() sizeChange = new EventEmitter<number>()

  constructor() {}

  ngOnInit(): void {}

  resize(isIncrease?: boolean) {
    if (isIncrease) {
      this.fontSize += 1
    } else {
      this.fontSize -= 1
    }
    this.sizeChange.emit(this.fontSize)
  }
}
