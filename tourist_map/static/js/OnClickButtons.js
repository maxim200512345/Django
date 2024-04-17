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
    const controls = new ymaps3.YMapControls({position: 'top left'});
    const button = new ymaps3.YMapControlButton({
        text: 'Москва',
        onClick: () =>
        {


        }
    });
    controls.addChild(button);
    map.addChild(controls);
}


function ButtonCategory(){
    console.log("1")
}
function ButtonCity(){
    console.log("2")
}

function ButtonBuild(){
    console.log("4")
}
function OnChangeFunction(selectValue){
    var value = selectValue.value;
    var data = value.split('+')
    var xCoords = data[0]
    var yCoords = data[1]
    coords = [xCoords, yCoords]
    var name = data[2]
    return data;
}