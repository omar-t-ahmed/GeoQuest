class Map {
    constructor(ele) {
        const width = 900;
        const height = 600;
        const svg = d3.select(ele).append('svg').attr('width', width).attr('height', height);
        const projection = d3.geoMercator().scale(150)
        const path = d3.geoPath(projection)
        const g = svg.append('g');
        
        d3.json('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json', (error, data) => {
            if (error) {
                console.error(error);
                return;
            }
        
            const countries = topojson.feature(data, data.objects.countries);
            g.selectAll('path')
                .data(countries.features)
                .enter()
                .append('path')
                .attr('class', 'country')
                .attr('d', path)
                .attr('name', d => d.properties.name);
        });
    }
}

export default Map

