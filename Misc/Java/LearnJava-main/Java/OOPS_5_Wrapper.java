public class OOPS_5_Wrapper {
     public static void main(String[ ] args){
         
        int i = 5;                            // i : Primitive variable. Int is primitive datatype
        Integer ii = new Integer(5);   // ii : reference variable. Integer is Wrapper class.

        // ( Integer ii = new Integer(i); ) : Putting the primitive inside the Wrapper class argument is called Boxing/Wrapping.  

        int j = ii.intValue();   // Unboxing - Unwrapping.

        Integer val = i;    // AutoBoxing - AutoWrapping.
        int k =  val;       // AutoUnboxing - AutoUnWrapping

        // Primitives are faster than Wrapper classes. But the reason for having this wrapperClasses is that
        // there are certain frameworks of Java that work only with WraperClasses. Ex: Collection API, Hybernet.

        String str  = "123";   
        // parseInt is a static method, so we need to use class name to use it.
        int n  = Integer.parseInt(str);

        System.out.println(n);
     }
}

