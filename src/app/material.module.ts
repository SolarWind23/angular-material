import {NgModule} from '@angular/core';
import {

  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatButtonModule,
  

} from '@angular/material';
import {MatTableModule} from '@angular/material/table';
@NgModule({
  imports: [

  MatSidenavModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatButtonModule,
  MatTableModule,
    
],
  exports: [

    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    
  ],
})
export class MaterialModule {};