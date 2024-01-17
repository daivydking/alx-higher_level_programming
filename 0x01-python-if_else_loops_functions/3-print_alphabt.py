#!/usr/bin/python3
for char in range(26):
    if char !=4 and !=16:
        print("{:s}".format(chr(char + ord("a"))), end="")
