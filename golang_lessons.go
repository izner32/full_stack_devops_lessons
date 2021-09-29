// LESSON 1.1 - ANATOMY OF A GO PROGRAM 
package main 

import ("fmt") // doesn't end with a semicolon just like in c++,java,mql4/mql5 

func main () {
    fmt.Println("hello world")
}

// LESSON 1.2 - GO TOOLS 
go run firstFile.go // execute this in cmd 

// LESON 2.1 - NUMBERS AND ASSIGNMENTS 
package main 

import ("fmt") // this package contains printing methods 

func main () {
	// declaration of variables
	var x int 
	var y int 

	// assigning values to variables
	x = 1
	y = 2 

	// declaration and assignment 
	var a int = 1

	// assignment only, no more datatype declaration
	a := 2 

	// multiple assignment just like in python
	a, b := 1.0, 2.0 // like saying a := 1.0 , b := 2.0

	// %v is for the value, %T is for the datatype
	fmt.Printf("x=%v, type of %T\n", x, x) // printing just like in c, jeezus
	fmt.Printf("x=%v, type of %T\n", y, y)
}

// LESSON 2.1.5 - GO DATATYPES 
func main () {
	// signed - positive + negative | unsigned - only positive
	// only integers has signed and unsigned in go unlike in c++
	
	// int - could be int8 up to 64 could be uint8 up to uint64 | there is also a special case which is uintptr, byte, rune
	var x int = 1 

	// float32, float64 - for numbers with floating values
	var y float32 = 2.1

	// complex64, complex128 - contains real and imaginary component 
	var z complex64 = complex(9,2) // yep you need to use complex function 

	// booleans - true or false 
	var a bool // default is false 

	// strings - cluster of characters 
	var b str = "abakada"
}

// LESSON 2.2 - CONDITIONALS 
func main () {
	x := 10 
	y := 20
	// conditionals 
	if x > 5 {
		fmt.Println("x is bigger dude")
	}

	// logical operator - &&(and), ||(or), !(not)
	if x > 5 && y < 30 { // both condition must be true to execute 
		fmt.Println("do this")
	}

	// assigning value then condition 
	if frac := a / b; frac > 1 { // we're assigning value to frac, then use semicolon to separate it from conditions then check the condition 

	}
}