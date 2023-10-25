class ModalHandler {
    constructor() {
        this.modal = document.getElementById("country-modal");
        this.flag = document.getElementById("flag")
        this.name = document.getElementById("modal-country-name");
        this.population = document.getElementById("population")
        this.capital = document.getElementById("capital")
        this.currency = document.getElementById("currency");
        this.languages = document.getElementById("languages-spoken");
        this.region = document.getElementById("region"); 
        this.nativeName = document.getElementById("native-name")

        this.initialModal = document.getElementById("initial-modal");
        this.closeInitialModalButton = document.getElementById("close-initial-modal");
        this.closeInitialModalButton.addEventListener("click", this.closeInitialModal.bind(this));
        this.initialModal.addEventListener("click", this.closeInitialModal.bind(this));
        this.initialModal.querySelector(".modal-content").addEventListener("click", (e) => {
            e.stopPropagation();
        });
    }
    
    openInitialModal() {
        this.initialModal.style.display = "block";
    }

    closeInitialModal() {
        this.initialModal.style.display = "none";
    }

    async openModal(country) {
        try {
            let data = await fetch(`https://restcountries.com/v3.1/name/${country}`)
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    } else {
                        throw new Error(response);
                    }
                });
            this.name.innerHTML = country;

            if (data.length > 1) {
                let currentCountry = this.name.innerHTML
                data.forEach((country, idx) => {
                    if (country.name.common === currentCountry)  {
                        data = [data[idx]]
                    }
                } )
            }
            
            this.flag.src = data[0].flags.png;

            const nativeNameObject = data[0].name.nativeName;
            let nativeName;
            for (let key in nativeNameObject) {
                if (nativeNameObject.hasOwnProperty(key) && data[0].region != 'Africa') {
                    if (data[0].name.common === nativeNameObject[key].common) {
                        nativeName = nativeNameObject[key].official;
                    } else {
                        nativeName = nativeNameObject[key].common;
                    }
                } else if (nativeNameObject.hasOwnProperty(key)) {
                    if (data[0].name.common === nativeNameObject[key].common) {
                        nativeName = nativeNameObject[key].official;
                    } else {
                        nativeName = nativeNameObject[key].common;
                    }
                    break
                }
            }
    
            if (nativeName) {
                this.nativeName.innerHTML = `Native Name: ${nativeName}`;
            } else {
                this.nativeName.innerHTML = "Native Name not available";
            }
            
            if (data[0].capital.length > 1) {
                this.capital.innerHTML = `Capital: ${data[0].capital[data[0].capital.length - 1]}`
            } else {
                this.capital.innerHTML = `Capital: ${data[0].capital}`
            }

            if (data[0].population < 1000000 ) {
                this.population.innerHTML = `Population: ${(data[0].population / 1000).toFixed(1)} thousand`
            } else if (data[0].population > 1000000 && data[0].population < 1000000000){
                this.population.innerHTML = `Population: ${(data[0].population / 1000000).toFixed(1)} million`
            } else {
                this.population.innerHTML = `Population: ${(data[0].population / 1000000000).toFixed(1)} billion`
            }

            const languages = Object.values(data[0].languages).join(', ')
            if (Object.values(data[0].languages).length > 1) {
                this.languages.innerHTML = `Languages spoken: ${Object.values(data[0].languages)[0] + ', ' + Object.values(data[0].languages)[1]}`;
            } else {
                this.languages.innerHTML = `Native language: ${Object.values(data[0].languages)}`;
            }

            const currencyInfo = Object.entries(data[0].currencies)
            .map(([currencyCode, currencyData]) => {
                if (currencyData.symbol === undefined) {
                    return `${currencyData.name}`
                } else {
                    return`${currencyData.name} ( ${currencyData.symbol} )`}
                })
            .join(', ');

            this.currency.innerHTML = `Currency: ${currencyInfo}`;

            this.region.innerHTML = `Region: ${data[0].region}`;

            this.modal.style.display = "block";

        } catch (error) {
            console.log("Failure!");
            console.error(error);
        }
    }

    closeModal() {
        this.refresh()
        const closeButton = document.querySelector(".close");
        closeButton.addEventListener("click", () => {
            this.modal.style.display = "none";
        });
    }
    
    refresh() {
        this.modal.style.display = "none"
    }
}

export default ModalHandler;