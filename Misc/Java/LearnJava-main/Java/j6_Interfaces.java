// We can't inherit more than 1 class in Java, When there is a need for doing that, We make the classes into interfaces & extend 1 class, whereas all the other
// interfaces can be implemented with this as shown below
// Note that we use "implements" keyword for interfaces.

// Interface is same like Abstract Class.
// Diff is, Interfaces must have all methods as abstract. But in abstract classes, we can have normal & abstract methods.
// Also, we can just create references of interfaces, but we can't create objects of it.

// Main diff between interfaces & abstract classes:  
// - All methods are by default "public abstract" in  interfaces.
// - We can inherit multiple interfaces using (implements) but we can't do with abstract classes ( extends )
// - Given a choice, If we don't need to define methods, go for interfaces since they can be used later for inheriting.

// abstract class Writer{}
interface Writer{
    void write();    // "public abstract" keywords are not needed. It already assumes to be present.

    /* We can define any methods here as shown below. Just declaring as shown above.
     void read(){

     }*/
}

class Abc{

}

// "extends" should come before "implements" ig. We can extend 1 class but can implement any number of interfaces.
class Pen extends Abc implements Writer{
    public void write(){
        System.out.println("I am a Pen");
    }
}

class Pencil implements Writer{
    public void write(){
        System.out.println("I am a Pencil");
    }
}

class Kit{
    public void doSomething(Writer p){
        p.write();
    }
}


public class j6_Interfaces {
    public static void main(String[] args){
        Kit k = new Kit();
        Pen p = new Pen();
        Pencil pc = new Pencil();
        k.doSomething(p);
        k.doSomething(pc);
    }
}
