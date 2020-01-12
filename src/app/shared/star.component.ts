import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component ({
    selector: 'pm-star',
    templateUrl:'./star.component.html',
    styleUrls:['./star.component.css']
})
export class StarComponent implements OnChanges {
    @Input() rating: number; //inputs are passed to html inside the selector tag with [] "property binding"
    starWidth: number;
    @Output() ratingClicked: EventEmitter<string> =
                new EventEmitter<string>(); //outputs are passed to the html inside the selector tag with () "event binding"

    ngOnChanges(): void{
        this.starWidth = this.rating * 75/5;
    }

    onClick(): void{
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`); //back ticks not quotes... wasn't explained but appears to allow js inline
    }
}
