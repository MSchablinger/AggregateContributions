function replacer(key, value) {
	if (value instanceof Map) {
		return {
			dataType: 'Map',
			value: Array.from(value.entries())
		};
	} else {
		return value;
	}
}

function reviver(key, value) {
	if (typeof value === 'object' && value !== null) {
		if (value.dataType === 'Map') {
			return new Map(value.value);
		}
	}
	return value;
}

Number.prototype.grouped = function() {
	return this.toLocaleString().replace(/[,\.]/, " ");
}
