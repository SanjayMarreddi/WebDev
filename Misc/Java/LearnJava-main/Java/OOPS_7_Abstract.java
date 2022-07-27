class Printer{

    // This Number actually is an abstract class. Can check docs.
    public void show(Number i){
        System.out.println(i);
    }

    // The below methods can be replaced by above single method. We are using super class ( Number ) of Integer & Double.
    // public void show(Integer i){
    //     System.out.println(i);
    // }

    // public void show(Double i){
    //     System.out.println(i);
    // }
}

// We use abstract class if we dont want to allow making objects of that class i.e. using `name obj = new name()`
// It also helps in reducing the code size as shown above where multiple classes are inheriting the same abstract class.

public class OOPS_7_Abstract {
     public static void main(String[ ] args){
        Printer obj = new Printer();
        obj.show(5);
        obj.show(5.4);
     }   
}
