class A1 {
    public void show(){
        System.out.println("in A");
    }
}

class B1 extends A1 {     // class B's show method overrides the show method of A. This is called "Method Overriding"

    @Override   // This is an annotation in JAVA. This helps in finding out if we dont have the function name following this in the parent class.
    public void show(){    // If we write show1 method here, It shows Compilation error since A doesnt have show1 method.
        System.out.println("in B");
    }

    public void config(){
        System.out.println("config");
    }
}

class C extends A1 {
    public void show(){
        System.out.println("in C");
    }
}

public class OOPS_3_MethodOverriding{

    public static void main(String[ ] args){
        B1 obj1 =  new B1();
        obj1.show();

        // We can also do this. We have reference of A but the object of B, since A is the parent class, B is the child class.
        A1 obj2 = new B1();    // RUN TIME POLYMORPHISM ( Becoz of the Method Overriding) -> Since we are deciding which show to call in run time only.
        obj2.show();

        // obj2.config();   ==> This wont work since A doesnt have this method.


        // Now our refernece of A is referring to C object.
        obj2  = new C();
        obj2.show();

        // This way of changing the reference to different objects & calling diff methods using RUN TIME POLYMORPHISM is called Dynamic Method Dispatch.
    }

}