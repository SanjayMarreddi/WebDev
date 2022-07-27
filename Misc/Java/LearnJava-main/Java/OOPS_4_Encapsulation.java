class Student{

    private int rollno;
    private String name;

    // Getters & Setters

    // The variables should be private & the methods should be public. 
    // We are binding our variables/data with the methods. This concept is called Encapsulation.

    // Advantages/Need for encapsulation:
    // Safety -> We can check for some things like user has been logged in or not before accessing.
    // We can maintain logs when the values are being changed/ values are being retrieved.

    public void setRollno(int r){
        System.out.println("The value of rollno changed");
        rollno = r;
    }
    public int getRollno(){
        // if (user.islogged_in or some_other_method) .. Then only allow this fetching of roll no.
        System.out.println("The user fetched the Rollno now");
        return rollno;
    }

    public void setName(String s){
        name = s;
    }
    public String getName(){
        return name;
    }
}

public class OOPS_4_Encapsulation {
        public static void main(String[ ] args){
            Student s1 = new Student();
            s1.setRollno(3);
            s1.setName("Sanjay");
            System.out.println(s1.getRollno());
            System.out.println(s1.getName());
        }
}
