import { of, from, Observable, fromEvent } from 'rxjs'
import { scan, map } from 'rxjs/operators'
// const stream$ = of(1, 2, 3, 4)

// stream$.subscribe(val => {
//     console.log(`${val} : value`)
// })

// const arr$ = from([1, 2, 3, 4]).pipe(
//     scan((acc, val) => acc.concat(val), [])
// )

// arr$.subscribe(val => console.log(val))

// const stream$ = new Observable(observer => {
//     observer.next('First value')

//     setTimeout(() => observer.next('After: 1000 ms'), 1000)

//     setTimeout(() => observer.complete(), 1500)

//     // setTimeout(() => observer.error('Something went wrong'), 2000)

//     setTimeout(() => observer.next('After: 3000 ms'), 3000)
// })

// stream$.subscribe(
//     (val) => console.log('Val:', val),
//     (error) => console.log(error),
//     () => console.log('Complete')
// )

// stream$.subscribe({
//     next(val) {
//         console.log(val)
//     },
//     error(err) {
//         console.log(err)
//     },
//     complete() {
//         console.log('Complete')
//     }
// })

fromEvent(document.querySelector('canvas'), 'mousemove')
    .pipe(
        map(e => ({
            x: e.offsetX,
            y: e.offsetY,
            ctx: e.target.getContext('2d')
        }))
    )
    .subscribe(pos => {
        pos.ctx.fillRect(pos.x, pos.y, 10, 10)
    })

    // https://www.youtube.com/watch?v=gCwSVQO_PtY
    // 29:58