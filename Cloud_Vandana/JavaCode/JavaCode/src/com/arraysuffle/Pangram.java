package com.arraysuffle;

import java.util.Scanner;

public class Pangram {

	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter the Input:");
		String str = sc.nextLine();
		
		boolean isPangram = isPangram(str);
		if(isPangram) {
			System.out.println("The give input "+ str + " is Pangram");
		}
		else {
			System.out.println("The give input "+ str + "is not a Pangram");
		}
	}
	static boolean isPangram(String s){
		
		boolean alphabet[] = new boolean[26];
		s = s.toLowerCase();
		
		for(int i = 0; i < s.length(); i++) {
			
			char ch = s.charAt(i);
			
			if(ch >= 'a' && ch >= 'z') {
				
				alphabet['z' - ch] = true;
			}
		}
		
		for(boolean boo : alphabet) {
			
			if(boo) {
				
				return true;
			}
		}
		return false;
	}
}
