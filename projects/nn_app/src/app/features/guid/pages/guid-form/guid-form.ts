/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/member-ordering */
// app-signal-form-simple.component.ts
import { Component, signal } from '@angular/core';
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
import { PtButton, UK_TYPE } from '@pars-lib/public-api';
import { MessageModule } from 'primeng/message';
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
  ],
  templateUrl: './guid-form.html',
  styleUrl: './guid-form.scss',
})
export class GuidForm {
  // with work with form
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
            debugger;
            await new Promise((resolve) => setTimeout(resolve, 200));
            console.log('submit is done');
            f().reset({ ...this.INITIAL_MODEL });
          } catch (error) {
            console.error('Submission error:', error);
          }
        },
      },
    },
  );

  private readonly INITIAL_MODEL = { name: '', email: '' };

  getErrorMessage(field: any): string {
    const errors = field.errors();
    if (!errors) {
      return '';
    }

    // Check for specific error types
    if (errors.required) {
      return `${field.name} is required`;
    }
    if (errors.email) {
      return 'Please enter a valid email address';
    }
    if (errors.minLength) {
      return `Minimum length is ${errors.minLength.requiredLength} characters`;
    }
    if (errors.maxLength) {
      return `Maximum length is ${errors.maxLength.requiredLength} characters`;
    }
    if (errors.pattern) {
      return 'Invalid format';
    }

    // Fallback for custom error messages
    if (errors.message) {
      return errors.message;
    }

    // If errors is an array
    if (Array.isArray(errors)) {
      return errors.map((e) => e.message || e).join(', ');
    }

    return 'Invalid field';
  }

  // Method to check if field has specific error
  hasError(field: any, errorType: string): boolean {
    const errors = field.errors();
    return errors && errors[errorType];
  }
}
