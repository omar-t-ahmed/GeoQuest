# GeoQuest

[GeoQuest](https://omar-t-ahmed.github.io/GeoQuest/) is a 3D data visualization that renders an interactive globe. Users can click on a specific country on the globe, and upon clicking, a modal window will appear displaying detailed information about that country. This project aims to provide an engaging and educational experience, allowing users to explore and learn about different countries and their key statistics by interacting with the globe. It serves as a user-friendly platform for accessing geographical and demographic data in an interactive and visually appealing manner.

![](./assets/globe_spin.gif)

# Functionality:

Users can: 

* Explore a dynamic and interactive globe where they can click on countries to learn more about them.

* Clicking on a country will open a modal window with details about that country, including population, flag, native name, currency and primary language spoken.

* Search for specific countries using a search bar for quick access to information.

# Implementation

### Handling Rotation

* When the toggleRotation method is called, it checks whether the globe's rotation is currently active or paused. If the rotation is active (meaning this.rotationInterval is set), it clears the interval, effectively pausing the rotation. On the other hand, if the rotation is paused, it initiates a periodic update using setInterval.

* During this update, the globe's rotation is adjusted by modifying the projection settings. The rate of rotation is controlled by the sensitivity parameter and the current scale of the projection. As the globe rotates, the updated path is applied to the SVG, resulting in a visual update of the globe's position.

```js
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
```

### Handling drag

* To enable this feature, the code also uses the D3 library's drag behavior, allowing users to drag the globe with their cursor. The handleDrag function is triggered when a drag event is detected. It calculates how much the globe should rotate based on the user's dragging movement and sensitivity settings. 

* The current rotation of the globe, represented by latitude and longitude angles, is obtained using the projection. Then, the sensitivity parameter and the projection's scale are used to adjust the rotation angles. The calculated rotation is applied to the projection settings, and a new path is created based on the updated projection. The globe's path elements are updated to reflect the changes in rotation.

```js
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
```

# Technologies, Libraries, APIs

* D3

* Countries RestfulAPI

# Future Implementations

* Upon rendering the globe, the users current geolaction will be used to highlight their country.

* Clicking on a country will zoom in on that country creating a bound box displaying that countries borders.

* Users will be able to test their world knowledge with a quiz feature that prompts questions about a countries location or spoken language.


