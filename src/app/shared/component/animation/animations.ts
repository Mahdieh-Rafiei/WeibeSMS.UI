import {
  animate,
  group,
  query,
  state,
  style,
  transition,
  trigger
  } from '@angular/animations';

export function routerTransition() {
  return trigger('routerAnimation', [
    transition('* => 0', [
      query(':enter',
        style({
          position: 'fixed',
          width: '100%',
          transform: 'translateY(-100%)'
        }), { optional: true }),
      query(':leave',
        animate('250ms ease',
          style({
            position: 'fixed',
            width: '100%',
            transform: 'translateY(100%)',
          })
        ), { optional: true }),
      query(':enter',
        animate('250ms ease',
          style({
            opacity: 1,
            transform: 'translateY(0%)'
          })
        ), { optional: true }),
    ]),
    transition('* => 1', [
      query(':enter',
        style({
          position: 'fixed',
          width: '100%',
          transform: 'translateY(-100%)'
        }), { optional: true }),
      query(':leave',
        animate('250ms ease',
          style({
            position: 'fixed',
            width: '100%',
            transform: 'translateY(100%)',
          })
        ), { optional: true }),
      query(':enter',
        animate('250ms ease',
          style({
            opacity: 1,
            transform: 'translateY(0%)'
          })
        ), { optional: true }),
    ]),
    transition('* => 2', [
      query(':enter',
        style({
          position: 'fixed',
          width: '100%',
          transform: 'translateY(100%)'
        }), { optional: true }),
      // move page off screen right on leave
      query(':leave',
        animate('250ms ease',
          style({
            position: 'fixed',
            width: '100%',
            transform: 'translateY(-100%)',
          })
        ), { optional: true }),
      query(':enter',
        animate('250ms ease',
          style({
            opacity: 1,
            transform: 'translateY(0%)'
          })
        ), { optional: true }),
    ])
  ]);
}
