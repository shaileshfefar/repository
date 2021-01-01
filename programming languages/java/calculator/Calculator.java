/*
  @Program name: Calculator demo program
  @Date: 05/12/2012
  @Author: Shailesh Fefar
  @File name: Calculator.java
  @Version: Java 1.8
  @Licence Type: MIT License
*/

import java.util.Scanner;
// Class declartion
public class Calculator
{
  // main() declration
  public static void main(String args[])
  {
    Scanner sc=new Scanner(System.in);
    int choice=0;
    float value1=0.0f, value2=0.0f,result=0.0f;
    do
    {
      // Print choice based menu
      System.out.println("1.-> Addition");
      System.out.println("2.-> Subtraction");
      System.out.println("3.-> Multiplication");
      System.out.println("4.-> Divison");
      System.out.println("5.-> Exit");
      // Input choice from the user
      System.out.print("Enter your choice:");
      choice=sc.nextInt();
      switch(choice)
      {
        // Addtion operation
        case 1:
          System.out.print("Enter value1:");
          value1=sc.nextFloat();
          System.out.print("Enter value2:");
          value2=sc.nextFloat();
          result=value1+value2;
          System.out.print("Addition of "+value1+" and "+value2+" = "+result+"\n");
          break;
        // Subtraction operation
        case 2:
          System.out.print("Enter value1:");
          value1=sc.nextFloat();
          System.out.print("Enter value2:");
          value2=sc.nextFloat();
          result=value1-value2;
          System.out.print("Subtraction of "+value1+" and "+value2+" = "+result+"\n");
          break;
        // Multiplication operation
        case 3:
          System.out.print("Enter value1:");
          value1=sc.nextFloat();
          System.out.print("Enter value2:");
          value2=sc.nextFloat();
          result=value1*value2;
          System.out.print("Multiplication of "+value1+" and "+value2+" = "+result+"\n");
          break;
        // Division operation
	    case 4:
          System.out.print("Enter value1:");
          value1=sc.nextFloat();
          System.out.print("Enter value2:");
          value2=sc.nextFloat();
          result=value1/value2;
          System.out.print("Division of "+value1+" and "+value2+" = "+result+"\n");
          break;
        // Exit
        case 5:
          System.out.print("Bye Bye!");
          return;
        // Default
        default:
          System.out.print("Invalid choice!\n");
      }
    }while(choice!=5);
  }
}