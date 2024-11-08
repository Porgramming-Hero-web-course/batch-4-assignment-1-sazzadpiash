{
    function countWordOccurrences(sentence: string, word: string): number {
        const allWords = sentence.toLowerCase().split(' ');
        const duplicateWords = allWords.filter(singleWord => singleWord === word.toLowerCase());
        return duplicateWords.length;
    }

}