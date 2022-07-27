class A11{
    int i;
    public A11(){
        System.out.println("in A");
    }
    public A11(int i){
        System.out.println("in A int");
    }
    public void show(){
    }
}

// Example demonstrating "super" method.
class B11 extends A11 {
    int i;
    public B11(){
        super();    // By default all the sub classes have this super() method written by compiler. It calls the constructor of the super class. 
                    // If we want we can call super(SomeNumber) here to call A(int i) from B().
        System.out.println("in B");
    }
    public B11(int i){
        super(i);    // Now it will call A(int i).  If we dont explicitly write the super(i), It will execute "super()" and B(int i) will call A().
        System.out.println("in B int");
    }

   
    public void show(){
        
        super.show();  // If we want to call the show method of super/parent class, we can do like this.
        
        i = 8;   // Assigns the value of i in this class.
    
        super.i = 7;  // To assign the value of the parent/super class's i variable.
    }
}

public class OOPS_2_Super {
    public static void main(String[ ] args){
        B11 obj = new B11(5);
    }
}
