 function showResult(id, text, isSuccess) {
	const element = document.getElementById(id);
	element.textContent = text;
	element.className = isSuccess ? 'success' : 'error';
	element.style.display = 'block';
	element.style.opacity = '1';
}

function convertJsonToObject() {
	const jsonInput = document.getElementById('jsonInput').value;
	try {
		const jsonObject = JSON.parse(jsonInput);
		showResult('jsonOutput', JSON.stringify(jsonObject, null, 2), true);
	} catch (error) {
		showResult('jsonOutput', 'Invalid JSON', false);
	}
}

function convertJsonToDate() {
	const jsonDateInput = document.getElementById('jsonDateInput').value;
	try {
		const data = JSON.parse(jsonDateInput);
		if (data.date && !isNaN(new Date(data.date).getTime())) {
			const date = new Date(data.date);
			showResult('jsonDateOutput', date.toString(), true);
		} else {
			showResult('jsonDateOutput', 'Invalid Date Format', false);
		}
	} catch (error) {
		showResult('jsonDateOutput', 'Invalid JSON', false);
	}
}

function convertJsonToCsv() {
	const jsonInput = document.getElementById('jsonCsvInput').value;
	try {
		const jsonArray = JSON.parse(jsonInput);
		if (Array.isArray(jsonArray) && jsonArray.length > 0) {
			const keys = Object.keys(jsonArray[0]);
			const csv = [
				keys.join(','),
				...jsonArray.map(row => keys.map(key => JSON.stringify(row[key])).join(','))
			].join('\n');
			showResult('csvOutput', csv, true);
		} else {
			showResult('csvOutput', 'Invalid JSON: Expected an array with objects.', false);
		}
	} catch (error) {
		showResult('csvOutput', 'Invalid JSON', false);
	}
}

function convertCsvToJson() {
	const csvInput = document.getElementById('csvInput').value;
	try {
		const lines = csvInput.trim().split('\n');
		if (lines.length > 1) {
			const keys = lines[0].split(',');
			if (keys.length > 0) {
				const jsonArray = lines.slice(1).map(line => {
					const values = line.split(',');
					return keys.reduce((obj, key, index) => {
						obj[key] = values[index];
						return obj;
					}, {});
				});
				showResult('jsonCsvOutput', JSON.stringify(jsonArray, null, 2), true);
			} else {
				showResult('jsonCsvOutput', 'Invalid CSV: No columns found.', false);
			}
		} else {
			showResult('jsonCsvOutput', 'Invalid CSV: No data found.', false);
		}
	} catch (error) {
		showResult('jsonCsvOutput', 'Invalid CSV', false);
	}
}

function createHash() {
	const hashInput = document.getElementById('hashInput').value.trim();
	if (hashInput.length > 0) {
		const hash = CryptoJS.SHA256(hashInput).toString();
		showResult('hashOutput', hash, true);
	} else {
		showResult('hashOutput', 'Input cannot be empty', false);
	}
}