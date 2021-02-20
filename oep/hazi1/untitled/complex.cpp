//
// Created by gyorgynovak on 2021. 02. 20..
//

/*
 *
 * a=((this.re)*(a.re))-((this.im)*(a.im));
    b=((this.re)*(a.im))+((a.re)*(this.im));
 */

#include "complex.h"
#include<math.h>

Complex::Complex(double re, double im){
    this->re = re;
    this->im = im;
}

void Complex::add(Complex a) {
    this->re += a.re;
    this->im += a.im;
}

void Complex::subtract(Complex a) {
    this->re -= a.re;
    this->im -= a.im;
}

void Complex::mul(Complex a) {
    this->re = (((this->re) * (a.re)) - ((this->im) * (a.im)));
    this->im = (((a.re) * (this->im)) + ((this->re) * (a.im)));
}

void Complex::div(Complex a) {
    this->re=(((this->re)*(a.re))+((this->im)*(a.im)))/(pow(a.re,2)+pow(a.im,2));
    this->im=(((a.re)*(this->im))-((this->re)*(a.im)))/(pow(a.re,2)+pow(a.im,2));
}

void Complex::scalar(int a) {
    this->re *= a;
    this->im *= a;
}

