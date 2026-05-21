function bubbleSort(numbers) {
  for (let outerIndex = 0; outerIndex < numbers.length - 1; outerIndex++) {
    for (let innerIndex = 0; innerIndex < numbers.length - 1 - outerIndex; innerIndex++) {
      if (numbers[innerIndex] > numbers[innerIndex + 1]) {
        const temporaryValue = numbers[innerIndex];

        numbers[innerIndex] = numbers[innerIndex + 1];
        numbers[innerIndex + 1] = temporaryValue;
      }
    }
  }

  return numbers;
}
