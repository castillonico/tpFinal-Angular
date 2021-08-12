import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 

import { MatButtonModule } from '@angular/material/button'; 
import {MatFormField, MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input'; 
import {ErrorStateMatcher} from '@angular/material/core';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    MatButtonModule, 
    MatFormFieldModule, 
    MatFormField, 
    MatInputModule, 
    ErrorStateMatcher
  ], 
  exports: [ 
    MatButtonModule, 
    MatFormFieldModule, 
    MatFormField, 
    MatInputModule, 
    ErrorStateMatcher
  ]
})
export class MaterialModule { }
