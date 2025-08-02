var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_KesehatanGMSheet1_1 = new ol.format.GeoJSON();
var features_KesehatanGMSheet1_1 = format_KesehatanGMSheet1_1.readFeatures(json_KesehatanGMSheet1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KesehatanGMSheet1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KesehatanGMSheet1_1.addFeatures(features_KesehatanGMSheet1_1);
var lyr_KesehatanGMSheet1_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KesehatanGMSheet1_1, 
                style: style_KesehatanGMSheet1_1,
                popuplayertitle: "Kesehatan GM - Sheet1",
                interactive: true,
                    title: '<img src="styles/legend/KesehatanGMSheet1_1.png" /> Kesehatan GM - Sheet1'
                });

lyr_GoogleSatellite_0.setVisible(true);lyr_KesehatanGMSheet1_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_KesehatanGMSheet1_1];
lyr_KesehatanGMSheet1_1.set('fieldAliases', {'No': 'No', 'Nama': 'Nama', 'Lintang': 'Lintang', 'Bujur': 'Bujur', 'Data': 'Data', 'Data 1': 'Data 1', 'Data 2': 'Data 2', 'Data 3': 'Data 3', 'Data 4': 'Data 4', 'Data 5': 'Data 5', });
lyr_KesehatanGMSheet1_1.set('fieldImages', {'No': 'Range', 'Nama': 'TextEdit', 'Lintang': 'TextEdit', 'Bujur': 'TextEdit', 'Data': 'TextEdit', 'Data 1': 'TextEdit', 'Data 2': 'TextEdit', 'Data 3': 'TextEdit', 'Data 4': 'TextEdit', 'Data 5': 'TextEdit', });
lyr_KesehatanGMSheet1_1.set('fieldLabels', {'No': 'hidden field', 'Nama': 'no label', 'Lintang': 'hidden field', 'Bujur': 'hidden field', 'Data': 'inline label - visible with data', 'Data 1': 'inline label - visible with data', 'Data 2': 'inline label - visible with data', 'Data 3': 'inline label - visible with data', 'Data 4': 'inline label - visible with data', 'Data 5': 'inline label - visible with data', });
lyr_KesehatanGMSheet1_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});