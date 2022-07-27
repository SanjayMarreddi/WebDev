/*
Inner Class: 
    Member Class
    Static Class
    Anonymous Class.

*/


class Outer{                  // Outer.class
    int a;
    public void show(){

    }

    class Inner{              // Outer$Inner.class       -> Member Class
        public void display(){
            System.out.println("Inside Inner");
        }
    }

    static int a1;
    public static void show1(){

    }

    static class Inner1{              // Outer$Inner1.class    -> Static Class
        public void display(){
            System.out.println("Inside Inner");
        }
    }
}


public class j4_InnerDemo {     // This will be named as j4_InnerDemo.class when this file will be compiled. Every Class becomes a class file.

    public static void main(String[] args){
        Outer obj = new Outer();
        obj.a = 5; obj.show();

        // To use the class (Inner) itself, we can use Outer class ( LHS )
        // To use the object of the Inner class, We need to use the object of outer class ( RHS )
        Outer.Inner obj1 = obj.new Inner();
        obj1.display();

        
        // Static Inner class accessing. We don't need object in RHS.
        Outer.Inner1 obj2 = new Outer.Inner1();
        obj2.display();


    }
}
