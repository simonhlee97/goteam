import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';


export let fade = trigger('fade', [

    state('void', style({ display: 'fadein' })),

    transition(':enter, :leave', [
        animate(2000)
    ])
])

// export let fadeout = trigger('fadeout', [

//     state('*', style({ display: 'none' })),

//     transition(':enter, :leave', [
//         animate(2000)
//     ])
// ])