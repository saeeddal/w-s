import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {FormsModule} from '@angular/forms';


import {
    ImageBgColor,
    ImageObjectFit,
    ImagePadding,
    UkImageBgColor,
    UkImageObjectFit,
    UkImagePadding,
} from './_/image.type';
import DEFAULT from '../../prepared-config';

@Component({
    selector: 'pt-image',
    imports: [CommonModule, FormsModule],
    templateUrl: './image.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrl: './image.component.scss',
})
export class PtImage{
    @Input()
    public source: string = DEFAULT.image.source;

   

    @Input()
    public bgColor: ImageBgColor = UkImageBgColor.TRANSPARENT;

    @Input()
    public objectFit: ImageObjectFit = UkImageObjectFit.COVER;

    @Input()
    public padding: ImagePadding = UkImagePadding.NONE;
}
