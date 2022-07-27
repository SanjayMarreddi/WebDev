class A{

    final int DAY1 = 44; // From now, DAY1 cant be changed. It is constant.

    final int DAY; 
    public A(){
        DAY = 10;
        // From now, DAY cant be changed.
    }

    // If I make my method as final, No one can override it.    
    public final void show(){
        System.out.println("in A show");
    }
}

class B extends A {
    // The below method shows error since A has final keyword in its show method.
    // public void show(){
    //     System.out.println("in B show");
    // }
}

// It can thought of as B is taking all the credits of class A. So, If the user of class A dont want to make it extendable to 
// anyone else, He uses "final" keyword in the class as above. Hence the below commented code doesnt work.

// final class A{

// }
// class B extends A{  

// } 

public class j5_FinalKeyword {

    public static void main(String[] args){
        A obj = new A();
        System.out.println(obj.DAY);
    }   
}


/*
So, final keyword is used for 3 purposes:
for Variables:   To make it constant.
for Methods:     To make it non overridable.
for Class:       To make it non extendable.
*/