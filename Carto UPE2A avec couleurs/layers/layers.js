var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_France_1 = new ol.format.GeoJSON();
var features_France_1 = format_France_1.readFeatures(json_France_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_France_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_France_1.addFeatures(features_France_1);
var lyr_France_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_France_1, 
                style: style_France_1,
                popuplayertitle: "France",
                interactive: false,
                title: '<img src="styles/legend/France_1.png" /> France'
            });
var format_SaneetLoire_2 = new ol.format.GeoJSON();
var features_SaneetLoire_2 = format_SaneetLoire_2.readFeatures(json_SaneetLoire_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SaneetLoire_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SaneetLoire_2.addFeatures(features_SaneetLoire_2);
var lyr_SaneetLoire_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SaneetLoire_2, 
                style: style_SaneetLoire_2,
                popuplayertitle: "Saône-et-Loire",
                interactive: true,
                title: '<img src="styles/legend/SaneetLoire_2.png" /> Saône-et-Loire'
            });
var format_Nivre_3 = new ol.format.GeoJSON();
var features_Nivre_3 = format_Nivre_3.readFeatures(json_Nivre_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nivre_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nivre_3.addFeatures(features_Nivre_3);
var lyr_Nivre_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nivre_3, 
                style: style_Nivre_3,
                popuplayertitle: "Nièvre",
                interactive: true,
                title: '<img src="styles/legend/Nivre_3.png" /> Nièvre'
            });
var format_CtedOr_4 = new ol.format.GeoJSON();
var features_CtedOr_4 = format_CtedOr_4.readFeatures(json_CtedOr_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CtedOr_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CtedOr_4.addFeatures(features_CtedOr_4);
var lyr_CtedOr_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CtedOr_4, 
                style: style_CtedOr_4,
                popuplayertitle: "Côte-d'Or",
                interactive: true,
                title: '<img src="styles/legend/CtedOr_4.png" /> Côte-d\'Or'
            });
var format_Yonne_5 = new ol.format.GeoJSON();
var features_Yonne_5 = format_Yonne_5.readFeatures(json_Yonne_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Yonne_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Yonne_5.addFeatures(features_Yonne_5);
var lyr_Yonne_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Yonne_5, 
                style: style_Yonne_5,
                popuplayertitle: "Yonne",
                interactive: true,
                title: '<img src="styles/legend/Yonne_5.png" /> Yonne'
            });
var format_AcadmiedeDijon_6 = new ol.format.GeoJSON();
var features_AcadmiedeDijon_6 = format_AcadmiedeDijon_6.readFeatures(json_AcadmiedeDijon_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AcadmiedeDijon_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AcadmiedeDijon_6.addFeatures(features_AcadmiedeDijon_6);
var lyr_AcadmiedeDijon_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AcadmiedeDijon_6, 
                style: style_AcadmiedeDijon_6,
                popuplayertitle: "Académie de Dijon",
                interactive: false,
                title: '<img src="styles/legend/AcadmiedeDijon_6.png" /> Académie de Dijon'
            });
var format_UPE2Acollge_7 = new ol.format.GeoJSON();
var features_UPE2Acollge_7 = format_UPE2Acollge_7.readFeatures(json_UPE2Acollge_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UPE2Acollge_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UPE2Acollge_7.addFeatures(features_UPE2Acollge_7);
var lyr_UPE2Acollge_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UPE2Acollge_7, 
                style: style_UPE2Acollge_7,
                popuplayertitle: "UPE2A collège",
                interactive: true,
                title: '<img src="styles/legend/UPE2Acollge_7.png" /> UPE2A collège'
            });
var format_UPE2Alyce_8 = new ol.format.GeoJSON();
var features_UPE2Alyce_8 = format_UPE2Alyce_8.readFeatures(json_UPE2Alyce_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UPE2Alyce_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UPE2Alyce_8.addFeatures(features_UPE2Alyce_8);
var lyr_UPE2Alyce_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UPE2Alyce_8, 
                style: style_UPE2Alyce_8,
                popuplayertitle: "UPE2A lycée",
                interactive: true,
                title: '<img src="styles/legend/UPE2Alyce_8.png" /> UPE2A lycée'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_France_1.setVisible(true);lyr_SaneetLoire_2.setVisible(true);lyr_Nivre_3.setVisible(true);lyr_CtedOr_4.setVisible(true);lyr_Yonne_5.setVisible(true);lyr_AcadmiedeDijon_6.setVisible(true);lyr_UPE2Acollge_7.setVisible(true);lyr_UPE2Alyce_8.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_France_1,lyr_SaneetLoire_2,lyr_Nivre_3,lyr_CtedOr_4,lyr_Yonne_5,lyr_AcadmiedeDijon_6,lyr_UPE2Acollge_7,lyr_UPE2Alyce_8];
lyr_France_1.set('fieldAliases', {'code': 'code', 'nom': 'nom', });
lyr_SaneetLoire_2.set('fieldAliases', {'code': 'code', 'nom': 'nom', });
lyr_Nivre_3.set('fieldAliases', {'code': 'code', 'nom': 'nom', });
lyr_CtedOr_4.set('fieldAliases', {'code': 'code', 'nom': 'nom', });
lyr_Yonne_5.set('fieldAliases', {'code': 'code', 'nom': 'nom', });
lyr_AcadmiedeDijon_6.set('fieldAliases', {'code': 'code', 'nom': 'nom', });
lyr_UPE2Acollge_7.set('fieldAliases', {'EPLE': 'EPLE', 'latitude': 'latitude', 'longitude': 'longitude', });
lyr_UPE2Alyce_8.set('fieldAliases', {'EPLE': 'EPLE', 'Longitude': 'Longitude', 'Latitude': 'Latitude', });
lyr_France_1.set('fieldImages', {'code': 'TextEdit', 'nom': 'TextEdit', });
lyr_SaneetLoire_2.set('fieldImages', {'code': 'TextEdit', 'nom': 'TextEdit', });
lyr_Nivre_3.set('fieldImages', {'code': 'TextEdit', 'nom': 'TextEdit', });
lyr_CtedOr_4.set('fieldImages', {'code': 'TextEdit', 'nom': 'TextEdit', });
lyr_Yonne_5.set('fieldImages', {'code': 'TextEdit', 'nom': 'TextEdit', });
lyr_AcadmiedeDijon_6.set('fieldImages', {'code': 'TextEdit', 'nom': 'TextEdit', });
lyr_UPE2Acollge_7.set('fieldImages', {'EPLE': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', });
lyr_UPE2Alyce_8.set('fieldImages', {'EPLE': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude': 'TextEdit', });
lyr_France_1.set('fieldLabels', {'code': 'no label', 'nom': 'no label', });
lyr_SaneetLoire_2.set('fieldLabels', {'code': 'hidden field', 'nom': 'inline label - always visible', });
lyr_Nivre_3.set('fieldLabels', {'code': 'hidden field', 'nom': 'inline label - always visible', });
lyr_CtedOr_4.set('fieldLabels', {'code': 'hidden field', 'nom': 'inline label - always visible', });
lyr_Yonne_5.set('fieldLabels', {'code': 'hidden field', 'nom': 'inline label - always visible', });
lyr_AcadmiedeDijon_6.set('fieldLabels', {'code': 'no label', 'nom': 'no label', });
lyr_UPE2Acollge_7.set('fieldLabels', {'EPLE': 'inline label - always visible', 'latitude': 'hidden field', 'longitude': 'hidden field', });
lyr_UPE2Alyce_8.set('fieldLabels', {'EPLE': 'inline label - always visible', 'Longitude': 'hidden field', 'Latitude': 'hidden field', });
lyr_UPE2Alyce_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});