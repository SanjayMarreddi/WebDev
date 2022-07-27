
// Lets say manager gives this interface to give an idea of what all funtions one should implement.
interface Abc_{
    void show();    
}

// We always define a class that implements Abc and we define functions that are declared inside interface here.
class Implementor implements Abc_{
    public void show(){
        System.out.println("Anything!");
    }
}

public class j7_Interfaces {
    public static void main(String[] args){
        Abc_ obj =  new Implementor();
        obj.show();
    }
}
