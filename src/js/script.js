window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const tabs = (headerSelector, tabSelector, contentSelector, activeClass, display = 'block') => {

      try {
          const header = document.querySelector(headerSelector),
            tab = document.querySelectorAll(tabSelector),
            content = document.querySelectorAll(contentSelector);
            
   
      function hideContent() {
          tab.forEach(item => {
              item.classList.remove(activeClass);
          });
  
          content.forEach(item => {
              item.style.display = 'none';
          });
      }
  
      function showContent(i = 0) {
          content[i].style.display = display;
          tab[i].classList.add(activeClass);

      }
  
      hideContent();
      showContent();
  
      header.addEventListener('click', (e) => {
          const target = e.target;
          if (target &&
              target.classList.contains(tabSelector.replace(/\./, "")) ||
              target.parentNode.classList.contains(tabSelector.replace(/\./, ""))) {
                  tab.forEach((item, i) => {
                      if (target == item || target.parentNode == item) {
                          hideContent();
                          showContent(i);
                      }
                  });
          }
      });
      } catch(e){}  
    };

  tabs('.price-tabs', '.price-tab', '.price-tabs-content', 'active');

    var slider = tns({
      container: '.my-slider',
      items: 3,
      slideBy: 'page',
      autoplay: false,
      gutter: 10,
      nav: false,
      controls: false
    });

    var slider = tns({
      container: '.backstage-slider',
      items: 3,
      slideBy: 'page',
      autoplay: false,
      gutter: 10,
      nav: false,
      controls: false
    });

    lightGallery(document.getElementById('lightgallery'));

});