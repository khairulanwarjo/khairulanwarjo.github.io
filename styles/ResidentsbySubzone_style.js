var size = 0;
var ranges_ResidentsbySubzone = [[0.000000, 6910.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(247,252,245,1.0)'})
    })]],
[6910.000000, 22000.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(202,234,195,1.0)'})
    })]],
[22000.000000, 45200.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(123,200,124,1.0)'})
    })]],
[45200.000000, 94280.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(42,146,74,1.0)'})
    })]],
[94280.000000, 137580.000000, [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(0,68,27,1.0)'})
    })]]];
var styleCache_ResidentsbySubzone={}
var style_ResidentsbySubzone = function(feature, resolution){
    var value = feature.get("TOTAL");
    var style = ranges_ResidentsbySubzone[0][2];
    for (i = 0; i < ranges_ResidentsbySubzone.length; i++){
        var range = ranges_ResidentsbySubzone[i];
        if (value > range[0] && value<=range[1]){
            style =  range[2];
        }
    };
    if ("" !== null) {
        var labelText = String("");
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_ResidentsbySubzone[key]){
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
        styleCache_ResidentsbySubzone[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_ResidentsbySubzone[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};