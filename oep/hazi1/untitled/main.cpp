#include <iostream>
#include "complex.h"

using namespace std;

int main() {
    Complex comp(12, 4);

    Complex comptwo(2, 4);

    Complex comptre(66, 31);

    Complex compi(5, 4);
    Complex compa(8, -2);
    compi.scalar(10);



    cout << compi.re << ' ' << compi.im << endl;
    cout << compi.getRe();

}


