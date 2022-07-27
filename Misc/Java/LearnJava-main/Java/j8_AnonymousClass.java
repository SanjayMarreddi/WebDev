
// When the purpose of defining a class is just to override a method of earlier class, we can do it using anonymous classes too.
// They dont have name. They just put their implementation  right after calling the object as shown below.

class A_{
    public void show(){
        System.out.println("in A show");
    }
}

public class j8_AnonymousClass {
     public static void main(String[] args){
        A1 obj = new A1(){
                            public void show()
                            {
                                System.out.println("I am the best");
                            }

                       };
        obj.show();
     }
}


// Application to Interface example from j_7

interface Abc_2{
    void show();    
}

class j7_Interfaces_ {
    public static void main(String[] args){
        Abc_2 obj =  new Abc_2()
                   {
                        public void show(){
                            System.out.println("Anything!");
                        }
                   };      
        obj.show();
    }
}
