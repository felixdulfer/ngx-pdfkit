import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { testBRoutes } from './test-b.routes';

@NgModule({
  imports: [RouterModule.forChild(testBRoutes)],
})
export class TestBRoutingModule {}
