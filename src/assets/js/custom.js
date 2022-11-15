const handelSidebar = () => {
    if (window.innerWidth < 992) {

        document.querySelectorAll('.sidebar .nav-link').forEach(function (element) {

            element.addEventListener('click', function (e) {

                let nextEl = element.nextElementSibling;
                let parentEl = element.parentElement;

                if (nextEl && nextEl.classList.contains('submenu')) {
                    e.preventDefault();
                    if (nextEl.style.display == 'block') {
                        nextEl.style.display = 'none';
                    } else {
                        nextEl.style.display = 'block';
                    }
                }
            });
        })
    } else {
        document.querySelectorAll('.sidebar .nav-link').forEach(function (element) {
            let nextEl = element.nextElementSibling;

            nextEl.style.display = "none"

        })
    }
}
document.querySelectorAll('.form-input').forEach(element => {
    console.log(element);
    element.onclick = () => {
        element.parentElement.querySelector('select').click()
    }
});

document.addEventListener("DOMContentLoaded", function () {
    handelSidebar();
});

const initSelect = () => {
    let parent = document.querySelectorAll('.ws-search-able-dropdown');
    parent.forEach(element => {
        let inner = element.querySelector('.ws-search-able-list')
        let inner_span = inner.querySelectorAll('span')
        inner_span.forEach(_inner_span => {
            _inner_span.addEventListener('click', () => {
                element.querySelector('.ws-input').innerHTML = _inner_span.textContent
            })
        });
        element.addEventListener('keyup', (e) => {
            if (e.target.value.split("").length > 0) {
                inner_span.forEach(item => {
                    if (item.textContent.toUpperCase().indexOf(e.target.value.toUpperCase()) > -1) {
                        item.style = "display:block !important"
                    }
                    else {
                        item.style = "display:none !important"
                    }
                    console.log(e.target.value.indexOf(item.textContent) > -1);
                });
                console.log(inner);
            } else {
                inner_span.forEach(item => {
                    item.style = "display:block !important"
                });
            }


            console.log(e.target.value);
        })
    });
}


window.onload = () => {
    initSelect()
}

window.onresize = () => {
    handelSidebar();
}



// DOMContentLoaded  end

