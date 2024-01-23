#!/usr/bin/python3
def multiple_returns(sentence):
    length_sen = len(sentence)

    if (length_sen == 0):
        new_tuple = (length_sen, None)
    else:
        new_tuple = (length_sen, sentence[0])

    return (new_tuple)
