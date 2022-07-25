import {Directive} from '@angular/core';
import {FlControlHost} from 'flex-controls/controls';
import {provideControlHost} from 'flex-controls/tokens';

@Directive({
    selector: '[flControlSilencer]',
    providers: [provideControlHost(FlControlSilencerDirective)],
})
export class FlControlSilencerDirective extends FlControlHost<unknown> {
    constructor() {
        super();
    }

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    override registerControl() {}

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    override unregisterControl() {}
}
