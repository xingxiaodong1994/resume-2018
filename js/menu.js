!function(){
  let aTags = document.querySelectorAll('header>nav>ul>li a')
  for (let i = 0; i < aTags.length; i++) {
      aTags[i].onclick = function (e) {
          e.preventDefault()
          let a = e.currentTarget
          let href = a.getAttribute('href') //'#siteAbout'
          let element = document.querySelector(href)
          let top = element.offsetTop
          //window.scrollTo(0, top - 80)

        //console.log(TWEEN)
        function animate(time) {
            requestAnimationFrame(animate);
            TWEEN.update(time);
        }
        requestAnimationFrame(animate);
        let currentTop=window.scrollY
        console.log("currentTop")
        console.log(currentTop)
        let nextTop=top-80
        var coords = { y: currentTop }; 
        var tween = new TWEEN.Tween(coords)
                .to({ y: nextTop }, 1000) 
                .easing(TWEEN.Easing.Quartic.InOut) 
                .onUpdate(function() { 
                   //console.log( coords.y );
                   window.scrollTo(0, coords.y)
                })
                .start(); 

      }
  }
 
    }()

