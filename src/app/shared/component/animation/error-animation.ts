import {
  animate,
  group,
  query,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';

export function errorAnimation() {
  return trigger(
    'errorAnimation', [
      transition(':enter', [
        style({transform: 'translateY(-20%)', opacity: 0}),
        animate('.3s cubic-bezier(.25,.46,.45,.94)', style({transform: 'translateY(0%)', opacity: 1}))
      ]),
      transition(':leave', [
        style({transform: 'translateY(0)', opacity: 1}),
        animate('.3s cubic-bezier(.25,.46,.45,.94)', style({transform: 'translateY(-20%)', opacity: 0}))
      ])
    ]
  )
}
