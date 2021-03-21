import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { testARoutes } from './test-a.routes';

@NgModule({
  imports: [RouterModule.forChild(testARoutes)],
})
export class TestARoutingModule {}
