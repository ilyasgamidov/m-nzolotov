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

    try {
        var slider = tns({
            container: '.my-slider',
            items: 3,
            slideBy: 'page',
            autoplay: false,
            gutter: 10,
            nav: false,
            controls: false
          });
    }catch(e){}

    try {
        var slider = tns({
            container: '.backstage-slider',
            items: 3,
            slideBy: 'page',
            autoplay: false,
            gutter: 10,
            nav: false,
            controls: false
          });
    } catch(e){}

    try {
        var slider = tns({
            container: '.st-portfolio-slider',
            items: 3,
            slideBy: 'page',
            autoplay: false,
            gutter: 10,
            nav: false,
            controls: false
          });
    }catch(e){}
    
    try {
        var slider = tns({
            container: '.st-husband-slider',
            items: 3,
            slideBy: 'page',
            autoplay: false,
            gutter: 10,
            nav: false,
            controls: false
          });
    }catch(e){}

    try {
        var slider = tns({
            container: '.st-walk-slider',
            items: 3,
            slideBy: 'page',
            autoplay: false,
            gutter: 10,
            nav: false,
            controls: false
          });
    }catch(e){}

    try {
        var slider = tns({
            container: '.st-banquet-slider',
            items: 3,
            slideBy: 'page',
            autoplay: false,
            gutter: 10,
            nav: false,
            controls: false
          });
    }catch(e){}

    try {
        var slider = tns({
            container: '.st-accessories-slider',
            items: 3,
            slideBy: 'page',
            autoplay: false,
            gutter: 10,
            nav: false,
            controls: false
          });
    }catch(e){}

    try {
        const modals = () => {
            let btnPressed = false;
        
            function bindModal(triggerSelector, modalSelector, closeSelector, destroy = false) {
                const trigger = document.querySelectorAll(triggerSelector),
                      modal = document.querySelector(modalSelector),
                      close = document.querySelector(closeSelector),
                      windows = document.querySelectorAll('[data-modal]'),
                      scroll = calcScroll();
        
                trigger.forEach(item => {
                    item.addEventListener('click', (e) => {
                        if (e.target) {
                            e.preventDefault();
                        }
        
                        btnPressed = true;
        
                        if (destroy) {
                            item.remove();
                        }
        
                        windows.forEach(item => {
                            item.style.display = 'none';
                            item.classList.add('animated', 'fadeIn');
                        });
            
                        modal.style.display = "block";
                        document.body.style.overflow = "hidden";
                        document.body.style.marginRight = `${scroll}px`;
                    });
                });
        
                close.addEventListener('click', () => {
                    windows.forEach(item => {
                        item.style.display = 'none';
                    });
        
                    modal.style.display = "none";
                    document.body.style.overflow = "";
                    document.body.style.marginRight = `0px`;
                });
        
                modal.addEventListener('click', (e) => {
                    if (e.target === modal) {
                        windows.forEach(item => {
                            item.style.display = 'none';
                        });
        
                        modal.style.display = "none";
                        document.body.style.overflow = ""; 
                        document.body.style.marginRight = `0px`;
                    }
                });
            }
        
            function showModalByTime(selector, time) {
                setTimeout(function() {
                    let display;
        
                    document.querySelectorAll('[data-modal]').forEach(item => {
                        if (getComputedStyle(item).display !== 'none') {
                            display = "block";
                        }
                    });
        
                    if (!display) {
                        document.querySelector(selector).style.display = 'block';
                        document.body.style.overflow = "hidden";
                        let scroll = calcScroll();
                        document.body.style.marginRight = `${scroll}px`;
                    }
                }, time);
            }
        
            function calcScroll() {
                let div = document.createElement('div');
        
                div.style.width = '50px';
                div.style.height = '50px';
                div.style.overflowY = 'scroll';
                div.style.visibility = 'hidden';
        
                document.body.appendChild(div);
                let scrollWidth = div.offsetWidth - div.clientWidth;
                div.remove();
        
                return scrollWidth;
            }
        
            function openByScroll(selector) {
                window.addEventListener('scroll', () => {
                    let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
        
                    if (!btnPressed && (window.pageYOffset + document.documentElement.clientHeight >= scrollHeight)) {
                        document.querySelector(selector).click();
                    }
                });
            }
        
            bindModal('.btn-order', '.modal-order', '.modal-order-content .close');
            // showModalByTime('.popup-consultation', 5000);
        };
        
        modals();
    }catch(e){}

    lightGallery(document.getElementById('lightgallery'));
    lightGallery(document.getElementById('husband'));
    lightGallery(document.getElementById('walk'));
    lightGallery(document.getElementById('banquet'));
    lightGallery(document.getElementById('accessories'));
    lightGallery(document.getElementById('video-img'));
    lightGallery(document.getElementById('video-gallery'));

    
});