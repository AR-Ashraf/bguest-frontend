export function waitForm(ms)  {
    return new Promise( resolve => { setTimeout(resolve, ms); });
  }; 

export function OpenLink (props)  {
  window.location.assign(props);      
}

export function OpenLinkNewTab (props) {
  window.open(props, '_blank');
}


export function convertArrayOfObjectsToCSV(array) {
   let result;
  
  	const columnDelimiter = ',';
  	const lineDelimiter = '\n';
  	const keys = Object.keys(array[0]);
  
  	result = '';
  	result += keys.join(columnDelimiter);
  	result += lineDelimiter;
  
  	array.forEach(item => {
  		let ctr = 0;
  		keys.forEach(key => {
  			if (ctr > 0) result += columnDelimiter;
  
  			result += item[key];
  			
  			ctr++;
  		});
  		result += lineDelimiter;
  	});
  
  	return result;
  }

  export function downloadCSV(array, filename) {
    	const link = document.createElement('a');
    	let csv = convertArrayOfObjectsToCSV(array);
    	if (csv == null) return;
    
    	if (!csv.match(/^data:text\/csv/i)) {
    		csv = `data:text/csv;charset=utf-8,${csv}`;
    	}
    
    	link.setAttribute('href', encodeURI(csv));
    	link.setAttribute('download', filename);
    	link.click();
    }