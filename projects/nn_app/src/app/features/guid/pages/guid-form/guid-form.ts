/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/member-ordering */
// app-signal-form-simple.component.ts
import type { OnInit } from '@angular/core';
import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import {
  form,
  FormField,
  email,
  required,
  FormRoot,
  minLength,
  maxLength,
} from '@angular/forms/signals';
import { PtButton, PtLabel, UK_TYPE } from '@pars-lib/public-api';
import { MessageModule } from 'primeng/message';
import { GuidFacade } from '../../guid.facade';
@Component({
  selector: 'app-signal-form-simple',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    InputNumberModule,
    ButtonModule,
    FormField,
    ReactiveFormsModule,
    FormRoot,
    CardModule,
    PtButton,
    MessageModule,
    PtLabel,
  ],
  templateUrl: './guid-form.html',
  styleUrl: './guid-form.scss',
})
export class GuidForm implements OnInit {
  ngOnInit(): void {
    this.GUID_FACADE.getPost1();
  }
  public readonly UK_TYPE = UK_TYPE;

  contactModel = signal({
    name: '',
    email: '',
  });

  contactForm = form(
    this.contactModel,
    (schemaPath) => {
      // Required validators with config objects
      required(schemaPath.name, {
        when: ({ state }) => state.touched(),
        message: 'Name is required',
      });

      minLength(schemaPath.name, 2, {
        message: 'Name must be at least 2 characters',
      });

      maxLength(schemaPath.name, 8, {
        message: 'Name must be at most 8 characters',
      });

      required(schemaPath.email, {
        when: ({ state }) => state.touched(),
        message: 'Email is required',
      });

      email(schemaPath.email, {
        message: 'Please enter a valid email address',
      });
    },
    {
      submission: {
        action: async (f) => {
          try {
            await new Promise((resolve) => setTimeout(resolve, 200));

            f().reset({ ...this.INITIAL_MODEL });
          } catch (error) {}
        },
      },
    },
  );

  private readonly INITIAL_MODEL = { name: '', email: '' };
  public readonly GUID_FACADE = inject(GuidFacade);
}
