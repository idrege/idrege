ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([205830.242652, 5795554.468686, 695440.495797, 6196735.114886]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_SaneetLoire_1 = new ol.format.GeoJSON();
var features_SaneetLoire_1 = format_SaneetLoire_1.readFeatures(json_SaneetLoire_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SaneetLoire_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SaneetLoire_1.addFeatures(features_SaneetLoire_1);
var lyr_SaneetLoire_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SaneetLoire_1, 
                style: style_SaneetLoire_1,
                popuplayertitle: "Saône-et-Loire",
                interactive: false,
                title: '<img src="styles/legend/SaneetLoire_1.png" /> Saône-et-Loire'
            });
var format_Nivre_2 = new ol.format.GeoJSON();
var features_Nivre_2 = format_Nivre_2.readFeatures(json_Nivre_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nivre_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nivre_2.addFeatures(features_Nivre_2);
var lyr_Nivre_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nivre_2, 
                style: style_Nivre_2,
                popuplayertitle: "Nièvre",
                interactive: false,
                title: '<img src="styles/legend/Nivre_2.png" /> Nièvre'
            });
var format_CtedOr_3 = new ol.format.GeoJSON();
var features_CtedOr_3 = format_CtedOr_3.readFeatures(json_CtedOr_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CtedOr_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CtedOr_3.addFeatures(features_CtedOr_3);
var lyr_CtedOr_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CtedOr_3, 
                style: style_CtedOr_3,
                popuplayertitle: "Côte-d'Or",
                interactive: false,
                title: '<img src="styles/legend/CtedOr_3.png" /> Côte-d\'Or'
            });
var format_Yonne_4 = new ol.format.GeoJSON();
var features_Yonne_4 = format_Yonne_4.readFeatures(json_Yonne_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Yonne_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Yonne_4.addFeatures(features_Yonne_4);
var lyr_Yonne_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Yonne_4, 
                style: style_Yonne_4,
                popuplayertitle: "Yonne",
                interactive: false,
                title: '<img src="styles/legend/Yonne_4.png" /> Yonne'
            });
var format_UPE2Alyce_5 = new ol.format.GeoJSON();
var features_UPE2Alyce_5 = format_UPE2Alyce_5.readFeatures(json_UPE2Alyce_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UPE2Alyce_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UPE2Alyce_5.addFeatures(features_UPE2Alyce_5);
var lyr_UPE2Alyce_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UPE2Alyce_5, 
                style: style_UPE2Alyce_5,
                popuplayertitle: "UPE2A lycée",
                interactive: true,
                title: '<img src="styles/legend/UPE2Alyce_5.png" /> UPE2A lycée'
            });
var format_UPE2Acollge_6 = new ol.format.GeoJSON();
var features_UPE2Acollge_6 = format_UPE2Acollge_6.readFeatures(json_UPE2Acollge_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UPE2Acollge_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UPE2Acollge_6.addFeatures(features_UPE2Acollge_6);
var lyr_UPE2Acollge_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UPE2Acollge_6, 
                style: style_UPE2Acollge_6,
                popuplayertitle: "UPE2A collège",
                interactive: true,
                title: '<img src="styles/legend/UPE2Acollge_6.png" /> UPE2A collège'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_SaneetLoire_1.setVisible(true);lyr_Nivre_2.setVisible(true);lyr_CtedOr_3.setVisible(true);lyr_Yonne_4.setVisible(true);lyr_UPE2Alyce_5.setVisible(true);lyr_UPE2Acollge_6.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_SaneetLoire_1,lyr_Nivre_2,lyr_CtedOr_3,lyr_Yonne_4,lyr_UPE2Alyce_5,lyr_UPE2Acollge_6];
lyr_SaneetLoire_1.set('fieldAliases', {'code': 'code', 'nom': 'nom', });
lyr_Nivre_2.set('fieldAliases', {'code': 'code', 'nom': 'nom', });
lyr_CtedOr_3.set('fieldAliases', {'code': 'code', 'nom': 'nom', });
lyr_Yonne_4.set('fieldAliases', {'code': 'code', 'nom': 'nom', });
lyr_UPE2Alyce_5.set('fieldAliases', {'EPLE': 'EPLE', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Type': 'Type', 'Adresse': 'Adresse', 'Téléphone': 'Téléphone', 'Courriel': 'Courriel', });
lyr_UPE2Acollge_6.set('fieldAliases', {'EPLE': 'EPLE', 'latitude': 'latitude', 'longitude': 'longitude', 'Adresse': 'Adresse', 'Téléphone': 'Téléphone', 'Courriel': 'Courriel', });
lyr_SaneetLoire_1.set('fieldImages', {'code': 'TextEdit', 'nom': 'TextEdit', });
lyr_Nivre_2.set('fieldImages', {'code': 'TextEdit', 'nom': 'TextEdit', });
lyr_CtedOr_3.set('fieldImages', {'code': 'TextEdit', 'nom': 'TextEdit', });
lyr_Yonne_4.set('fieldImages', {'code': 'TextEdit', 'nom': 'TextEdit', });
lyr_UPE2Alyce_5.set('fieldImages', {'EPLE': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude': 'TextEdit', 'Type': 'TextEdit', 'Adresse': 'TextEdit', 'Téléphone': 'TextEdit', 'Courriel': 'TextEdit', });
lyr_UPE2Acollge_6.set('fieldImages', {'EPLE': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'Adresse': 'TextEdit', 'Téléphone': 'TextEdit', 'Courriel': 'TextEdit', });
lyr_SaneetLoire_1.set('fieldLabels', {'code': 'hidden field', 'nom': 'inline label - always visible', });
lyr_Nivre_2.set('fieldLabels', {'code': 'hidden field', 'nom': 'inline label - always visible', });
lyr_CtedOr_3.set('fieldLabels', {'code': 'hidden field', 'nom': 'inline label - always visible', });
lyr_Yonne_4.set('fieldLabels', {'code': 'hidden field', 'nom': 'inline label - always visible', });
lyr_UPE2Alyce_5.set('fieldLabels', {'EPLE': 'inline label - always visible', 'Longitude': 'hidden field', 'Latitude': 'hidden field', 'Type': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'Téléphone': 'inline label - always visible', 'Courriel': 'inline label - always visible', });
lyr_UPE2Acollge_6.set('fieldLabels', {'EPLE': 'inline label - always visible', 'latitude': 'hidden field', 'longitude': 'hidden field', 'Adresse': 'inline label - always visible', 'Téléphone': 'inline label - always visible', 'Courriel': 'inline label - always visible', });
lyr_UPE2Acollge_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});