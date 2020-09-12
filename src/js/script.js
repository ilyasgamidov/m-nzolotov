window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    try {
        var slider = tns({
            preventScrollOnTouch: 'force',
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
            preventScrollOnTouch: 'force',
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
            preventScrollOnTouch: 'force',
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
            preventScrollOnTouch: 'force',
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
            preventScrollOnTouch: 'force',
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
            preventScrollOnTouch: 'force',
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
            preventScrollOnTouch: 'force',
            container: '.st-accessories-slider',
            items: 3,
            slideBy: 'page',
            autoplay: false,
            gutter: 10,
            nav: false,
            controls: false
          });
    }catch(e){}

    function hideArrow(carouselId, prev, next) {
        var carouselLength = $('.carousel-item').length - 1;
        $(prev).addClass('d-none');
    
        if (carouselLength) {
            $(next).removeClass('d-none');
        }
        
        $(carouselId).carousel({
            interval: false,
            wrap: false
        }).on('slide.bs.carousel', function (e) {
            // First one
            if (e.to == 0) {
                $(prev).addClass('d-none');
                $(next).removeClass('d-none');
            } // Last one
            else if (e.to == 3) {
                $(prev).removeClass('d-none');
                $(next).addClass('d-none');
            } // The rest
            else {
                $(prev).removeClass('d-none');
                $(next).removeClass('d-none');
            }
        });
    }

    hideArrow('#carouselExampleControls', '.carosel1-prev', ".carosel1-next");
    hideArrow('#carouselExampleControls2', '.carosel2-prev', ".carosel2-next");
    hideArrow('#carouselExampleControls3', '.carosel3-prev', ".carosel3-next");
    hideArrow('#carouselExampleControls4', '.carosel4-prev', ".carosel4-next");
    hideArrow('#carouselExampleControls5', '.carosel5-prev', ".carosel5-next");
    hideArrow('#carouselExampleControls6', '.carosel6-prev', ".carosel6-next");
    hideArrow('#carouselExampleControls7', '.carosel7-prev', ".carosel7-next");
    hideArrow('#carouselExampleControls8', '.carosel8-prev', ".carosel8-next");
    hideArrow('#carouselExampleControls9', '.carosel9-prev', ".carosel9-next");

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

    try {
        lightGallery(document.getElementById('lightgallery'));
    } catch(e){}
    try {
        lightGallery(document.getElementById('husband'));
    } catch(e){}
    try {
        lightGallery(document.getElementById('walk'));
    } catch(e){}
    try {
        lightGallery(document.getElementById('banquet'));
    } catch(e){}
    try {
        lightGallery(document.getElementById('accessories'));
    } catch(e){}
    try {
        lightGallery(document.getElementById('video-img'));
    } catch(e){}
    try {
        lightGallery(document.getElementById('video-gallery'));
    } catch(e){}

    const forms = () => {
        const form = document.querySelectorAll('form'),
              inputs = document.querySelectorAll('input'),
              phoneInputs = document.querySelectorAll('input[name="user_phone"]');
      
        phoneInputs.forEach(item => {
            item.addEventListener('input', () => {
                item.value = item.value.replace(/\D/, '');
            });
        });
        
        const message = {
            loading: 'Загрузка...',
            success: 'Сообщение отправлено! Скоро мы с вами свяжемся.',
            failure: 'Что-то пошло не так...'
        };
      
        const postData = async (url, data) => {
            document.querySelector('.status').textContent = message.loading;
            let res = await fetch(url, {
                method: "POST",
                body: data
            });
      
            return await res.text();
        };
      
        const clearInputs = () => {
            inputs.forEach(item => {
                item.value = '';
            });
        };
      
        form.forEach(item => {
            item.addEventListener('submit', (e) => {
                e.preventDefault();
      
                let statusMessage = document.createElement('div');
                statusMessage.classList.add('status');
                item.appendChild(statusMessage);
      
                const formData = new FormData(item);
      
                postData('mailer/smart.php', formData)
                    .then(res => {
                        console.log(res);
                        statusMessage.textContent = message.success;
                    })
                    .catch(() => statusMessage.textContent = message.failure)
                    .finally(() => {
                        clearInputs();
                        setTimeout(() => {
                            statusMessage.remove();
                        }, 5000);
                    });
            });
        });
      };
      
      forms();
});