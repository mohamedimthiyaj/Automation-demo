




const drop_btn = document.querySelector(".drop-btn span");
const tooltip = document.querySelector(".tooltip");
const menu_wrapper = document.querySelector(".wrapper");
const menu_bar = document.querySelector(".menu-bar");
// dropdown menu 1
const info_drop = document.querySelector(".info-drop");
const webapp_drop = document.querySelector(".webapp-drop");
const cms_drop = document.querySelector(".cms-drop");
const Infra_drop = document.querySelector(".Infra-drop");
const exploit_drop = document.querySelector(".exploit-drop")

 // dropdown menu 2
const info_item = document.querySelector(".info-item");
const webapp_item = document.querySelector(".webapp-item");
const cms_item = document.querySelector(".cms-item")
const Infra_item = document.querySelector(".Infra-item");
const exploit_item = document.querySelector(".exploit-item");
// back button
const info_btn = document.querySelector(".back-info-btn");
const webapp_btn = document.querySelector(".back-webapp-btn");
const cms_btn = document.querySelector(".back-cms-btn");
const Infra_btn = document.querySelector(".back-Infra-btn");
const expliot_btn = document.querySelector(".back-exploit-btn");
//  dropdown function
    drop_btn.onclick = (()=>{
        menu_wrapper.classList.toggle("show");
        tooltip.classList.toggle("show");
    });
    //   dropdown item functions
    info_item.onclick = (()=>{
        menu_bar.style.marginLeft = "-400px";
        setTimeout(()=>{
            info_drop.style.display = "block";
        }, 100);
    });
    webapp_item.onclick = (()=>{
        menu_bar.style.marginLeft = "-400px";
        setTimeout(()=>{
            webapp_drop.style.display = "block";
        }, 100);
    });
    cms_item.onclick = (()=>{
        menu_bar.style.marginLeft = "-400px";
        setTimeout(()=>{
            cms_drop.style.display = "block";
        }, 100);
    });
    Infra_item.onclick = (()=>{
        menu_bar.style.marginLeft = "-400px";
        setTimeout(()=>{
            Infra_drop.style.display = "block";
        }, 100);
    });
    exploit_item.onclick = (()=>{
        menu_bar.style.marginLeft = "-400px";
        setTimeout(()=>{
            exploit_drop.style.display = "block";
        }, 100);
    });
    //   dropdown back button fundctions
    info_btn.onclick = (()=>{
        menu_bar.style.marginLeft = "0px";
        info_drop.style.display = "none";
    });
    webapp_btn.onclick = (()=>{
        menu_bar.style.marginLeft = "0px";
        webapp_drop.style.display = "none";
    });
    cms_btn.onclick = (()=>{
        menu_bar.style.marginLeft = "0px";
        cms_drop.style.display = "none";
    });
    Infra_btn.onclick = (()=>{
        Infra_drop.style.display = "none";
        menu_bar.style.marginLeft = "0px";
    });
    expliot_btn.onclick = (()=>{
        exploit_drop.style.display = "none";
        menu_bar.style.marginLeft = "0px";
    });
    