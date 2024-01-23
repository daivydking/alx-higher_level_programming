#!/usr/bin/python3
def new_in_list(my_list, idx, element):
    span = len(my_list)

    new_element = my_list[:]

    if 0 <= idx < span:
        new_element[idx] = element

    return (new_element)
