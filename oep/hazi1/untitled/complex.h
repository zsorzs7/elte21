// hanyados, skalaris szorzat



#ifndef COMPLEX_H
#define COMPLEX_H

class Complex {

public:
    double re;
    double im;
    double getRe() const {return this->re;}
    double getIm() const {return this->im;}
    Complex(double re, double im);
    void add(Complex a);
    void subtract(Complex a);
    void mul(Complex a);
    void div(Complex a);
    void scalar(int a);

};

#endif
