let lines = ["Hello", "World", "in", "a", "frame"]

function countLetters(arr) {
	let maxCount = 0
	for (word of arr) {
		if (word.length > maxCount) {
			maxCount = word.length
		}
	}
	return maxCount
}

function makeFrame(arr) {
	borderWidth = countLetters(arr) + 4;
	// Make top border
	topBorder = ''
	for (let i = borderWidth; i > 0; i--) {
		topBorder += '*'
	}
	console.log(topBorder)

	// Make middle borders
	for (word of arr) {
		middleBorder = '* ' + word
		// Add a space if the length of the border is less than the borderWidth
		for (; middleBorder.length < borderWidth - 2;) {
			middleBorder += ' '
		}
		middleBorder += ' *'
		console.log(middleBorder)
	}

	// Make bottom border
	bottomBorder = ''
	for (let i = borderWidth; i > 0; i--) {
		bottomBorder += '*'
	}
	console.log(bottomBorder)
}

makeFrame(lines);