package com.arraysuffle;

import java.util.Scanner;

public class RomanToInteger {

	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter the Roman Letters.");
		
		String roman = sc.next();
		
		int integer = romanToInteger(roman);
		System.out.println("The ingers value for the "+ roman + "is: "+integer);
	}
	
	static int romanToInteger(String st){
		
		int result = 0;
		for(int i = 0; i < st.length(); i++) {
			int cur_value = getValue(st.charAt(i));
			int next_Value = (i+1 < st.length()) ? getValue(st.charAt(i+1)) : 0;
			
			if(cur_value < next_Value) {
				result -= cur_value;
				
			}
			else {
				result += cur_value;
			}
				
		}
		return result;
	}
	static int getValue(char romanChar) {
		
		switch(romanChar) {
		
			case 'I' :
				return 1;
				
			case 'V' :
				return 5;
			case 'X' :
				return 10;
			case 'L' : 
				return 50;
			case 'C' :
				return 100;
			case 'D' :
				return 500;
			case 'M' :
				return 1000;
			default :
				return 0;
				
				
		}
	}
}
