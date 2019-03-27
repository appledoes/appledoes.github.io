# Import #
from datetime import datetime

# Variables #
log = open("log.txt", "a+")

cr_elm = ""

# List of objects #
listOfObjs = {
    1: ".topic", 
    2: ".a1", 
    3: ".a2", 
    4: ".a3"
}

# List of commands #
listOfCmds = {
    "/clear",
    "/edit", 
    "/"
}

test = 1

# Functions #
print("Please type in the valid element you would like to edit below.\n")
print(listOfCmds)
print(listOfObjs)

def input_main(mn):
    input1 = input(mn)

def mnInput():
    input1 = input("")

    # If the input does not equal anything valid
    if input1 == listOfObjs[]:
        print("(Y/N)")
        input_main("")
    else:
        input_main("Sorry")
    
	# Input checking....
    



	
mnInput()