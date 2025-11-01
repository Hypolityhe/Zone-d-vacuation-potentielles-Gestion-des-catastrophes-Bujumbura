ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32735").setExtent([745739.027675, 9614466.340346, 771839.027675, 9640066.340346]);
var wms_layers = [];


        var lyr_OpenTopoMap_0 = new ol.layer.Tile({
            'title': 'OpenTopoMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">Kartendaten: © OpenStreetMap-Mitwirkende, SRTM | Kartendarstellung: © OpenTopoMap (CC-BY-SA)</a>',
                url: 'https://a.tile.opentopomap.org/{z}/{x}/{y}.png'
            })
        });
var format_TANGANYIKABUJUMBUIRA_1 = new ol.format.GeoJSON();
var features_TANGANYIKABUJUMBUIRA_1 = format_TANGANYIKABUJUMBUIRA_1.readFeatures(json_TANGANYIKABUJUMBUIRA_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32735'});
var jsonSource_TANGANYIKABUJUMBUIRA_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TANGANYIKABUJUMBUIRA_1.addFeatures(features_TANGANYIKABUJUMBUIRA_1);
var lyr_TANGANYIKABUJUMBUIRA_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TANGANYIKABUJUMBUIRA_1, 
                style: style_TANGANYIKABUJUMBUIRA_1,
                popuplayertitle: 'TANGANYIKA BUJUMBUIRA',
                interactive: true,
                title: '<img src="styles/legend/TANGANYIKABUJUMBUIRA_1.png" /> TANGANYIKA BUJUMBUIRA'
            });
var format_Zonedtude_2 = new ol.format.GeoJSON();
var features_Zonedtude_2 = format_Zonedtude_2.readFeatures(json_Zonedtude_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32735'});
var jsonSource_Zonedtude_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonedtude_2.addFeatures(features_Zonedtude_2);
var lyr_Zonedtude_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zonedtude_2, 
                style: style_Zonedtude_2,
                popuplayertitle: 'Zone d\'étude',
                interactive: true,
                title: '<img src="styles/legend/Zonedtude_2.png" /> Zone d\'étude'
            });
var format_Etablissementscritiques_3 = new ol.format.GeoJSON();
var features_Etablissementscritiques_3 = format_Etablissementscritiques_3.readFeatures(json_Etablissementscritiques_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32735'});
var jsonSource_Etablissementscritiques_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Etablissementscritiques_3.addFeatures(features_Etablissementscritiques_3);
var lyr_Etablissementscritiques_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Etablissementscritiques_3, 
                style: style_Etablissementscritiques_3,
                popuplayertitle: 'Etablissements critiques',
                interactive: true,
                title: '<img src="styles/legend/Etablissementscritiques_3.png" /> Etablissements critiques'
            });
var format_Structuressanitaires_4 = new ol.format.GeoJSON();
var features_Structuressanitaires_4 = format_Structuressanitaires_4.readFeatures(json_Structuressanitaires_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32735'});
var jsonSource_Structuressanitaires_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Structuressanitaires_4.addFeatures(features_Structuressanitaires_4);
var lyr_Structuressanitaires_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Structuressanitaires_4, 
                style: style_Structuressanitaires_4,
                popuplayertitle: 'Structures sanitaires',
                interactive: true,
                title: '<img src="styles/legend/Structuressanitaires_4.png" /> Structures sanitaires'
            });
var format_Infrastucturespubliques_5 = new ol.format.GeoJSON();
var features_Infrastucturespubliques_5 = format_Infrastucturespubliques_5.readFeatures(json_Infrastucturespubliques_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32735'});
var jsonSource_Infrastucturespubliques_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Infrastucturespubliques_5.addFeatures(features_Infrastucturespubliques_5);
var lyr_Infrastucturespubliques_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Infrastucturespubliques_5, 
                style: style_Infrastucturespubliques_5,
                popuplayertitle: 'Infrastuctures publiques',
                interactive: true,
                title: '<img src="styles/legend/Infrastucturespubliques_5.png" /> Infrastuctures publiques'
            });
var format_Terrainpublic_6 = new ol.format.GeoJSON();
var features_Terrainpublic_6 = format_Terrainpublic_6.readFeatures(json_Terrainpublic_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32735'});
var jsonSource_Terrainpublic_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Terrainpublic_6.addFeatures(features_Terrainpublic_6);
var lyr_Terrainpublic_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Terrainpublic_6, 
                style: style_Terrainpublic_6,
                popuplayertitle: 'Terrain public',
                interactive: true,
                title: '<img src="styles/legend/Terrainpublic_6.png" /> Terrain public'
            });

lyr_OpenTopoMap_0.setVisible(true);lyr_TANGANYIKABUJUMBUIRA_1.setVisible(true);lyr_Zonedtude_2.setVisible(true);lyr_Etablissementscritiques_3.setVisible(true);lyr_Structuressanitaires_4.setVisible(true);lyr_Infrastucturespubliques_5.setVisible(true);lyr_Terrainpublic_6.setVisible(true);
var layersList = [lyr_OpenTopoMap_0,lyr_TANGANYIKABUJUMBUIRA_1,lyr_Zonedtude_2,lyr_Etablissementscritiques_3,lyr_Structuressanitaires_4,lyr_Infrastucturespubliques_5,lyr_Terrainpublic_6];
lyr_TANGANYIKABUJUMBUIRA_1.set('fieldAliases', {'osm_id': 'osm_id', 'osm_way_id': 'osm_way_id', 'name': 'name', 'type': 'type', 'aeroway': 'aeroway', 'amenity': 'amenity', 'admin_leve': 'admin_leve', 'barrier': 'barrier', 'boundary': 'boundary', 'building': 'building', 'craft': 'craft', 'geological': 'geological', 'historic': 'historic', 'land_area': 'land_area', 'landuse': 'landuse', 'leisure': 'leisure', 'man_made': 'man_made', 'military': 'military', 'natural': 'natural', 'office': 'office', 'place': 'place', 'shop': 'shop', 'sport': 'sport', 'tourism': 'tourism', 'other_tags': 'other_tags', });
lyr_Zonedtude_2.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'fid': 'fid', 'DN': 'DN', 'layer': 'layer', 'path': 'path', });
lyr_Etablissementscritiques_3.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', });
lyr_Structuressanitaires_4.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', });
lyr_Infrastucturespubliques_5.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', });
lyr_Terrainpublic_6.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', });
lyr_TANGANYIKABUJUMBUIRA_1.set('fieldImages', {'osm_id': 'TextEdit', 'osm_way_id': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', 'aeroway': 'TextEdit', 'amenity': 'TextEdit', 'admin_leve': 'TextEdit', 'barrier': 'TextEdit', 'boundary': 'TextEdit', 'building': 'TextEdit', 'craft': 'TextEdit', 'geological': 'TextEdit', 'historic': 'TextEdit', 'land_area': 'TextEdit', 'landuse': 'TextEdit', 'leisure': 'TextEdit', 'man_made': 'TextEdit', 'military': 'TextEdit', 'natural': 'TextEdit', 'office': 'TextEdit', 'place': 'TextEdit', 'shop': 'TextEdit', 'sport': 'TextEdit', 'tourism': 'TextEdit', 'other_tags': 'TextEdit', });
lyr_Zonedtude_2.set('fieldImages', {'osm_id': '', 'code': '', 'fclass': '', 'name': '', 'fid': '', 'DN': '', 'layer': '', 'path': '', });
lyr_Etablissementscritiques_3.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', });
lyr_Structuressanitaires_4.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', });
lyr_Infrastucturespubliques_5.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', });
lyr_Terrainpublic_6.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', });
lyr_TANGANYIKABUJUMBUIRA_1.set('fieldLabels', {'osm_id': 'no label', 'osm_way_id': 'no label', 'name': 'header label - always visible', 'type': 'no label', 'aeroway': 'no label', 'amenity': 'no label', 'admin_leve': 'no label', 'barrier': 'no label', 'boundary': 'no label', 'building': 'inline label - visible with data', 'craft': 'no label', 'geological': 'no label', 'historic': 'no label', 'land_area': 'no label', 'landuse': 'no label', 'leisure': 'no label', 'man_made': 'no label', 'military': 'no label', 'natural': 'no label', 'office': 'no label', 'place': 'no label', 'shop': 'no label', 'sport': 'no label', 'tourism': 'no label', 'other_tags': 'no label', });
lyr_Zonedtude_2.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'header label - always visible', 'fid': 'no label', 'DN': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Etablissementscritiques_3.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'header label - always visible', });
lyr_Structuressanitaires_4.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'header label - always visible', });
lyr_Infrastucturespubliques_5.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'header label - always visible', });
lyr_Terrainpublic_6.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'header label - always visible', });
lyr_Terrainpublic_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});