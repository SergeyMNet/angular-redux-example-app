import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { FeedStoreEffects } from './effects';
import { feedReducer } from './reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('feed', feedReducer),
    EffectsModule.forFeature([FeedStoreEffects])
  ],
  providers: [FeedStoreEffects]
})
export class FeedStoreModule {}
