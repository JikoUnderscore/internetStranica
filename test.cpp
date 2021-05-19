#include <iostream>
using namespace std;


void printList(int alist[]){
    cout << "[";
    
    
    int arrSize = sizeof(alist)/sizeof(alist[0]);

    for (int i; i < arrSize; i++){
        printf("%i, ", alist[i]);

    }
    cout << "]";
}


int main()
{
       
    int listofvalues[] = {7,4,1,8,5,2,9,6,3};
    
    
    printList(listofvalues);
    
    return 0;
}
