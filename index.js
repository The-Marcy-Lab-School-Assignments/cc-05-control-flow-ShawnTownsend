//1
function absoluteValue(integer){
    if (isNaN(integer)) {
        return 'null'
    }
    else if (integer >= 0)
		return integer;
	else
		return integer * (-1);
}