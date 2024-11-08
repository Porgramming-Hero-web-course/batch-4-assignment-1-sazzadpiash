{
    class Car {
        make: string;
        model: string;
        year: number;
        constructor(make: string, model: string, year: number) {
            this.make = make;
            this.model = model;
            this.year = year;
        }

        getCarAge(currentYear: number = new Date().getFullYear()): string {
            return (`${currentYear - this.year} (assuming current year is ${currentYear})`);
        }

    }
}