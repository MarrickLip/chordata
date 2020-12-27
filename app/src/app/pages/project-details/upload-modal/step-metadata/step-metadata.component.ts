import { Component, OnInit } from '@angular/core'

declare var $: any;

@Component({
    selector: 'app-step-metadata',
    templateUrl: './step-metadata.component.html',
    styleUrls: ['./step-metadata.component.css'],
})
export class StepMetadataComponent implements OnInit {
    constructor() {}
    tags = ['Amsterdam', 'Washington', 'Sydney', 'Beijing'];

    ngOnInit(): void {
        const tagClass = $('.tagsinput').data('color');
        if ($(".tagsinput").length != 0) {
          $('.tagsinput').tagsinput();
        }
        $('.bootstrap-tagsinput').addClass('' + tagClass + '-badge');
    }
}
