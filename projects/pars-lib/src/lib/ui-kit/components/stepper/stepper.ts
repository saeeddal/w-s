import type { TemplateRef } from '@angular/core';
import { Component, input, output, signal, contentChildren, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PtButton } from '../button/button.component';
import { UK_TYPE } from '../../../uk-type';

export interface Step {
  title: string;
}

@Component({
  selector: 'pt-stepper',
  standalone: true,
  imports: [CommonModule, PtButton],
  templateUrl: './stepper.html',
  styleUrl: './stepper.scss',
})
export class PtStepper {
  steps = input.required<Step[]>();
  linear = input(true);

  public readonly UK_TYPE = UK_TYPE;

  stepChange = output<number>();
  done = output<void>();

  currentStep = signal(0);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  stepTemplates = contentChildren<TemplateRef<any>>('step');

  currentStepIndex = computed(() => this.currentStep());
  isLastStep = computed(() => this.currentStep() === this.steps().length - 1);

  goToStep(index: number) {
    if (this.linear() && index > this.currentStep() + 1) {
      return;
    }
    this.currentStep.set(index);
    this.stepChange.emit(index);
  }

  next() {
    if (this.currentStep() < this.steps().length - 1) {
      this.currentStep.update((i) => i + 1);
      this.stepChange.emit(this.currentStep());
    } else {
      this.done.emit();
    }
  }

  previous() {
    if (this.currentStep() > 0) {
      this.currentStep.update((i) => i - 1);
      this.stepChange.emit(this.currentStep());
    }
  }

  isStepCompleted(index: number): boolean {
    return index < this.currentStep();
  }

  isStepActive(index: number): boolean {
    return index === this.currentStep();
  }
}
