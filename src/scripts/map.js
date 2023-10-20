class Map {
    constructor(ele) {
        this.width = 900;
        this.height = 600;
        this.svg = d3.select(ele).append('svg').attr('width', this.width).attr('height', this.height);
        this.projection = d3.geoMercator().scale(150);
        this.path = d3.geoPath(this.projection);
        this.g = this.svg.append('g');
        
        this.loadData();

    }

    loadData() {
        d3.json('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json', async (error, data) => {
            if (error) {
                console.error(error);
                return;
            }
        
            await this.renderMap(data);
            

        document.querySelectorAll('.country').forEach((element) => {
            const country = element.getAttribute("name");
            element.addEventListener("mouseover", () => {
                let countryName = document.getElementById('country-name')
                countryName.innerHTML = country

            });
            element.addEventListener("mouseout", () => {
                let countryName = document.getElementById('country-name')
                countryName.innerHTML = '     '
            });
        });
            });
        }
    
    renderMap(data) {
        const countries = topojson.feature(data, data.objects.countries);
        this.g.selectAll('path')
            .data(countries.features)
            .enter()
            .append('path')
            .attr('class', 'country')
            .attr('d', this.path)
            .attr('name', d => d.properties.name);
    }
}

export default Map

