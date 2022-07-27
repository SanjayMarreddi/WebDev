public class j2_OperatorDemo{
    public static void main(String args[]){
        int m = 6, n = 4;
        int r1 = m+n;
        int r2 = m-n;
        int r3 = m*n;
        int r4 = m/n;                 // Gives the quotient  => 1
        double r5 = m/n;              // Gives 1.0
        double r6 = ( (double)m )/n;  // Gives 1.5
        int rem = m % n;           
        
        n += m;   // n = n + m

        n++;      // n = n + 1   ==> Post Increment
        ++n;      // n = n + 1   ==> Pre Increment
        n--;      // n = n - 1

        n = 5;
        m = 4;
        m = ++n;
        System.out.println(m);    // m = 6, n = 6

        n = 5;
        m = 4;
        m = n++;
        System.out.println(m);    // m = 5, n = 6


        System.out.println(r1);   // Prints "\n" also.
        System.out.println(r2);
        System.out.println(r3);
        System.out.println(r4);


        n = 7;
        if (n == 0){
            System.out.println("Nothing");
        }
        else if (n % 2 == 0){
            System.out.println("Even");
        }
        else{
            System.out.println("Odd");
        }


        // Ternary Operator
        int i = 8, j = 0;
        j = (i > 6) ? 1 : 2;

        // Switch
        // Once one case matches, If we don't use "break" statement inside cases, all the successive cases will be executed from the 1st match.
        n = 3;
        switch(n){
            case 1:
                System.out.println("One");
                break;
            case 2:
                System.out.println("Two");
                break;
            case 3:        
                System.out.println("Three");
                break;
            default:
                System.out.println("No Match");
        }

        // We can't use double in switch, But we can use string in switch in 1.7 version & later.

        
        // Iteration
        // while, do while, for, for-each
        i = 1;
        while (i <= 5){
            System.out.println("Hello");
            i++;
        }

        i = 9;   // This prints "Hello" once.
        do{
            System.out.println("Hello");
            i++;
        } while(i <= 5);

        
        for(int i1 = 0; i1 <= 5; i1++){
             System.out.println("Hello");
        }


        // Nested for loops.
        for( i = 1; i <= 4; i++){
            for( j = 1; j <= 4; j++){
                System.out.print("* ");
            }
            System.out.println(); // To print newline.
        }
        
        int j1 = 5;
        System.out.println("Value of j1 is" + j1);   // Concatenation inside print.

        // continue, break are same as in Python, C++

    }
}  