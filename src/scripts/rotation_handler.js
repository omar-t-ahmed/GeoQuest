class RotationHandler {
    constructor(projection, sensitivity, svg, path) {
        this.projection = projection;
        this.sensitivity = sensitivity;
        this.svg = svg;
        this.path = path;
        this.rotationInterval = null;
    }
    
    toggleRotation() {
        if (this.rotationInterval) {
            clearInterval(this.rotationInterval);
            this.rotationInterval = null;
        } else {
            this.rotationInterval = setInterval(() => {
                const rotate = this.projection.rotate();
                const k = this.sensitivity / this.projection.scale();
                this.projection.rotate([rotate[0] - 1 * k, rotate[1]]);
                this.path = d3.geoPath().projection(this.projection);
                this.svg.selectAll("path").attr("d", this.path);
            }, 30);
        }
    }
}

export default RotationHandler;