var str = "abcabcbb";
var len = str.length;
var count = 0;
	
for(var i = 0; i < len; i++)
{
	var visited = [];
	
	for(var j = i; j < len; j++)
	{
		if (visited[str.charAt(j)] == true)
			break;
		else
		{
			count = Math.max(count, j - i + 1);
			visited[str.charAt(j)] = true;
		}
	}
	visited[str.charAt(i)] = false;
}
console.log(count);
