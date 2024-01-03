const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function valueSetter() {
  gsap.set("#nav", { y: "-100%", opacity: 0 });
  gsap.set("#illustration img", {
    opacity: 0,
  });
}

function createLine() {
  document.querySelectorAll(".lines").forEach((item) => {
    let span1 = document.createElement("span");

    span1.classList.add("line");
    span1.classList.add("line1");

    item.appendChild(span1);
  });
}

function init() {
  var tl = gsap.timeline();

  tl.to("#nav", {
    y: 0,
    stagger: 0.2,
    opacity: 1,
    ease: Expo.easeInOut,
    duration: 1.5,
  })
    .to("#heading", {
      opacity: 1,
      duration: 1,
      ease: Expo.easeInOut,
    })
    .to("#illustration img", {
      opacity: 1,
      ease: Circ.easeInOut,
      duration: 5,
    });
}

const cursor = new MouseFollower({
    container: 'html',
    speed: 0.3,
    
});

// const cursor = new MouseFollower({
//   el: null,
//   container: document.body,
//   className: "mf-cursor",
//   innerClassName: "mf-cursor-inner",
//   textClassName: "mf-cursor-text",
//   mediaClassName: "mf-cursor-media",
//   mediaBoxClassName: "mf-cursor-media-box",
//   iconSvgClassName: "mf-svgsprite",
//   iconSvgNamePrefix: "-",
//   iconSvgSrc: "",
//   dataAttr: "cursor",
//   hiddenState: "-hidden",
//   textState: "-text",
//   iconState: "-icon",
//   activeState: "-active",
//   mediaState: "-media",
//   stateDetection: {
//     "-pointer": "a,button",
//     '-opaque': 'a',
//     "-hidden": "iframe",
//   },
//   visible: true,
//   visibleOnState: false,
//   speed: 0.55,
//   ease: "expo.out",
//   overwrite: true,
//   skewing: 3,
//   skewingText: 2,
//   skewingIcon: 2,
//   skewingMedia: 2,
//   skewingDelta: 0.001,
//   skewingDeltaMax: 0.15,
//   stickDelta: 0.15,
//   showTimeout: 20,
//   hideOnLeave: true,
//   hideTimeout: 300,
//   hideMediaTimeout: 300,
// });

createLine();
valueSetter();
init();
