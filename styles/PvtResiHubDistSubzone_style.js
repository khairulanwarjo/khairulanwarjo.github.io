var size = 0;
var ranges_PvtResiHubDistSubzone = [[77.000000, 748.800000, [ new ol.style.Style({
        image: new ol.style.Circle({radius: 10.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1}), fill: new ol.style.Fill({color: 'rgba(247,251,255,1.0)'})})
    })]],
[748.800000, 1420.600000, [ new ol.style.Style({
        image: new ol.style.Circle({radius: 10.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1}), fill: new ol.style.Fill({color: 'rgba(200,221,240,1.0)'})})
    })]],
[1420.600000, 2092.400000, [ new ol.style.Style({
        image: new ol.style.Circle({radius: 10.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1}), fill: new ol.style.Fill({color: 'rgba(115,179,216,1.0)'})})
    })]],
[2092.400000, 2764.200000, [ new ol.style.Style({
        image: new ol.style.Circle({radius: 10.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1}), fill: new ol.style.Fill({color: 'rgba(40,121,185,1.0)'})})
    })]],
[2764.200000, 3436.000000, [ new ol.style.Style({
        image: new ol.style.Circle({radius: 10.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1}), fill: new ol.style.Fill({color: 'rgba(8,48,107,1.0)'})})
    })]]];
var styleCache_PvtResiHubDistSubzone={}
var style_PvtResiHubDistSubzone = function(feature, resolution){
    var value = feature.get("Mean Dist");
    var style = ranges_PvtResiHubDistSubzone[0][2];
    for (i = 0; i < ranges_PvtResiHubDistSubzone.length; i++){
        var range = ranges_PvtResiHubDistSubzone[i];
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

    if (!styleCache_PvtResiHubDistSubzone[key]){
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
        styleCache_PvtResiHubDistSubzone[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_PvtResiHubDistSubzone[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};