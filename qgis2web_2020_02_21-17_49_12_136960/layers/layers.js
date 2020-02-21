var wms_layers = [];

var format_Residential_areas_0 = new ol.format.GeoJSON();
var features_Residential_areas_0 = format_Residential_areas_0.readFeatures(json_Residential_areas_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Residential_areas_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Residential_areas_0.addFeatures(features_Residential_areas_0);
var lyr_Residential_areas_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Residential_areas_0, 
                style: style_Residential_areas_0,
                interactive: false,
                title: '<img src="styles/legend/Residential_areas_0.png" /> Residential_areas'
            });
var format_Sea_1 = new ol.format.GeoJSON();
var features_Sea_1 = format_Sea_1.readFeatures(json_Sea_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sea_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sea_1.addFeatures(features_Sea_1);
var lyr_Sea_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sea_1, 
                style: style_Sea_1,
                interactive: false,
                title: '<img src="styles/legend/Sea_1.png" /> Sea'
            });
var format_Lakes_2 = new ol.format.GeoJSON();
var features_Lakes_2 = format_Lakes_2.readFeatures(json_Lakes_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lakes_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lakes_2.addFeatures(features_Lakes_2);
var lyr_Lakes_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Lakes_2, 
                style: style_Lakes_2,
                interactive: false,
                title: '<img src="styles/legend/Lakes_2.png" /> Lakes'
            });
var format_Buffers_aggregated_3 = new ol.format.GeoJSON();
var features_Buffers_aggregated_3 = format_Buffers_aggregated_3.readFeatures(json_Buffers_aggregated_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buffers_aggregated_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffers_aggregated_3.addFeatures(features_Buffers_aggregated_3);
var lyr_Buffers_aggregated_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Buffers_aggregated_3, 
                style: style_Buffers_aggregated_3,
                interactive: true,
                title: '<img src="styles/legend/Buffers_aggregated_3.png" /> Buffers_aggregated'
            });
var format_helsinki_4 = new ol.format.GeoJSON();
var features_helsinki_4 = format_helsinki_4.readFeatures(json_helsinki_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_helsinki_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_helsinki_4.addFeatures(features_helsinki_4);
var lyr_helsinki_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_helsinki_4, 
                style: style_helsinki_4,
                interactive: false,
                title: '<img src="styles/legend/helsinki_4.png" /> helsinki'
            });
var format_ulkokunnat_5 = new ol.format.GeoJSON();
var features_ulkokunnat_5 = format_ulkokunnat_5.readFeatures(json_ulkokunnat_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ulkokunnat_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ulkokunnat_5.addFeatures(features_ulkokunnat_5);
var lyr_ulkokunnat_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ulkokunnat_5, 
                style: style_ulkokunnat_5,
                interactive: false,
                title: '<img src="styles/legend/ulkokunnat_5.png" /> ulkokunnat'
            });
var format_hki_moottorivaylat_6 = new ol.format.GeoJSON();
var features_hki_moottorivaylat_6 = format_hki_moottorivaylat_6.readFeatures(json_hki_moottorivaylat_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hki_moottorivaylat_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hki_moottorivaylat_6.addFeatures(features_hki_moottorivaylat_6);
var lyr_hki_moottorivaylat_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_hki_moottorivaylat_6, 
                style: style_hki_moottorivaylat_6,
                interactive: false,
                title: '<img src="styles/legend/hki_moottorivaylat_6.png" /> hki_moottorivaylat'
            });
var format_hki_paakadut_7 = new ol.format.GeoJSON();
var features_hki_paakadut_7 = format_hki_paakadut_7.readFeatures(json_hki_paakadut_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hki_paakadut_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hki_paakadut_7.addFeatures(features_hki_paakadut_7);
var lyr_hki_paakadut_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_hki_paakadut_7, 
                style: style_hki_paakadut_7,
                interactive: false,
                title: '<img src="styles/legend/hki_paakadut_7.png" /> hki_paakadut'
            });
var format_Selected_daycare_centers_8 = new ol.format.GeoJSON();
var features_Selected_daycare_centers_8 = format_Selected_daycare_centers_8.readFeatures(json_Selected_daycare_centers_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Selected_daycare_centers_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Selected_daycare_centers_8.addFeatures(features_Selected_daycare_centers_8);cluster_Selected_daycare_centers_8 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Selected_daycare_centers_8
});
var lyr_Selected_daycare_centers_8 = new ol.layer.Vector({
                declutter: true,
                source:cluster_Selected_daycare_centers_8, 
                style: style_Selected_daycare_centers_8,
                interactive: true,
                title: '<img src="styles/legend/Selected_daycare_centers_8.png" /> Selected_daycare_centers'
            });

lyr_Residential_areas_0.setVisible(true);lyr_Sea_1.setVisible(true);lyr_Lakes_2.setVisible(true);lyr_Buffers_aggregated_3.setVisible(true);lyr_helsinki_4.setVisible(true);lyr_ulkokunnat_5.setVisible(true);lyr_hki_moottorivaylat_6.setVisible(true);lyr_hki_paakadut_7.setVisible(true);lyr_Selected_daycare_centers_8.setVisible(true);
var layersList = [lyr_Residential_areas_0,lyr_Sea_1,lyr_Lakes_2,lyr_Buffers_aggregated_3,lyr_helsinki_4,lyr_ulkokunnat_5,lyr_hki_moottorivaylat_6,lyr_hki_paakadut_7,lyr_Selected_daycare_centers_8];
lyr_Residential_areas_0.set('fieldAliases', {'fid': 'fid', 'maankaytto': 'maankaytto', 'mtryhm': 'mtryhm', });
lyr_Sea_1.set('fieldAliases', {'mtryhm': 'mtryhm', });
lyr_Lakes_2.set('fieldAliases', {'fid': 'fid', 'vesisto_ni': 'vesisto_ni', 'vesisto__1': 'vesisto__1', 'mtryhm': 'mtryhm', });
lyr_Buffers_aggregated_3.set('fieldAliases', {'2016_1': '2016_1', 'Nimi': 'Nimi', 'Min_dist': 'Min_dist', });
lyr_helsinki_4.set('fieldAliases', {'nimi': 'nimi', 'nimi_r': 'nimi_r', 'kunta': 'kunta', 'mtryhm': 'mtryhm', });
lyr_ulkokunnat_5.set('fieldAliases', {'nimi': 'nimi', 'nimi_r': 'nimi_r', 'kunta': 'kunta', 'mtryhm': 'mtryhm', });
lyr_hki_moottorivaylat_6.set('fieldAliases', {'Vaylatyypp': 'Vaylatyypp', 'DGNtasonro': 'DGNtasonro', 'DGNtasonim': 'DGNtasonim', 'ajo_pvm': 'ajo_pvm', });
lyr_hki_paakadut_7.set('fieldAliases', {'Vaylatyypp': 'Vaylatyypp', 'DGNtasonro': 'DGNtasonro', 'DGNtasonim': 'DGNtasonim', 'ajo_pvm': 'ajo_pvm', });
lyr_Selected_daycare_centers_8.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', });
lyr_Residential_areas_0.set('fieldImages', {'fid': 'TextEdit', 'maankaytto': 'TextEdit', 'mtryhm': 'TextEdit', });
lyr_Sea_1.set('fieldImages', {'mtryhm': 'TextEdit', });
lyr_Lakes_2.set('fieldImages', {'fid': 'TextEdit', 'vesisto_ni': 'TextEdit', 'vesisto__1': 'TextEdit', 'mtryhm': 'TextEdit', });
lyr_Buffers_aggregated_3.set('fieldImages', {'2016_1': 'TextEdit', 'Nimi': 'TextEdit', 'Min_dist': 'TextEdit', });
lyr_helsinki_4.set('fieldImages', {'nimi': 'TextEdit', 'nimi_r': 'TextEdit', 'kunta': 'TextEdit', 'mtryhm': 'TextEdit', });
lyr_ulkokunnat_5.set('fieldImages', {'nimi': 'TextEdit', 'nimi_r': 'TextEdit', 'kunta': 'TextEdit', 'mtryhm': 'TextEdit', });
lyr_hki_moottorivaylat_6.set('fieldImages', {'Vaylatyypp': 'TextEdit', 'DGNtasonro': 'TextEdit', 'DGNtasonim': 'TextEdit', 'ajo_pvm': 'TextEdit', });
lyr_hki_paakadut_7.set('fieldImages', {'Vaylatyypp': '', 'DGNtasonro': '', 'DGNtasonim': '', 'ajo_pvm': '', });
lyr_Selected_daycare_centers_8.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', });
lyr_Residential_areas_0.set('fieldLabels', {'fid': 'no label', 'maankaytto': 'no label', 'mtryhm': 'no label', });
lyr_Sea_1.set('fieldLabels', {'mtryhm': 'no label', });
lyr_Lakes_2.set('fieldLabels', {'fid': 'no label', 'vesisto_ni': 'no label', 'vesisto__1': 'no label', 'mtryhm': 'no label', });
lyr_Buffers_aggregated_3.set('fieldLabels', {'2016_1': 'no label', 'Nimi': 'header label', 'Min_dist': 'no label', });
lyr_helsinki_4.set('fieldLabels', {'nimi': 'no label', 'nimi_r': 'no label', 'kunta': 'no label', 'mtryhm': 'no label', });
lyr_ulkokunnat_5.set('fieldLabels', {'nimi': 'no label', 'nimi_r': 'no label', 'kunta': 'no label', 'mtryhm': 'no label', });
lyr_hki_moottorivaylat_6.set('fieldLabels', {'Vaylatyypp': 'no label', 'DGNtasonro': 'no label', 'DGNtasonim': 'no label', 'ajo_pvm': 'no label', });
lyr_hki_paakadut_7.set('fieldLabels', {'Vaylatyypp': 'no label', 'DGNtasonro': 'no label', 'DGNtasonim': 'no label', 'ajo_pvm': 'no label', });
lyr_Selected_daycare_centers_8.set('fieldLabels', {'Name': 'inline label', 'descriptio': 'no label', });
lyr_Selected_daycare_centers_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});