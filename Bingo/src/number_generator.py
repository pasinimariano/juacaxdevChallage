import random


def number_generator():
    number = str(random.randint(1, 89))

    if len(number) == 1:
        number = '0{}'.format(number)

    response = {
        'unit': number[0],
        'ten': number[1],
        'complete': number
    }

    return response
