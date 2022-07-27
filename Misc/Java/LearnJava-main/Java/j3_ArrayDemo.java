import java.net.StandardSocketOptions;

class Stu{
    int name;
    int roll;
}

class Calc{
    public int add(int ... arr){ // Variable length arguments. Will be stored as an array. We need to put 3 dots.
        int sum = 0;
        for(int i = 0; i < arr.length; i++){
            sum += arr[i];
        }
        return sum;
    }
}

public class j3_ArrayDemo {
    public static void main(String args[]){

        // In Java, Arrays are objects.
        // Size must be specified. Once specified, It is fixed. All elements will be initialised to 0.
        int nums[] = new int[4];
        nums[0] = 8;
        nums[1] = 12;
        nums[2] = 76;
        nums[3] = 54;
        nums[2] = 99;

        int nums1[]  = {1,2,3,4};

        for(int i = 0; i < 4; i++ ){
            System.out.println(nums[i]);
        }

        Stu s1 = new Stu();
        Stu s2 = new Stu();
        Stu s3 = new Stu();
        Stu s4 = new Stu();
        Stu s[] = {s1,s2, s3,s4};   // Array of objects


        // 2D Array
        int d[][] = {   { 1,2,3}, 
                        { 4,5,6},
                        { 7,8,9},
                        { 0,4,5}
                    };
        for(int i =0; i <4; i++){
            for(int j =0; j <3; j++){
                System.out.print(" " + d[i][j]);
            }
            System.out.println();
        }            


        // Jagged Array
        int d1[][] = {  { 1}, 
                        { 4,5,6},
                        { 7,8},
                        { 0,4,5}
                    };

        for(int i =0; i <d1.length; i++){
            for(int j =0; j <d1[i].length; j++){
                System.out.print(" " + d[i][j]);
            }
            System.out.println();
        }            


        // Enhanced For Loop.
        for(int k[] : d){
            for(int l: k){
                System.out.print(" " + l);
            }
            System.out.println();
        }

        int a[] = {1,2,3,4};
        for(int k: a){
            System.out.println(k);
        }

        // VarArgs
        Calc obj = new Calc();
        int ans1 = obj.add(1,2,3);
        int ans2 = obj.add(1,2,3,4,5,6);
        System.out.println(ans1);
    }
}
