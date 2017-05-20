var barwidth = 120;
var barheight = 14;
var color_range = ['#a50026','#d73027','#f46d43','#fdae61','#fee090','#ffffbf','#e0f3f8','#abd9e9','#74add1','#4575b4','#313695'];
var width = d3.scaleLinear().domain([0, 100]).range([0, 70]);
var data_bins = [50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];
var colorScale = d3.scaleLinear().domain(data_bins).range(color_range);

var container = d3.select('#overlay-ses');

//<img src="icons/flag.svg" onerror="this.src='icon/flag.png'" style="width:12px;height:12px;">

var layout = [
  
  {
    title: 'Education',
    items: [
      { title: 'Education Overall', code: 'Educatn' },
      { title: 'Gross School Enrollment', code: 'EnrllAP' },
      { title: 'Primary School Completion', code: 'PrmryAP' }

    ]
  },
  {
    title: 'Health',
    items: [
      { title: 'Health Overall', code: 'Health' },
      { title: 'Child Survival', code: 'ChldSAP' },
      { title: 'Age 65 Survival', code: 'Ag65AdP' },
      { title: 'Contraceptive Use', code: 'CntrcAP' }
    ]
  },
  {
    title: 'Housing',
    items: [
      { title: 'Housing Overall', code: 'Housing' },
      { title: 'Improved Sanitation', code: 'SnttnAP' },
      { title: 'Rural Access to Improved Water', code: 'RIH20AP' }
    ]
  },
   {
    title: 'Food',
    items: [
      { title: 'Food Overall', code: 'Food' },
      { title: 'Age 5 Not Stunted', code: 'Stnt_AP' }
    ]
  },
   {
    title: 'Work',
    items: [
      { title: 'Work Overall', code: 'Work' },
      { title: 'Population Not Poor', code: 'NtPrAdP' }
    ]
  }
];

function updateSidebarTitle(title) {
  $('#overlay-title').text(title)
}

function updateSidebar(options) {
  console.log(options);
  layout.forEach(function(category) {
    category.items.forEach(function(item) {
      item.value = options[item.code];
    });
  });

  d3.select('#overlay-title').text(options.NAME);
  d3.select('#economy').text(function(d) {
    return "Economic Classification: " + (options.ECONOMY);
  });
  d3.select('#income').text(function(d) {
    return "Income Classification: " + (options.INCOME_);
  });
  d3.select('#F_Total-bignumber').text(function(d) {
    return d3.format('.1f')(options.SERF);
  });
  d3.select('#population').text(function(d) {
    return 'Population ' + d3.format(',')(options.POP_EST);
  });
  d3.select('#gdp').text(function(d) {
    return 'GDP Per Capita: ' + d3.format(',.0f')(options.GDPPC);
  });

  var categories = container
    .selectAll('div.category')
    .data(layout, function(d) {
      return d.title;
    });

  var categoryEnter = categories
    .enter()
    .append('div')
    .attr('class', 'category');

  categoryEnter.append('div').append('h4').text(function(category) {
    return category.title;
  });

  var items = categories.merge(categoryEnter).selectAll('div.item').data(
    function(data) {
      return data.items;
    },
    function(data) {
      return data.title;
    }
  );

  var itemEnter = items.enter().append('div').attr('class', 'item cf');

  itemEnter.append('div').attr('class', 'item-title fl w-50').text(function(category) {
    return category.title;
  });


  itemEnter.append('div').attr('class', 'item-number fl w-10');
  items = items.merge(itemEnter);


  //var img = items.selectAll('div.flag-col').data(function(data) {
//    return data.value > 0.9 ? [data] : [];
//  });

 // img.exit().remove();

 // img
 //   .enter()
 //   .append('div')
 //   .attr('class', 'flag-col fl w-10')
 //   .append('img')
 //   .attr('src', 'icons/flag.svg')
 //   .attr('width', 12)
 //   .style('vertical-align', 'top')
 //   .attr('height', 12);


  var svg = items.selectAll('g').data(function(data) {
    return [data];
  });

  svg.exit().remove();

  var svgEnter = svg
    .enter()
    .append('div')
    .attr('class', 'fl w-20')
    .append('svg')
    .attr('width', barwidth + 2)
    .style('vertical-align', 'top')
    .attr('height', barheight + 2)
    .append('g')
    .attr('transform', 'translate(2, 2)');


  svgEnter
    .append('rect')
    .attr('class', 'bar')
    .attr('rx', 6)
    .attr('ry', 6)
    .attr('height', 12)
    .attr('width', 0)
    .style('fill', '#fff');

  svgEnter
    .append('rect')
    .attr('class', 'bar-background')
    .attr('rx', 6)
    .attr('ry', 6)
    .attr('height', 12)
    .attr('width', width(100))
    .style('stroke', '#ccc')
    .style('fill', 'transparent');

  svgEnter
    .append('svg')
    .attr('class', 'flag')
    .attr('y', 12)
    .style('fill', '#ffffff');

  svg = svg.merge(svgEnter);
  items = items.merge(itemEnter);

  svg
    .select('rect.bar')
    .transition()
    .duration(300)
    .attr('width', function(d) {
      return d.value !== undefined ?
        width(d.value) : width(1);
    })
    .style('fill', function(d) {
      return d.value !== undefined ?
        colorScale(d.value) : 'rgba(0, 0, 0, 0.85)';
    });

  items
    .select('div.item-number')
    .text(function(d) {
      return d.value === undefined ?
        'N/A' : d3.format('.2f')(d.value);
    });
}

updateSidebar({});
