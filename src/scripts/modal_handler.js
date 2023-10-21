class ModalHandler {
    constructor() {
        this.modal = document.getElementById("country-modal");
        this.modalCountryName = document.getElementById("modal-country-name");
        this.modalCountryInfo = document.getElementById("modal-country-info");
    }

    openModal(country) {
        this.modalCountryName.innerHTML = country;
        this.modalCountryInfo.innerHTML = 'Country info';
        this.modal.style.display = "block";
    }

    closeModal() {
        const closeButton = document.querySelector(".close");
        closeButton.addEventListener("click", () => {
            this.modal.style.display = "none";
        });
    }
}

export default ModalHandler;