class Calc_{
    int num1, num2, result;     // In Java, Unlike C++, If variables are not defined they don't have Garbage Value, They have 0.

    // By default, Java makes constructor with no args. It just allocates the memory. It is called Default constructor, which is UN PARAMETERISED.

    // Constructor doesn't return value. We should not even mention void.
    // It gets automatically called when object is created (using new).
    // It has same name as of Class name.    
    
    public Calc_(){
        num1 = 5;
        num2 = 5;
        System.out.println("Inside Constructor1");
    }
    public Calc_(int n){
        num1 = n; 
        num2 = n;
    }
    public Calc_(double d, int n){
        num1 = (int)d; 
        num2 = n;
    }
    public Calc_(int num1, int num2){
        // If we don't use "this" keyword, Local variable shadows the instance/Global variable. To access the instance variable from inside the
        // Constructor,  when we have local variables with the same name, we use this keyword.
        this.num1  = num1;  
        this.num2  = num2;
    }

    public void perform(){
        result =  num1 + num2;
    }
}

// Method Overloading  : Same method name, with different number/type of arguments.
class Casio{

    int num1, num2; String op;
    
    // Constructor Overloading
    public Casio(){
        num1 = 0; num2 = 0; 
        op = "Nothing";
    }
    public Casio(int i){
        num1 = i; num2 = 0; 
        op = "Nothing";
    }
    public Casio(int i, int j){
        num1 = i; num2 = j; 
        op = "Nothing";
    }
    public Casio(int i, int j, String oper){
        num1 = i; num2 = j; 
        op = oper;
    }


    // Method Overloading
    public void add(int i, int j){
        System.out.println(i+j);
    }
    public void add(int i, int j, int k){
        System.out.println(i+j+k);
    }
    public void add(double i, double j){
        System.out.println(i+j);
    }
}


// For Static Demo
class Emp{
    int eid, sal;
    static String ceo;    
    // Static elements are not object specific. Their values remain same in all the objects.
    // Even if one of the object changes its value, It changes the value of other objects also.
    // Also, this "ceo" attribute is no more on the heap. It goes into the class loader memory. 

    static{   // This gets executed When you load the class. It happens only once even if many objects are created. 
        ceo = "Larry";
    } 

    public Emp(){
        eid = 1;
        sal = 3000;
        // Initializing the CEO for each employee of the same Company while we are creating an object for each employee is redundant.
        // Instead, we use the static block for initialising static elements.
    }

    public void show(){
        System.out.println(eid + " : " + sal + " : " + ceo);
    }
}


public class j1_basicOOPS {

    int i = 0;
    static int j = 0;
    
    public static void main(String args[]){              // Using static here means that to call main we don't need an object.
        
        // Here i can't be used since this main method is static but i is not static. 
        // We can use only static things inside static keyword.

        // i = 1;   This doesn't work.
        j = 1;

        Calc_ obj;  // "obj" is the reference to Calc object.
        obj = new Calc_();    // We are calling constructor here using "Calc_()"
        // Above two lines can be written in short as:  `   Calc_ obj = new Calc_();  `
        
        obj.num1 = 3;
        obj.num2 = 5;
        obj.perform();
        System.out.println(obj.result);


        Calc_ obj1 = new Calc_();
        Calc_ obj2 = new Calc_(5);
        Calc_ obj3 = new Calc_(5.5, 6);


        Casio obj4 = new Casio();
        obj4.add(1,2);
        obj4.add(1,2,3);
        obj4.add(1.4, 3.6);


        // For Static Demo
        Emp e1 = new Emp();
        e1.eid = 1; e1.sal = 10; 
        e1.ceo = "abc";

        Emp e2 = new Emp();
        e2.eid = 2; e2.sal = 20; 
        e2.ceo = "abc";

        e1.ceo = "xyz";

        // We can directly use the class name for static Keywords too.
        // That is if something is static, we don't need object to use that. So that's the reason to make the main method static too.
        // Because, main is the function where the execution starts & it starts creating other objects, so it should be callable without having
        // the need to create object. 
        Emp.ceo = "xyz";

        e1.show();
        e2.show();


    }   
}
