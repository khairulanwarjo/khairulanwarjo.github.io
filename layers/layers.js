var baseLayer = new ol.layer.Group({
    'title': 'Base maps',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_SUBZONE_P2014 = new ol.format.GeoJSON();
var features_SUBZONE_P2014 = format_SUBZONE_P2014.readFeatures(geojson_SUBZONE_P2014, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUBZONE_P2014 = new ol.source.Vector();
jsonSource_SUBZONE_P2014.addFeatures(features_SUBZONE_P2014);var lyr_SUBZONE_P2014 = new ol.layer.Vector({
                source:jsonSource_SUBZONE_P2014, 
                style: style_SUBZONE_P2014,
                title: "SUBZONE_P2014"
            });var format_ResidentsbySubzone = new ol.format.GeoJSON();
var features_ResidentsbySubzone = format_ResidentsbySubzone.readFeatures(geojson_ResidentsbySubzone, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ResidentsbySubzone = new ol.source.Vector();
jsonSource_ResidentsbySubzone.addFeatures(features_ResidentsbySubzone);var lyr_ResidentsbySubzone = new ol.layer.Vector({
                source:jsonSource_ResidentsbySubzone, 
                style: style_ResidentsbySubzone,
                title: "Residents by Subzone"
            });var format_PrivateResidential = new ol.format.GeoJSON();
var features_PrivateResidential = format_PrivateResidential.readFeatures(geojson_PrivateResidential, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PrivateResidential = new ol.source.Vector();
jsonSource_PrivateResidential.addFeatures(features_PrivateResidential);var lyr_PrivateResidential = new ol.layer.Vector({
                source:jsonSource_PrivateResidential, 
                style: style_PrivateResidential,
                title: "Private Residential"
            });var format_PvtResiHubDistSubzone = new ol.format.GeoJSON();
var features_PvtResiHubDistSubzone = format_PvtResiHubDistSubzone.readFeatures(geojson_PvtResiHubDistSubzone, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PvtResiHubDistSubzone = new ol.source.Vector();
jsonSource_PvtResiHubDistSubzone.addFeatures(features_PvtResiHubDistSubzone);var lyr_PvtResiHubDistSubzone = new ol.layer.Vector({
                source:jsonSource_PvtResiHubDistSubzone, 
                style: style_PvtResiHubDistSubzone,
                title: "Pvt Resi Hub Dist Subzone"
            });var format_PublicResidential = new ol.format.GeoJSON();
var features_PublicResidential = format_PublicResidential.readFeatures(geojson_PublicResidential, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PublicResidential = new ol.source.Vector();
jsonSource_PublicResidential.addFeatures(features_PublicResidential);var lyr_PublicResidential = new ol.layer.Vector({
                source:jsonSource_PublicResidential, 
                style: style_PublicResidential,
                title: "Public Residential"
            });var format_PublicResiHubDistSubzone = new ol.format.GeoJSON();
var features_PublicResiHubDistSubzone = format_PublicResiHubDistSubzone.readFeatures(geojson_PublicResiHubDistSubzone, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PublicResiHubDistSubzone = new ol.source.Vector();
jsonSource_PublicResiHubDistSubzone.addFeatures(features_PublicResiHubDistSubzone);var lyr_PublicResiHubDistSubzone = new ol.layer.Vector({
                source:jsonSource_PublicResiHubDistSubzone, 
                style: style_PublicResiHubDistSubzone,
                title: "Public Resi Hub Dist Subzone"
            });var format_Composite_AllGovFoodPlaces = new ol.format.GeoJSON();
var features_Composite_AllGovFoodPlaces = format_Composite_AllGovFoodPlaces.readFeatures(geojson_Composite_AllGovFoodPlaces, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Composite_AllGovFoodPlaces = new ol.source.Vector();
jsonSource_Composite_AllGovFoodPlaces.addFeatures(features_Composite_AllGovFoodPlaces);var lyr_Composite_AllGovFoodPlaces = new ol.layer.Vector({
                source:jsonSource_Composite_AllGovFoodPlaces, 
                style: style_Composite_AllGovFoodPlaces,
                title: "Composite_AllGovFoodPlaces"
            });var format_All_Govt_FoodPlaces = new ol.format.GeoJSON();
var features_All_Govt_FoodPlaces = format_All_Govt_FoodPlaces.readFeatures(geojson_All_Govt_FoodPlaces, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_All_Govt_FoodPlaces = new ol.source.Vector();
jsonSource_All_Govt_FoodPlaces.addFeatures(features_All_Govt_FoodPlaces);var lyr_All_Govt_FoodPlaces = new ol.layer.Vector({
                source:jsonSource_All_Govt_FoodPlaces, 
                style: style_All_Govt_FoodPlaces,
                title: "All_Govt_FoodPlaces"
            });

lyr_SUBZONE_P2014.setVisible(true);lyr_ResidentsbySubzone.setVisible(false);lyr_PrivateResidential.setVisible(false);lyr_PvtResiHubDistSubzone.setVisible(false);lyr_PublicResidential.setVisible(false);lyr_PublicResiHubDistSubzone.setVisible(false);lyr_Composite_AllGovFoodPlaces.setVisible(false);lyr_All_Govt_FoodPlaces.setVisible(false);
var layersList = [baseLayer,lyr_SUBZONE_P2014,lyr_ResidentsbySubzone,lyr_PrivateResidential,lyr_PvtResiHubDistSubzone,lyr_PublicResidential,lyr_PublicResiHubDistSubzone,lyr_Composite_AllGovFoodPlaces,lyr_All_Govt_FoodPlaces];
lyr_SUBZONE_P2014.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SUBZONE_NO': 'SUBZONE_NO', 'SUBZONE_N': 'SUBZONE_N', 'SUBZONE_C': 'SUBZONE_C', 'CA_IND': 'CA_IND', 'PLN_AREA_N': 'PLN_AREA_N', 'PLN_AREA_C': 'PLN_AREA_C', 'REGION_N': 'REGION_N', 'REGION_C': 'REGION_C', 'INC_CRC': 'INC_CRC', 'FMEL_UPD_D': 'FMEL_UPD_D', 'X_ADDR': 'X_ADDR', 'Y_ADDR': 'Y_ADDR', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'AgeGroup20': 'AgeGroup20', 'AgeGroup_1': 'AgeGroup_1', 'AgeGroup_2': 'AgeGroup_2', 'AgeGroup_3': 'AgeGroup_3', 'AgeGroup_4': 'AgeGroup_4', 'AgeGroup_5': 'AgeGroup_5', 'AgeGroup_6': 'AgeGroup_6', 'AgeGroup_7': 'AgeGroup_7', 'AgeGroup_8': 'AgeGroup_8', 'AgeGroup_9': 'AgeGroup_9', 'AgeGroup10': 'AgeGroup10', 'AgeGroup11': 'AgeGroup11', 'AgeGroup12': 'AgeGroup12', 'AgeGroup13': 'AgeGroup13', 'AgeGroup14': 'AgeGroup14', 'AgeGroup15': 'AgeGroup15', 'AgeGroup16': 'AgeGroup16', 'AgeGroup17': 'AgeGroup17', 'AgeGroup18': 'AgeGroup18', 'AgeGroup19': 'AgeGroup19', 'AgeGroup21': 'AgeGroup21', 'AgeGroup22': 'AgeGroup22', });
lyr_ResidentsbySubzone.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SUBZONE_N': 'SUBZONE_N', 'PLN_AREA_N': 'PLN_AREA_N', 'TOTAL': 'TOTAL', 'BET0TO4': 'BET0TO4', 'BET5TO9': 'BET5TO9', 'BET10TO14': 'BET10TO14', 'BET15TO19': 'BET15TO19', 'BET20TO24': 'BET20TO24', 'BET25TO29': 'BET25TO29', 'BET30TO34': 'BET30TO34', 'BET35TO39': 'BET35TO39', 'BET40TO44': 'BET40TO44', 'BET45TO49': 'BET45TO49', 'BET50TO54': 'BET50TO54', 'BET55TO59': 'BET55TO59', 'BET60TO64': 'BET60TO64', 'BET65TO69': 'BET65TO69', 'BET70TO74': 'BET70TO74', 'BET75TO79': 'BET75TO79', 'BET80TO84': 'BET80TO84', 'OVER85': 'OVER85', 'INC_CRC': 'INC_CRC', 'FMEL_UPD_D': 'FMEL_UPD_D', 'X_ADDR': 'X_ADDR', 'Y_ADDR': 'Y_ADDR', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_PrivateResidential.set('fieldAliases', {'Postal': 'Postal', 'X-Coord': 'X-Coord', 'Y-Coord': 'Y-Coord', 'Hub distan': 'Hub distan', 'Hub dist_1': 'Hub dist_1', 'Hub dist_2': 'Hub dist_2', 'Hub dist_3': 'Hub dist_3', });
lyr_PvtResiHubDistSubzone.set('fieldAliases', {'Postal': 'Postal', 'X-Coord': 'X-Coord', 'Y-Coord': 'Y-Coord', 'Hub dist_2': 'Hub dist_2', 'Hub dist_3': 'Hub dist_3', 'SUBZONE_N': 'SUBZONE_N', 'Mean Dist': 'Mean Dist', });
lyr_PublicResidential.set('fieldAliases', {'PostalCode': 'PostalCode', 'X-Coord': 'X-Coord', 'Y-Coord': 'Y-Coord', });
lyr_PublicResiHubDistSubzone.set('fieldAliases', {'PostalCode': 'PostalCode', 'X-Coord': 'X-Coord', 'Y-Coord': 'Y-Coord', 'SUBZONE_N': 'SUBZONE_N', 'Mean Dist': 'Mean Dist', });
lyr_Composite_AllGovFoodPlaces.set('fieldAliases', {'name_of_ce': 'name_of_ce', 'location_o': 'location_o', 'type_of_ce': 'type_of_ce', 'owner': 'owner', 'no_of_stal': 'no_of_stal', 'no_of_cook': 'no_of_cook', 'no_of_mkt_': 'no_of_mkt_', 'PostalCode': 'PostalCode', 'X-Coord': 'X-Coord', 'Y-Coord': 'Y-Coord', 'name_of__1': 'name_of__1', 'location_1': 'location_1', 'type_of__1': 'type_of__1', 'owner_2': 'owner_2', 'no_of_st_1': 'no_of_st_1', 'no_of_co_1': 'no_of_co_1', 'no_of_mk_1': 'no_of_mk_1', 'postalco_1': 'postalco_1', 'x-coord_2': 'x-coord_2', 'y-coord_2': 'y-coord_2', });
lyr_All_Govt_FoodPlaces.set('fieldAliases', {'name_of_ce': 'name_of_ce', 'location_o': 'location_o', 'type_of_ce': 'type_of_ce', 'owner': 'owner', 'no_of_stal': 'no_of_stal', 'no_of_cook': 'no_of_cook', 'no_of_mkt_': 'no_of_mkt_', 'PostalCode': 'PostalCode', 'X-Coord': 'X-Coord', 'Y-Coord': 'Y-Coord', });
lyr_SUBZONE_P2014.set('fieldImages', {'OBJECTID': 'TextEdit', 'SUBZONE_NO': 'TextEdit', 'SUBZONE_N': 'TextEdit', 'SUBZONE_C': 'TextEdit', 'CA_IND': 'TextEdit', 'PLN_AREA_N': 'TextEdit', 'PLN_AREA_C': 'TextEdit', 'REGION_N': 'TextEdit', 'REGION_C': 'TextEdit', 'INC_CRC': 'TextEdit', 'FMEL_UPD_D': 'TextEdit', 'X_ADDR': 'TextEdit', 'Y_ADDR': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'AgeGroup20': 'TextEdit', 'AgeGroup_1': 'TextEdit', 'AgeGroup_2': 'TextEdit', 'AgeGroup_3': 'TextEdit', 'AgeGroup_4': 'TextEdit', 'AgeGroup_5': 'TextEdit', 'AgeGroup_6': 'TextEdit', 'AgeGroup_7': 'TextEdit', 'AgeGroup_8': 'TextEdit', 'AgeGroup_9': 'TextEdit', 'AgeGroup10': 'TextEdit', 'AgeGroup11': 'TextEdit', 'AgeGroup12': 'TextEdit', 'AgeGroup13': 'TextEdit', 'AgeGroup14': 'TextEdit', 'AgeGroup15': 'TextEdit', 'AgeGroup16': 'TextEdit', 'AgeGroup17': 'TextEdit', 'AgeGroup18': 'TextEdit', 'AgeGroup19': 'TextEdit', 'AgeGroup21': 'TextEdit', 'AgeGroup22': 'TextEdit', });
lyr_ResidentsbySubzone.set('fieldImages', {'OBJECTID': 'TextEdit', 'SUBZONE_N': 'TextEdit', 'PLN_AREA_N': 'TextEdit', 'TOTAL': 'TextEdit', 'BET0TO4': 'TextEdit', 'BET5TO9': 'TextEdit', 'BET10TO14': 'TextEdit', 'BET15TO19': 'TextEdit', 'BET20TO24': 'TextEdit', 'BET25TO29': 'TextEdit', 'BET30TO34': 'TextEdit', 'BET35TO39': 'TextEdit', 'BET40TO44': 'TextEdit', 'BET45TO49': 'TextEdit', 'BET50TO54': 'TextEdit', 'BET55TO59': 'TextEdit', 'BET60TO64': 'TextEdit', 'BET65TO69': 'TextEdit', 'BET70TO74': 'TextEdit', 'BET75TO79': 'TextEdit', 'BET80TO84': 'TextEdit', 'OVER85': 'TextEdit', 'INC_CRC': 'TextEdit', 'FMEL_UPD_D': 'TextEdit', 'X_ADDR': 'TextEdit', 'Y_ADDR': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_PrivateResidential.set('fieldImages', {'Postal': 'TextEdit', 'X-Coord': 'TextEdit', 'Y-Coord': 'TextEdit', 'Hub distan': 'TextEdit', 'Hub dist_1': 'TextEdit', 'Hub dist_2': 'TextEdit', 'Hub dist_3': 'TextEdit', });
lyr_PvtResiHubDistSubzone.set('fieldImages', {'Postal': 'TextEdit', 'X-Coord': 'TextEdit', 'Y-Coord': 'TextEdit', 'Hub dist_2': 'TextEdit', 'Hub dist_3': 'TextEdit', 'SUBZONE_N': 'TextEdit', 'Mean Dist': 'TextEdit', });
lyr_PublicResidential.set('fieldImages', {'PostalCode': 'TextEdit', 'X-Coord': 'TextEdit', 'Y-Coord': 'TextEdit', });
lyr_PublicResiHubDistSubzone.set('fieldImages', {'PostalCode': 'TextEdit', 'X-Coord': 'TextEdit', 'Y-Coord': 'TextEdit', 'SUBZONE_N': 'TextEdit', 'Mean Dist': 'TextEdit', });
lyr_Composite_AllGovFoodPlaces.set('fieldImages', {'name_of_ce': 'TextEdit', 'location_o': 'TextEdit', 'type_of_ce': 'TextEdit', 'owner': 'TextEdit', 'no_of_stal': 'TextEdit', 'no_of_cook': 'TextEdit', 'no_of_mkt_': 'TextEdit', 'PostalCode': 'TextEdit', 'X-Coord': 'TextEdit', 'Y-Coord': 'TextEdit', 'name_of__1': 'TextEdit', 'location_1': 'TextEdit', 'type_of__1': 'TextEdit', 'owner_2': 'TextEdit', 'no_of_st_1': 'TextEdit', 'no_of_co_1': 'TextEdit', 'no_of_mk_1': 'TextEdit', 'postalco_1': 'TextEdit', 'x-coord_2': 'TextEdit', 'y-coord_2': 'TextEdit', });
lyr_All_Govt_FoodPlaces.set('fieldImages', {'name_of_ce': 'TextEdit', 'location_o': 'TextEdit', 'type_of_ce': 'TextEdit', 'owner': 'TextEdit', 'no_of_stal': 'TextEdit', 'no_of_cook': 'TextEdit', 'no_of_mkt_': 'TextEdit', 'PostalCode': 'TextEdit', 'X-Coord': 'TextEdit', 'Y-Coord': 'TextEdit', });
lyr_SUBZONE_P2014.set('fieldLabels', {'OBJECTID': 'no label', 'SUBZONE_NO': 'no label', 'SUBZONE_N': 'header label', 'SUBZONE_C': 'no label', 'CA_IND': 'no label', 'PLN_AREA_N': 'no label', 'PLN_AREA_C': 'no label', 'REGION_N': 'no label', 'REGION_C': 'no label', 'INC_CRC': 'no label', 'FMEL_UPD_D': 'no label', 'X_ADDR': 'no label', 'Y_ADDR': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'AgeGroup20': 'no label', 'AgeGroup_1': 'no label', 'AgeGroup_2': 'no label', 'AgeGroup_3': 'no label', 'AgeGroup_4': 'no label', 'AgeGroup_5': 'no label', 'AgeGroup_6': 'no label', 'AgeGroup_7': 'no label', 'AgeGroup_8': 'no label', 'AgeGroup_9': 'no label', 'AgeGroup10': 'no label', 'AgeGroup11': 'no label', 'AgeGroup12': 'no label', 'AgeGroup13': 'no label', 'AgeGroup14': 'no label', 'AgeGroup15': 'no label', 'AgeGroup16': 'no label', 'AgeGroup17': 'no label', 'AgeGroup18': 'no label', 'AgeGroup19': 'no label', 'AgeGroup21': 'no label', 'AgeGroup22': 'no label', });
lyr_ResidentsbySubzone.set('fieldLabels', {'OBJECTID': 'no label', 'SUBZONE_N': 'no label', 'PLN_AREA_N': 'no label', 'TOTAL': 'no label', 'BET0TO4': 'no label', 'BET5TO9': 'no label', 'BET10TO14': 'no label', 'BET15TO19': 'no label', 'BET20TO24': 'no label', 'BET25TO29': 'no label', 'BET30TO34': 'no label', 'BET35TO39': 'no label', 'BET40TO44': 'no label', 'BET45TO49': 'no label', 'BET50TO54': 'no label', 'BET55TO59': 'no label', 'BET60TO64': 'no label', 'BET65TO69': 'no label', 'BET70TO74': 'no label', 'BET75TO79': 'no label', 'BET80TO84': 'no label', 'OVER85': 'no label', 'INC_CRC': 'no label', 'FMEL_UPD_D': 'no label', 'X_ADDR': 'no label', 'Y_ADDR': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_PrivateResidential.set('fieldLabels', {'Postal': 'no label', 'X-Coord': 'no label', 'Y-Coord': 'no label', 'Hub distan': 'no label', 'Hub dist_1': 'no label', 'Hub dist_2': 'no label', 'Hub dist_3': 'no label', });
lyr_PvtResiHubDistSubzone.set('fieldLabels', {'Postal': 'no label', 'X-Coord': 'no label', 'Y-Coord': 'no label', 'Hub dist_2': 'no label', 'Hub dist_3': 'no label', 'SUBZONE_N': 'no label', 'Mean Dist': 'no label', });
lyr_PublicResidential.set('fieldLabels', {'PostalCode': 'no label', 'X-Coord': 'no label', 'Y-Coord': 'no label', });
lyr_PublicResiHubDistSubzone.set('fieldLabels', {'PostalCode': 'no label', 'X-Coord': 'no label', 'Y-Coord': 'no label', 'SUBZONE_N': 'no label', 'Mean Dist': 'no label', });
lyr_Composite_AllGovFoodPlaces.set('fieldLabels', {'name_of_ce': 'no label', 'location_o': 'no label', 'type_of_ce': 'no label', 'owner': 'no label', 'no_of_stal': 'no label', 'no_of_cook': 'no label', 'no_of_mkt_': 'no label', 'PostalCode': 'no label', 'X-Coord': 'no label', 'Y-Coord': 'no label', 'name_of__1': 'no label', 'location_1': 'no label', 'type_of__1': 'no label', 'owner_2': 'no label', 'no_of_st_1': 'no label', 'no_of_co_1': 'no label', 'no_of_mk_1': 'no label', 'postalco_1': 'no label', 'x-coord_2': 'no label', 'y-coord_2': 'no label', });
lyr_All_Govt_FoodPlaces.set('fieldLabels', {'name_of_ce': 'no label', 'location_o': 'no label', 'type_of_ce': 'no label', 'owner': 'no label', 'no_of_stal': 'no label', 'no_of_cook': 'no label', 'no_of_mkt_': 'no label', 'PostalCode': 'no label', 'X-Coord': 'no label', 'Y-Coord': 'no label', });
lyr_All_Govt_FoodPlaces.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});