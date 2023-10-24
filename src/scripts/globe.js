import EventListeners from "./event_listeners"
import ModalHandler from "./modal_handler";
import RotationHandler from "./rotation_handler";

class Globe {
    constructor(selector) {
        this.selector = selector;
        this.width = 500
        this.height = 500;
        this.sensitivity = 75;

        this.projection = d3.geoOrthographic()
            .scale(250)
            .center([0, 0])
            .rotate([0, -20])
            .translate([this.width / 2, this.height / 2]);

        this.initialScale = this.projection.scale();
        this.path = d3.geoPath().projection(this.projection);

        this.svg = d3.select(selector)
            .append("svg")
            .attr("width", this.width)
            .attr("height", this.height);

        this.globe = this.svg.append("circle")
            .attr("fill", "rgb(33, 33, 33)")
            .attr("stroke", "#000")
            .attr("stroke-width", "0.2")
            .attr("cx", this.width / 2)
            .attr("cy", this.height / 2)
            .attr("r", this.initialScale)

    const handleDrag = (event) => {
        if (!event.sourceEvent) return;
        const rotate = this.projection.rotate();
        const k = this.sensitivity / this.projection.scale();
        this.projection.rotate([
        rotate[0] + event.sourceEvent.movementX * k,
        rotate[1] - event.sourceEvent.movementY * k
        ]);
        this.path = d3.geoPath().projection(this.projection);
        this.map.selectAll("path").attr("d", this.path);
    };

    this.svg.call(
        d3.drag()
        .on('start', (event) => {
            if (!event.sourceEvent) return;
            event.sourceEvent.stopPropagation();
        })
        .on('drag', handleDrag)
    );
    
    this.map = this.svg.append("g");
    
    this.rotationHandler = new RotationHandler(this.projection, this.sensitivity, this.svg, this.path);
    this.modalHandler = new ModalHandler();
    this.eventListeners = new EventListeners(this.svg, this.modalHandler);
    this.loadData();
    this.addEventListeners();
    this.rotationHandler.toggleRotation()

    let pause = document.getElementById("pause")
    pause.addEventListener("click", this.toggleRotation.bind(this))
    }

    async loadData() {
        try {
            const worldData = await d3.json('data/world.json');
            this.map.selectAll("path")
                .data(worldData.features)
                .join("path")
                .attr('class', 'country')
                .attr("d", this.path)
                .attr("name", (d) => d.properties.name);
        } catch (error) {
            console.error('Failed to load globe data:', error);
        }
    }

    addEventListeners() {
        this.eventListeners.addListeners();
        this.closeModal();
    }

    closeModal() {
        this.modalHandler.closeModal();
        document.getElementById('map').style.filter = 'none';
    }

    toggleRotation() {
        this.rotationHandler.toggleRotation();
        const pauseIcon = document.querySelector('.fa-solid.fa-pause.fa-xl');
        const playIcon = document.querySelector('.fa-solid.fa-play.fa-xl');
        
        if (pauseIcon) {
            pauseIcon.classList.remove('fa-pause');
            pauseIcon.classList.add('fa-play');
        } else if (playIcon) {
            playIcon.classList.remove('fa-play');
            playIcon.classList.add('fa-pause');
        }
    }

}

export default Globe;