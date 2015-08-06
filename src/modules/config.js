define(['text!config.json', 'namespace'], function (configJSON, NS) {

    var sassConfig = JSON.parse(configJSON);

    NS.config = {
        breakpoints: {
            mobile : sassConfig.mobile || 768,
            tablet : sassConfig.tablet || 1024
        },
        animation :{
            classes : {
                animationBaseClass : "anim",
                animationEnter : "fadeIn",
                animationExit : "fadeOut"
            },
            props :{
                duration : "600ms",
                timing : 'ease'
            }
        },
        targets : {
            classNames : {
                heroV2ClassName : 'parallax-hero',
                heroContainer : 'container-hero',
                heroClassName : 'hero-img-placeholder',
                circleElements : 'circle'
            }
        },
        DOMProperties : {
            defaultFontSize: sassConfig.defaultFontSize || 16
        }
    };

    return NS.config;
});