inferify
===

Used to return the datatype that is common for an array or Object sent in.

This can be used to infer datatypes of values from data that does not support datatype declerations, such as CSV.

A possible use case would be:

* Select few random rows from a CSV.
* Send for inspection.
* Continue process CSV based on now-known, data types.
	
Usage:

````
var dt = inferify([]);
````

Returned Data Type can be a string with one of the following values:

* string
* date
* integer
* float
