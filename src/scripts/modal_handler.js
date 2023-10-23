class ModalHandler {
    constructor() {
        this.modal = document.getElementById("country-modal");
        this.flag = document.getElementById("flag")
        this.name = document.getElementById("modal-country-name");
        this.population = document.getElementById("population")
        this.capital = document.getElementById("capital")
        this.nativeName = document.getElementById("native-name");
        this.languages = document.getElementById("languages-spoken");
        this.region = document.getElementById("region"); 
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


            function filter(obj, predicate) {
                return Object.keys(obj)
                    .filter(key => predicate(obj[key]))
                    .reduce((res, key) => {
                        res[key] = obj[key];
                        return res;
                    }, {});
            }

            let filtered = filter((data[0], country => country.independent))

            console.log(filtered)

            this.capital.innerHTML = `Capital: ${filtered.capital}`

            this.population.innerHTML = `Population: ${Math.floor(data[0].population / 1000000)} million`

            const languages = Object.values(data[0].languages).join(', ')
            this.languages.innerHTML = `Languages spoken: ${languages}`;

            // this.nativeName.innerHTML = `Native Name: ${data[0].name.nativeName.ara.common}`;

            this.region.innerHTML = `Region: ${data[0].region}`;

            this.modal.style.display = "block";

        } catch (error) {
            console.log("Failure!");
            console.error(error);
        }
    }

    closeModal() {
        const closeButton = document.querySelector(".close");
        closeButton.addEventListener("click", () => {
            this.modal.style.display = "none";
        });
    }
}

export default ModalHandler;