var size = 0;

var styleCache_All_Govt_FoodPlaces={}
var style_All_Govt_FoodPlaces = function(feature, resolution){
    var value = ""
    var size = 0;
    var style = [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [580, 580],
                  scale: 0.0327586206897,
                  anchor: [9, 9],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/food_fastfood.svg"
            })
    })];
    if ("" !== null) {
        var labelText = String("");
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_All_Govt_FoodPlaces[key]){
        var text = new ol.style.Text({
              font: '16.9px \'.SF NS Text\', sans-serif',
              text: labelText,
              textBaseline: "center",
              textAlign: "left",
              offsetX: 5,
              offsetY: 3,
              fill: new ol.style.Fill({
                color: 'rgba(0, 0, 0, 255)'
              }),
            });
        styleCache_All_Govt_FoodPlaces[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_All_Govt_FoodPlaces[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};