#include<stdio.h>

int main()
{
    // int count=1;
    for(int i=0; i<3; i++){
        for(int j=3; j>i; j--){
            // printf("%d", count);
            // count++;
            printf("*");
        }
        printf("\n");
    }
    return 0;
}
