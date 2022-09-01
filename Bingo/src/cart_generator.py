from .number_generator import number_generator


class BingoCart:
    def __init__(self):
        self.numbers_in_use = []
        self.first_row = {'0': '', '1': '', '2': '', '3': '', '4': '', '5': '', '6': '', '7': '', '8': ''}
        self.second_row = {'0': '', '1': '', '2': '', '3': '', '4': '', '5': '', '6': '', '7': '', '8': ''}
        self.third_row = {'0': '', '1': '', '2': '', '3': '', '4': '', '5': '', '6': '', '7': '', '8': ''}
        self.flag = 0

    def set_first_row(self):
        while self.flag < 5:
            number = number_generator()
            number_unit = number['unit']
            number_ten = int(number['ten'])

            if number_unit not in self.numbers_in_use and number_ten < 9:
                self.numbers_in_use.append(number_unit)
                self.first_row[number_unit] = number['complete']
                self.flag += 1

    def set_unused_numbers(self):
        while self.flag < 7:
            number = number_generator()
            number_unit = number['unit']
            number_ten = int(number['ten'])

            if number_unit not in self.numbers_in_use and number_ten < 9:
                self.numbers_in_use.append(number_unit)
                self.second_row[number_unit] = number['complete']
                self.flag += 1

        while self.flag < 9:
            number = number_generator()
            number_unit = number['unit']

            if number_unit not in self.numbers_in_use:
                self.numbers_in_use.append(number_unit)
                self.third_row[number_unit] = number['complete']
                self.flag += 1

    def set_second_row(self):
        while self.flag < 12:
            number = number_generator()
            number_unit = number['unit']
            number_ten = int(number['ten'])
            number_ten_first_row = int(self.first_row[number_unit][1]) if self.first_row[number_unit] else 0
            number_ten_third_row = int(self.third_row[number_unit][1]) if self.third_row[number_unit] else 0
            counter = self.numbers_in_use.count(number_unit)

            if not self.second_row[number_unit] \
                    and self.first_row[number_unit] \
                    and number_ten > number_ten_first_row \
                    and counter < 2:
                self.numbers_in_use.append(number_unit)
                self.second_row[number_unit] = number['complete']
                self.flag += 1

            elif not self.second_row[number_unit] \
                    and self.third_row[number_unit] \
                    and number_ten < number_ten_third_row \
                    and counter < 2:
                self.numbers_in_use.append(number_unit)
                self.second_row[number_unit] = number['complete']
                self.flag += 1

            elif not self.second_row[number_unit] \
                    and not self.first_row[number_unit] \
                    and not self.third_row[number_unit] \
                    and number_ten < 9 \
                    and counter < 2:
                self.numbers_in_use.append(number_unit)
                self.second_row[number_unit] = number['complete']
                self.flag += 1

    def set_third_row(self):
        while self.flag < 15:
            number = number_generator()
            number_unit = number['unit']
            number_ten = int(number['ten'])
            number_ten_first_row = int(self.first_row[number_unit][1]) if self.first_row[number_unit] else 0
            number_ten_second_row = int(self.second_row[number_unit][1]) if self.second_row[number_unit] else 0
            counter = self.numbers_in_use.count(number_unit)

            if not self.third_row[number_unit] \
                    and self.first_row[number_unit] \
                    and number_ten > number_ten_first_row \
                    and counter < 2:
                self.numbers_in_use.append(number_unit)
                self.third_row[number_unit] = number['complete']
                self.flag += 1

            elif not self.third_row[number_unit] \
                    and self.second_row[number_unit] \
                    and number_ten > number_ten_second_row \
                    and counter < 2:
                self.numbers_in_use.append(number_unit)
                self.third_row[number_unit] = number['complete']
                self.flag += 1

    def get_rows(self):
        self.set_first_row()
        self.set_unused_numbers()
        self.set_second_row()
        self.set_third_row()

        rows = [
            list(self.first_row.values()),
            list(self.second_row.values()),
            list(self.third_row.values())
        ]

        return rows
