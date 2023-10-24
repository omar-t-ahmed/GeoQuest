import ModalHandler from "./modal_handler";

class EventListeners {
    constructor(svg, modalHandler) {
        this.svg = svg;
        this.modalHandler = modalHandler;
    }

    addListeners() {
        this.svg.on("mouseover", (event) => this.handleMouseOver(event));
        this.svg.on("mouseout", () => this.handleMouseOut());
        this.svg.on("click", (event) => this.handleClick(event));
    }

    handleMouseOver(event) {
        const target = event.target;
        if (target.classList.contains("country")) {
            const countryName = document.getElementById('country-name');
            countryName.innerHTML = target.getAttribute("name");
        }
    }

    handleMouseOut() {
        const countryName = document.getElementById('country-name');
        countryName.innerHTML = 'Select a Country';
    }

    handleClick(event) {
        const target = event.target;
        if (target.classList.contains("country")) {
            this.modalHandler.refresh()
            const country = target.getAttribute("name");
            this.modalHandler.openModal(country);
        }
    }

    animateParagraphs() {
        const paragraphs = document.querySelectorAll('#country-info p');
        let index = 0;
        
        function animateNextParagraph() {
            if (index < paragraphs.length) {
            paragraphs[index].classList.add('animate-p');
            index++;
        
            setTimeout(animateNextParagraph, 4000); // Adjust the delay as needed
            }
        }
        
        animateNextParagraph();
        }

}

export default EventListeners;