d3.tsv("assets/projects.tsv",function(projects) {
    window.projects = projects;
    var container = d3.select(".work-list");
    var thumbnail = container.selectAll(".work-thumb-container")
        .data(projects)
      .enter().append("div")
        .classed("work-thumb-container",true)
    var link = thumbnail.append("a")
        .classed("work-link",true)
        .attr("href",function(d) { return d.url; });
    link.append("img")
        .attr("src",function(d) { return "assets/images/" + d.imgUrl + ".jpg"; })
        .classed("work-thumbnail-image", true);
    thumbnail.append("a")
        .classed("work-label",true)
        .text(function(d) { return d.shortHed; });
  });