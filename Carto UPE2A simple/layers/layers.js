var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 0.469000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Suisse_1 = new ol.format.GeoJSON();
var features_Suisse_1 = format_Suisse_1.readFeatures(json_Suisse_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Suisse_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Suisse_1.addFeatures(features_Suisse_1);
var lyr_Suisse_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Suisse_1, 
                style: style_Suisse_1,
                popuplayertitle: "Suisse",
                interactive: false,
                title: '<img src="styles/legend/Suisse_1.png" /> Suisse'
            });
var format_FrancesansBourgognecontourdesdepartements_2 = new ol.format.GeoJSON();
var features_FrancesansBourgognecontourdesdepartements_2 = format_FrancesansBourgognecontourdesdepartements_2.readFeatures(json_FrancesansBourgognecontourdesdepartements_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FrancesansBourgognecontourdesdepartements_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FrancesansBourgognecontourdesdepartements_2.addFeatures(features_FrancesansBourgognecontourdesdepartements_2);
var lyr_FrancesansBourgognecontourdesdepartements_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FrancesansBourgognecontourdesdepartements_2, 
                style: style_FrancesansBourgognecontourdesdepartements_2,
                popuplayertitle: "France sans Bourgogne — contourdesdepartements",
                interactive: false,
                title: '<img src="styles/legend/FrancesansBourgognecontourdesdepartements_2.png" /> France sans Bourgogne — contourdesdepartements'
            });
var format_UPE2Alyce_3 = new ol.format.GeoJSON();
var features_UPE2Alyce_3 = format_UPE2Alyce_3.readFeatures(json_UPE2Alyce_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UPE2Alyce_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UPE2Alyce_3.addFeatures(features_UPE2Alyce_3);
var lyr_UPE2Alyce_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UPE2Alyce_3, 
                style: style_UPE2Alyce_3,
                popuplayertitle: "UPE2A lycée",
                interactive: true,
                title: '<img src="styles/legend/UPE2Alyce_3.png" /> UPE2A lycée'
            });
var format_UPE2Acollge_4 = new ol.format.GeoJSON();
var features_UPE2Acollge_4 = format_UPE2Acollge_4.readFeatures(json_UPE2Acollge_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UPE2Acollge_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UPE2Acollge_4.addFeatures(features_UPE2Acollge_4);
var lyr_UPE2Acollge_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UPE2Acollge_4, 
                style: style_UPE2Acollge_4,
                popuplayertitle: "UPE2A collège",
                interactive: true,
                title: '<img src="styles/legend/UPE2Acollge_4.png" /> UPE2A collège'
            });
var group_UPE2A = new ol.layer.Group({
                                layers: [lyr_UPE2Alyce_3,lyr_UPE2Acollge_4,],
                                fold: "open",
                                title: "UPE2A"});
var group_Filtresdpartements = new ol.layer.Group({
                                layers: [lyr_Suisse_1,lyr_FrancesansBourgognecontourdesdepartements_2,],
                                fold: "open",
                                title: "Filtres départements"});

lyr_OpenStreetMap_0.setVisible(true);lyr_Suisse_1.setVisible(true);lyr_FrancesansBourgognecontourdesdepartements_2.setVisible(true);lyr_UPE2Alyce_3.setVisible(true);lyr_UPE2Acollge_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,group_Filtresdpartements,group_UPE2A];
lyr_Suisse_1.set('fieldAliases', {'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', });
lyr_FrancesansBourgognecontourdesdepartements_2.set('fieldAliases', {'fid': 'fid', 'code': 'code', 'nom': 'nom', });
lyr_UPE2Alyce_3.set('fieldAliases', {'EPLE': 'EPLE', 'Longitude': 'Longitude', 'Latitude': 'Latitude', });
lyr_UPE2Acollge_4.set('fieldAliases', {'EPLE': 'EPLE', 'latitude': 'latitude', 'longitude': 'longitude', });
lyr_Suisse_1.set('fieldImages', {'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', });
lyr_FrancesansBourgognecontourdesdepartements_2.set('fieldImages', {'fid': 'TextEdit', 'code': 'TextEdit', 'nom': 'TextEdit', });
lyr_UPE2Alyce_3.set('fieldImages', {'EPLE': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude': 'TextEdit', });
lyr_UPE2Acollge_4.set('fieldImages', {'EPLE': 'TextEdit', 'latitude': 'DateTime', 'longitude': 'TextEdit', });
lyr_Suisse_1.set('fieldLabels', {'GID_0': 'no label', 'COUNTRY': 'no label', });
lyr_FrancesansBourgognecontourdesdepartements_2.set('fieldLabels', {'fid': 'no label', 'code': 'hidden field', 'nom': 'hidden field', });
lyr_UPE2Alyce_3.set('fieldLabels', {'EPLE': 'inline label - always visible', 'Longitude': 'hidden field', 'Latitude': 'hidden field', });
lyr_UPE2Acollge_4.set('fieldLabels', {'EPLE': 'inline label - always visible', 'latitude': 'hidden field', 'longitude': 'hidden field', });
lyr_UPE2Acollge_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});