import { NgModule } from '@angular/core';

import { BetdjhipSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [BetdjhipSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [BetdjhipSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class BetdjhipSharedCommonModule {}
