
// If we dont want to allow the users to make the objects using this class, we use abstract keyword. May be we just made this class for allowing it to be
// extended by some other classes Men, etc.. But wont want to allow maing objects from this.
abstract class Human{
    
    public abstract void eat();   // Just declaring, not defining. abstract is compulsory for that.
    // Now this method is called abstract method. If we have an abstract method, the class must be abstract too.

    public void walk(){

    }
}

// When we extend an abstract class, its COMPULSORY to define the abstract method if it contains one.
class Men extends Human{
    public void eat(){
        
    }
}

// Here:
// Human - Abstract Class
// Men - Concrete Class

/*
* Abstract class means we can't make the objects of this class.
* Abstract method means we just declare it and wont define it. We define it in a sub class.
* */


public class OOPS_6_Abstract {
    public static void main(String[ ] args){
        // Human obj = new Human();   -> Error due to above abstract

        Human obj = new Men();

    }
}
