{
    function removeDuplicates(numbers: number[]): number[] {
        return numbers.reduce((uniqueNumbers: number[], num) => {
            if (!uniqueNumbers.includes(num)) {
                uniqueNumbers.push(num);
            }
            return uniqueNumbers;
        }, []);
    }
}