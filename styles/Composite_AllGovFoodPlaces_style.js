var size = 0;

var styleCache_Composite_AllGovFoodPlaces={}
var style_Composite_AllGovFoodPlaces = function(feature, resolution){
    var value = ""
    var size = 0;
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(239,117,103,1.0)'})
    })];
    if ("" !== null) {
        var labelText = String("");
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_Composite_AllGovFoodPlaces[key]){
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
        styleCache_Composite_AllGovFoodPlaces[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_Composite_AllGovFoodPlaces[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};