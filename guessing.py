from random import randint
import sys
# generate a number 1~10
answer = randint(1, 10)

def run_guess(guess, answer):
    if  0 < guess < 11:
        if guess == answer:
            print('you are a genius!')
            return True
    else:
        print('hey bozo, I said 1~10')
        return False

# def check_input(guess):
#     return 0 < guess < 11

# def check_match(guess, answer):
#     return guess == answer


# input from user?
# check that input is a number 1~10
if __name__ == '__main__':        
    while True:
        try:
            guess = int(input('guess a number 1~10:  '))
            if (run_guess(guess, answer)):
                break

        except ValueError:
            print('please enter a number')
            continue
