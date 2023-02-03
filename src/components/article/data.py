"""
3[a] -> aaa
3[a]2[b] => aaabb
3[2[a]b] -> 3[aab] ->  aabaabaab
12[a] = aaaaaaaaaaaa
"""
def expand(word):
    result_string = ""
    word_portions = separate_word_portions(word)
    for i in word_portions: 
        separated = separate_digit_letter(word)
        for x in range(separated[0]):
            result_string += separated[1]
    return result_string
    pass

def separate_digit_letter(word):
    digit = 1
    for i in word:
        if i.isnumeric():
            if digit != 1:
                digit * 10
                digit += i
            else:
                digit = i
        elif i == '[' or ']':
            continue
        else:
            letter = 1   
    return [digit, letter]
# 3[2[a]b] -> aabaabaab  
def separate_word_portions(word):
    arr = []

    for i in range(len(word)):
        sub_str = ""
        if word[i].isnumeric:
            if i == 0:
                continue
            if word[i-1] == '[':
                
                new_word = word[i:]
                separate_word_portions(new_word)
        if word[i].isnumeric() or i == '[' or word[i].isalpha():
            sub_str += i
        elif word[i] == ']':
            sub_str += i
            arr.append(sub_str)
            sub_str = ""
    # arr = ["3[a]","2[b]"]
    return arr
expand("3[a]2[b]")