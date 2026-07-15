/* eslint-disable @typescript-eslint/no-explicit-any */
// interceptors/response.interceptor.ts
import type { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { HttpResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { MessageService } from 'primeng/api';
import { catchError, tap, throwError } from 'rxjs';

// Interface for your API response structure
interface ApiResponse {
  data?: any;
  message?: string;
  success?: boolean;
  errors?: string[] | Record<string, string[]>;
  error?: string;
}

export const responseInterceptor: HttpInterceptorFn = (req, next) => {
  const messageService = inject(MessageService);

  // Check if we should show success messages (default: false)
  // Only show success when explicitly requested
  const showSuccess = req.headers.get('X-Show-Success') === 'true';

  return next(req).pipe(
    tap((event) => {
      // Handle successful responses - ONLY if explicitly requested
      if (event instanceof HttpResponse && showSuccess) {
        const message = getSuccessMessage(event);
        if (message) {
          messageService.add({
            severity: 'success',
            summary: 'موفقیت',
            detail: message,
            life: 2000,
          });
        }
      }
    }),
    catchError((error: HttpErrorResponse) => {
      // ALWAYS show error messages
      const errorMessage = getErrorMessage(error);
      messageService.add({
        severity: 'error',
        summary: 'خطا',
        detail: errorMessage,
        life: 2000,
      });
      return throwError(() => error);
    }),
  );
};

// Extract success message from response
function getSuccessMessage(event: HttpResponse<any>): string | null {
  const body = event.body as ApiResponse;

  if (body?.message) {
    return body.message;
  }

  if (body?.data?.message) {
    return body.data.message;
  }

  switch (event.status) {
    case 200:
      return 'عملیات با موفقیت انجام شد';
    case 201:
      return 'ایجاد با موفقیت انجام شد';
    case 204:
      return 'عملیات با موفقیت انجام شد';
    default:
      return null;
  }
}

// Extract error message from response - ALWAYS shown
function getErrorMessage(error: HttpErrorResponse): string {
  const errorBody = error.error as ApiResponse;

  // Check for API error message
  if (errorBody?.message) {
    return errorBody.message;
  }

  if (errorBody?.data?.message) {
    return errorBody.data.message;
  }

  // Check for validation errors
  if (errorBody?.errors) {
    if (Array.isArray(errorBody.errors)) {
      return errorBody.errors.join('، ');
    }
    if (typeof errorBody.errors === 'object') {
      const messages = Object.values(errorBody.errors).flat();
      return messages.join('، ');
    }
  }

  if (errorBody?.error) {
    return errorBody.error;
  }

  // Default messages based on status
  switch (error.status) {
    case 400:
      return 'اطلاعات وارد شده صحیح نمی‌باشد';
    case 401:
      return 'شما اجازه دسترسی به این بخش را ندارید';
    case 403:
      return 'دسترسی غیرمجاز';
    case 404:
      return 'منبع مورد نظر یافت نشد';
    case 409:
      return 'این اطلاعات قبلاً ثبت شده است';
    case 422:
      return 'اعتبارسنجی اطلاعات با مشکل مواجه شد';
    case 429:
      return 'تعداد درخواست‌های شما بیش از حد مجاز است';
    case 500:
      return 'خطای داخلی سرور';
    case 503:
      return 'سرویس در دسترس نمی‌باشد';
    default:
      return 'خطای ناشناخته رخ داده است';
  }
}
