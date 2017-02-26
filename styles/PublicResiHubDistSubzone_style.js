var size = 0;
var ranges_PublicResiHubDistSubzone = [[72.000000, 836.000000, [ new ol.style.Style({
        image: new ol.style.Circle({radius: 10.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1}), fill: new ol.style.Fill({color: 'rgba(247,251,255,1.0)'})})
    })]],
[836.000000, 1887.000000, [ new ol.style.Style({
        image: new ol.style.Circle({radius: 10.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1}), fill: new ol.style.Fill({color: 'rgba(200,221,240,1.0)'})})
    })]],
[1887.000000, 3044.000000, [ new ol.style.Style({
        image: new ol.style.Circle({radius: 10.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1}), fill: new ol.style.Fill({color: 'rgba(115,179,216,1.0)'})})
    })]],
[3044.000000, 4341.000000, [ new ol.style.Style({
        image: new ol.style.Circle({radius: 10.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1}), fill: new ol.style.Fill({color: 'rgba(40,121,185,1.0)'})})
    })]],
[4341.000000, 5631.000000, [ new ol.style.Style({
        image: new ol.style.Circle({radius: 10.0 + size,
            stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1}), fill: new ol.style.Fill({color: 'rgba(8,48,107,1.0)'})})
    })]]];
var styleCache_PublicResiHubDistSubzone={}
var style_PublicResiHubDistSubzone = function(feature, resolution){
    var value = feature.get("Mean Dist");
    var style = ranges_PublicResiHubDistSubzone[0][2];
    for (i = 0; i < ranges_PublicResiHubDistSubzone.length; i++){
        var range = ranges_PublicResiHubDistSubzone[i];
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

    if (!styleCache_PublicResiHubDistSubzone[key]){
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
        styleCache_PublicResiHubDistSubzone[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_PublicResiHubDistSubzone[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};