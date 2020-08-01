let lines = ["Hello", "World", "in", "a", "frame"]

// Return the number of letters of the longest word
function countMaxLetters(arr) {
	let maxCount = 0
	for (word of arr) {
		if (word.length > maxCount) {
			maxCount = word.length
		}
	}
	return maxCount
}

// Output the frame to the console
function makeFrame(arr) {
	let borderWidth = countMaxLetters(arr) + 4;
	
	// Make top border
	topBorder = ''
	for (let i = borderWidth; i > 0; i--) {
		topBorder += '*'
	}
	console.log(topBorder)

	// Make middle borders
	for (word of arr) {
		let middleBorder = '* ' + word
		// Add spaces if the length of the border is less than the borderWidth
		for (; middleBorder.length < borderWidth - 2;) {
			middleBorder += ' '
		}
		middleBorder += ' *'
		console.log(middleBorder)
	}

	// Make bottom border
	let bottomBorder = ''
	for (let i = borderWidth; i > 0; i--) {
		bottomBorder += '*'
	}
	console.log(bottomBorder)
}

makeFrame(lines);