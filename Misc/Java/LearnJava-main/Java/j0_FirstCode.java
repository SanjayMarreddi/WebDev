public class j0_FirstCode{
    public static void main(String args[]){

        int a = 5;    // int is of 4 Bytes -> 32 bits   
        short b = 5;  // 2 Bytes
        byte c = 5;   // 1 Byte
        long d = 5l;  // 8 Bytes
        float percent = 5.5f;    // 4 bytes
        double percent1 = 5.5;   // 8 bytes
        
        double d1 = 5;           // Implicit conversion.
        System.out.print(d1);    // Prints 5.0

        // int k = 5.6; doesnt work
        int k = (int) 5.6;       // prints 5   --> Explicit conversion.  ( Type Casting )

        char cc = 'A';
        cc = 66;
        System.out.print(cc);   // Prints 'B' 

        a = 8;
        int num = 5_00_000;  // 500000

        int $b = 100;   // This variable name also works.
        System.out.print(a);
        System.out.print($b); 
        

        System.out.print("Hello World");
    }
} 