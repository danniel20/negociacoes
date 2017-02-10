export class HttpService {

	_handleErros(res){

		if(!res.ok){
			throw new Error(res.statusText);
		}

		return res;
	}

	get(url){

		//usando fetch api ECMA 2016
		return fetch(url)
				.then(res => this._handleErros(res))
				.then(res => res.json());

		/*
		return new Promise((resolve, reject) => {

			let xhr = new XMLHttpRequest();

			xhr.open("GET", url);
			
			xhr.onreadystatechange = () => {
				
				if(xhr.readyState == 4){
					if(xhr.status == 200){						
						resolve(JSON.parse(xhr.responseText));
						
					}else{
						reject(xhr.responseText);
					}
				}
			};

			xhr.send();

		});*/
	}

	 post(url, dado) {

	 	//usando fetch api
	 	return fetch(url, {
	 		headers: {"Content-type": "application/json"},
	 		method: 'post',
	 		body: JSON.stringify(dado)
	 	})
	 	.then(res => this._handleErros(res));

	 	/*
        return new Promise((resolve, reject) => {

            let xhr = new XMLHttpRequest();
            xhr.open("POST", url, true);
            xhr.setRequestHeader("Content-type", "application/json");
            xhr.onreadystatechange = () => {

                if (xhr.readyState == 4) {

                    if (xhr.status == 200) {

                        resolve(JSON.parse(xhr.responseText));
                    } else {

                        reject(xhr.responseText);
                    }
                }
            };
            
            xhr.send(JSON.stringify(dado));
        });*/

    }
}