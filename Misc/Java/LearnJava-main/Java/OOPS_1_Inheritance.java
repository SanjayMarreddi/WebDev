
class Calc2                    // Super/Parent/Base Class
{
    public int add(int i, int j){
        return i+j;
    }
}

class Calc2Adv extends Calc2    // Sub/Child/Derived Class    [ Java, OOPS, C++ ] Scenarios
{
    public int sub(int i, int j){ 
        return i-j;
    }
}

class Calc2VeryAdv extends Calc2Adv   // This & above class has IS-A relationship. Example CalcAdv IS A CalcVeryAdv
{
    public int mul(int i, int j){ 
        return i*j;
    }
} 

// Note that Java does support multi level inheritance as shown above.
/* 
   But it wont support "multiple level inheritance." becoz:
   It cant resolve the issue of ambiguity of which class's method should be called when the same method is present in two classes from which
   the class under consideration is inheriting. So, it just removes this concept from Java :)
*/ 

public class OOPS_1_Inheritance    // HAS-A relation. This class can access obj.
{
    public static void main(String[ ] args){
        Calc2VeryAdv obj = new Calc2VeryAdv();
        int r1 = obj.add(3,5);
        int r2 = obj.sub(3,5);
        int r3 = obj.mul(3,5);
        System.out.print( r1 + " , " +  r2 + " , " + r3 );
    }   
}
