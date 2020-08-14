#lang racket
(require plot)
(require racket/block)
;; Limiti del grafico
;; Asse x
(define x-min 2)
(define x-max 30)
;; Asse y
(define y-max 15)
;; Funzioni
(define (lg2 x)
  (/ (log x)
     (log 2)))
(define (id x)
  x)
(define (xlg2 x)
  (* x
     (lg2 x)))
(define (quadrato x)
  (* x x))
;; Ricerca zero di f tra a e b, dove f è monotona crescente e a < b
(define tol-x 0.001)
(define (zero-iter f ak bk)
  (cond ((< (- bk ak) tol-x) (/ (+ ak bk) 2))
        ((< (f (/ (+ ak bk) 2)) 0) (zero-iter f (/ (+ ak bk) 2) bk))
        (else (zero-iter f ak (/ (+ ak bk) 2)))))
(define (zero f)
   (zero-iter f x-min x-max))
;; Calcolo estremo
(define (f-x-max f)
  (zero (lambda (x) (- (f x) y-max))))
;; Disegno dei grafici
(plot-legend-anchor 'top-right)
(plot (list (axes)
            (function lg2 x-min x-max #:label "lg_2 x" #:color "green")
            (function sqrt x-min x-max #:label "\\sqrt x" #:color "blue")
            (function id x-min (f-x-max id) #:label "x" #:color "black")
            (function xlg2 x-min (f-x-max xlg2) #:label "x lg_2 x"  #:color "orange")
            (function quadrato x-min (f-x-max quadrato) #:label "x^2" #:color "red")
            ))