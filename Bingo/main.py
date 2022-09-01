from tabulate import tabulate

from src.cart_generator import BingoCart

if __name__ == '__main__':
    cart = BingoCart()
    rows = cart.get_rows()

    print('******************* BINGO *******************')
    print(tabulate(rows, tablefmt='fancy_grid'))
