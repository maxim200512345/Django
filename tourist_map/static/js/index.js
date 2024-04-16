ymaps3.ready.then(init);
function init(){
    const map = new ymaps3.YMap(document.getElementById('map'),{
        location : {
            center: [56.838011,60.597474],
            zoom: 5
        }
    });
    const layer = new ymaps3.YMapDefaultSchemeLayer();
    map.addChild(layer);
}