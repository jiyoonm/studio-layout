var words = [{"text":"why", "url":"/happy.html"},
             {"text":"tofu", "url":"https://www.koreanbapsang.com/kimchi-soondubu-jjigae-soft-tofu-stew-kimchi/"},
             {"text":"i", "url":"#"},
             {"text":"everybody", "url":"/happy.html"},
             {"text":"loans", "url":"https://www.newschool.edu/financial-aid/federal-loans/"},
             {"text":"sleep", "url":"https://open.spotify.com/playlist/6HIpeOyHQvwCVtLnpDWMp3?si=mAi3fDRlRa6G2ppXW1CBVg"},
             {"text":"weather", "url":"https://weather.com/weather/tenday/l/New+York+City+NY?canonicalCityId=a701ee19c4ab71bbbe2f6ba2fe8c250913883e5ae9b8eee8b54f8efbdb3eec03"},
             {"text":"restaurants", "url":"https://www.yelp.com/search?find_desc=best+places+to+eat+chinatown&find_loc=New+York%2C+NY"},
             {"text":"near", "url":"/happy.html"},
             {"text":"me", "url":"#"},
             {"text":"is", "url":"https://www.google.com/search?rlz=1C1CHBF_enUS809US809&sxsrf=ALeKk0115SVJLa_JErMop2D1CPZsBsxHOw%3A1600875068774&ei=PGprX6DmLu-IggeurorgBA&q=is+it+normal&oq=is+it+normal&gs_lcp=CgZwc3ktYWIQAzIECCMQJzIFCAAQkQIyBQgAEIsDMgUIABCLAzIFCAAQiwMyBQgAEIsDMgUIABCLAzIFCAAQiwMyBQgAEIsDMgUIABCLAzoECAAQRzoGCAAQBxAeOgQIABBDOgIIADoHCCMQsQIQJ1CUB1jWFGCoGGgBcAF4AIABZIgB2gOSAQM0LjGYAQCgAQGqAQdnd3Mtd2l6yAEIuAEBwAEB&sclient=psy-ab&ved=0ahUKEwig9LauzP_rAhVvhOAKHS6XAkwQ4dUDCA0&uact=5"}]

for (var i = 0; i < words.length; i++) {
    words[i].size = 10 + Math.random() * 90;
}
var margin = {top: 50, right: 0, bottom: 20, left: 80},

    width = 1000- margin.left - margin.right,
    height = 580 - margin.top - margin.bottom;

var svg = d3.select("#main2").append("svg")

    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

var layout = d3.layout.cloud()
  .size([width, height])
  .words(words)
  .padding(10)
  .fontSize(100)
  .on("end", draw);
layout.start();

function draw(words) {
  svg
    .append("g")
      .attr("transform", "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")")
      .selectAll("text")
        .data(words)
      .enter().append("text")
        .style("font-size", function(d) { return d.size + "px"; })
        .attr("text-anchor", "middle")
        .attr("transform", function(d) {
          return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
        })
        .text(function(d) { return d.text; })
        .on("click", function (d, i){
          window.open(d.url, "_blank");
      });
}