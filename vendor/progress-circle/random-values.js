function RandomValueOne()
{
	var min = 211;
	var max = 227;
	var result = 0;
	
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
function RandomValueTwo()
{
	var min = 17;
	var max = 33;
	var result = 0;

	return Math.floor(Math.random() * (max - min + 1)) + min;
}
function RandomValueThree()
{
	var min = 0;
	var max = 17;
	var result = 0;
	
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function RandomValue()
{	
	var ResultOne = 0;
	var ResultTwo = 0;
	var ResultThree = 0;
	ResultOne = RandomValueOne();
	ResultTwo = RandomValueTwo();
	ResultThree = RandomValueThree();

	var ElementOne = document.getElementById('value-one'),
	ValueOne = ResultOne;
	ElementOne.innerHTML = ResultOne;

	var ElementTwo = document.getElementById('value-two'),
	ValueTwo = ResultTwo;
	ElementTwo.innerHTML = ResultTwo;

	var ElementThree = document.getElementById('value-three'),
	ValueThree = ResultThree;
	ElementThree.innerHTML = ResultThree;
}

