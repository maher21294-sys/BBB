var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Boundary_1 = new ol.format.GeoJSON();
var features_Boundary_1 = format_Boundary_1.readFeatures(json_Boundary_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Boundary_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Boundary_1.addFeatures(features_Boundary_1);
var lyr_Boundary_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Boundary_1, 
                style: style_Boundary_1,
                popuplayertitle: 'Boundary',
                interactive: true,
                title: '<img src="styles/legend/Boundary_1.png" /> Boundary'
            });
var format_catchments_2 = new ol.format.GeoJSON();
var features_catchments_2 = format_catchments_2.readFeatures(json_catchments_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_catchments_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_catchments_2.addFeatures(features_catchments_2);
var lyr_catchments_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_catchments_2, 
                style: style_catchments_2,
                popuplayertitle: 'catchments',
                interactive: true,
                title: '<img src="styles/legend/catchments_2.png" /> catchments'
            });
var format_CHANNEL_3 = new ol.format.GeoJSON();
var features_CHANNEL_3 = format_CHANNEL_3.readFeatures(json_CHANNEL_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CHANNEL_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CHANNEL_3.addFeatures(features_CHANNEL_3);
var lyr_CHANNEL_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CHANNEL_3, 
                style: style_CHANNEL_3,
                popuplayertitle: 'CHANNEL',
                interactive: true,
                title: '<img src="styles/legend/CHANNEL_3.png" /> CHANNEL'
            });
var format_CULVERT_4 = new ol.format.GeoJSON();
var features_CULVERT_4 = format_CULVERT_4.readFeatures(json_CULVERT_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CULVERT_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CULVERT_4.addFeatures(features_CULVERT_4);
var lyr_CULVERT_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CULVERT_4, 
                style: style_CULVERT_4,
                popuplayertitle: 'CULVERT',
                interactive: true,
                title: '<img src="styles/legend/CULVERT_4.png" /> CULVERT'
            });
var format_outlets_5 = new ol.format.GeoJSON();
var features_outlets_5 = format_outlets_5.readFeatures(json_outlets_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_outlets_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_outlets_5.addFeatures(features_outlets_5);
var lyr_outlets_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_outlets_5, 
                style: style_outlets_5,
                popuplayertitle: 'outlets',
                interactive: true,
                title: '<img src="styles/legend/outlets_5.png" /> outlets'
            });
var format_POINTS_6 = new ol.format.GeoJSON();
var features_POINTS_6 = format_POINTS_6.readFeatures(json_POINTS_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POINTS_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POINTS_6.addFeatures(features_POINTS_6);
var lyr_POINTS_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POINTS_6, 
                style: style_POINTS_6,
                popuplayertitle: 'POINTS',
                interactive: true,
                title: '<img src="styles/legend/POINTS_6.png" /> POINTS'
            });
var format_streams_7 = new ol.format.GeoJSON();
var features_streams_7 = format_streams_7.readFeatures(json_streams_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_streams_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_streams_7.addFeatures(features_streams_7);
var lyr_streams_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_streams_7, 
                style: style_streams_7,
                popuplayertitle: 'streams',
                interactive: true,
                title: '<img src="styles/legend/streams_7.png" /> streams'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Boundary_1.setVisible(true);lyr_catchments_2.setVisible(true);lyr_CHANNEL_3.setVisible(true);lyr_CULVERT_4.setVisible(true);lyr_outlets_5.setVisible(true);lyr_POINTS_6.setVisible(true);lyr_streams_7.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Boundary_1,lyr_catchments_2,lyr_CHANNEL_3,lyr_CULVERT_4,lyr_outlets_5,lyr_POINTS_6,lyr_streams_7];
lyr_Boundary_1.set('fieldAliases', {'LAYER': 'LAYER', 'GM_TYPE': 'GM_TYPE', 'MAP_NAME': 'MAP_NAME', });
lyr_catchments_2.set('fieldAliases', {'LAYER': 'LAYER', 'ELEVATION': 'ELEVATION', 'MAP_NAME': 'MAP_NAME', 'DRAINTYPE': 'DRAINTYPE', 'BASINID': 'BASINID', 'BASINAREA': 'BASINAREA', 'BASINSLOP': 'BASINSLOP', 'MFDIST': 'MFDIST', 'MFDSLOPE': 'MFDSLOPE', 'CENTDIST': 'CENTDIST', 'CENTOUT': 'CENTOUT', 'SLCENTOUT': 'SLCENTOUT', 'PSOUTH': 'PSOUTH', 'PNORTH': 'PNORTH', 'MSTDIST': 'MSTDIST', 'MSTSLOPE': 'MSTSLOPE', 'BASINLEN': 'BASINLEN', 'SHAPEFACT': 'SHAPEFACT', 'SINUOSITY': 'SINUOSITY', 'PERIMETER': 'PERIMETER', 'MEANELEV': 'MEANELEV', 'CENTROIDX': 'CENTROIDX', 'CENTROIDY': 'CENTROIDY', 'BASINNAME': 'BASINNAME', 'LAGTIME': 'LAGTIME', 'TC': 'TC', 'CN': 'CN', 'IA': 'IA', 'DTHETA': 'DTHETA', 'PSIF': 'PSIF', 'XKSAT': 'XKSAT', 'RTIMP': 'RTIMP', 'ADJSLOPE': 'ADJSLOPE', 'CLARKR': 'CLARKR', 'PRECIP': 'PRECIP', 'LA_LATERAL': 'LA_LATERAL', 'LA_LOC': 'LA_LOC', 'LA_RAIND': 'LA_RAIND', 'LA_TC': 'LA_TC', 'LA_IMPRV': 'LA_IMPRV', 'LA_SOIL': 'LA_SOIL', 'LA_HYDROG': 'LA_HYDROG', 'HYDROVOL': 'HYDROVOL', 'HYDROTP': 'HYDROTP', 'HYDROPEAK': 'HYDROPEAK', 'HYDROACFT': 'HYDROACFT', 'HYDROACFPS': 'HYDROACFPS', 'HYDROINCH': 'HYDROINCH', });
lyr_CHANNEL_3.set('fieldAliases', {'LAYER': 'LAYER', 'LENGTH': 'LENGTH', 'BEARING': 'BEARING', 'SINUOSITY': 'SINUOSITY', });
lyr_CULVERT_4.set('fieldAliases', {'LAYER': 'LAYER', 'GM_TYPE': 'GM_TYPE', 'ELEVATION': 'ELEVATION', });
lyr_outlets_5.set('fieldAliases', {'LAYER': 'LAYER', 'ELEVATION': 'ELEVATION', 'MAP_NAME': 'MAP_NAME', 'DRAINTYPE': 'DRAINTYPE', 'TERMGUID': 'TERMGUID', 'COMNAME': 'COMNAME', 'RTENAME': 'RTENAME', 'LA_TYPE': 'LA_TYPE', 'LA_LOC': 'LA_LOC', 'LA_LATERAL': 'LA_LATERAL', 'LA_SLOPE': 'LA_SLOPE', 'LA_LENGTH': 'LA_LENGTH', 'LA_N': 'LA_N', 'LA_SIDEN': 'LA_SIDEN', 'LA_SIDESLP': 'LA_SIDESLP', 'LA_DEPTH': 'LA_DEPTH', 'LA_CHDEF': 'LA_CHDEF', 'LA_CHARW': 'LA_CHARW', 'LA_VEL': 'LA_VEL', 'LA_DETAIL': 'LA_DETAIL', 'LA_HYDROG': 'LA_HYDROG', 'LA_INHYDRO': 'LA_INHYDRO', 'LA_INHAREA': 'LA_INHAREA', 'LA_RELIEF': 'LA_RELIEF', 'LA_TRAP': 'LA_TRAP', 'LA_SIZE': 'LA_SIZE', 'LA_CAPC': 'LA_CAPC', 'LA_RESRT': 'LA_RESRT', 'LA_INITP': 'LA_INITP', 'LA_STREETW': 'LA_STREETW', 'LA_CURBH': 'LA_CURBH', 'CHYDROVOL': 'CHYDROVOL', 'CHYDROTP': 'CHYDROTP', 'CHYDROPEAK': 'CHYDROPEAK', 'CHYDROACFT': 'CHYDROACFT', 'CHYDROACFP': 'CHYDROACFP', 'CHYDROINCH': 'CHYDROINCH', 'RHYDROVOL': 'RHYDROVOL', 'RHYDROTP': 'RHYDROTP', 'RHYDROPEAK': 'RHYDROPEAK', 'RHYDROACFT': 'RHYDROACFT', 'RHYDROACFP': 'RHYDROACFP', 'RHYDROINCH': 'RHYDROINCH', 'V_CLARKTC': 'V_CLARKTC', 'V_SGRAPHTL': 'V_SGRAPHTL', 'V_CHROUTE': 'V_CHROUTE', 'ATTENUATE': 'ATTENUATE', 'ATTEN_MILE': 'ATTEN_MILE', 'CHANNEL_LN': 'CHANNEL_LN', });
lyr_POINTS_6.set('fieldAliases', {'NAME': 'NAME', 'LAYER': 'LAYER', 'MAP_NAME': 'MAP_NAME', 'E': 'E', 'ELEVATION': 'ELEVATION', });
lyr_streams_7.set('fieldAliases', {'LAYER': 'LAYER', 'MAP_NAME': 'MAP_NAME', 'DRAINTYPE': 'DRAINTYPE', 'LENGTH': 'LENGTH', 'SLOPE': 'SLOPE', 'BASINID': 'BASINID', });
lyr_Boundary_1.set('fieldImages', {'LAYER': '', 'GM_TYPE': '', 'MAP_NAME': '', });
lyr_catchments_2.set('fieldImages', {'LAYER': '', 'ELEVATION': '', 'MAP_NAME': '', 'DRAINTYPE': '', 'BASINID': '', 'BASINAREA': '', 'BASINSLOP': '', 'MFDIST': '', 'MFDSLOPE': '', 'CENTDIST': '', 'CENTOUT': '', 'SLCENTOUT': '', 'PSOUTH': '', 'PNORTH': '', 'MSTDIST': '', 'MSTSLOPE': '', 'BASINLEN': '', 'SHAPEFACT': '', 'SINUOSITY': '', 'PERIMETER': '', 'MEANELEV': '', 'CENTROIDX': '', 'CENTROIDY': '', 'BASINNAME': '', 'LAGTIME': '', 'TC': '', 'CN': '', 'IA': '', 'DTHETA': '', 'PSIF': '', 'XKSAT': '', 'RTIMP': '', 'ADJSLOPE': '', 'CLARKR': '', 'PRECIP': '', 'LA_LATERAL': '', 'LA_LOC': '', 'LA_RAIND': '', 'LA_TC': '', 'LA_IMPRV': '', 'LA_SOIL': '', 'LA_HYDROG': '', 'HYDROVOL': '', 'HYDROTP': '', 'HYDROPEAK': '', 'HYDROACFT': '', 'HYDROACFPS': '', 'HYDROINCH': '', });
lyr_CHANNEL_3.set('fieldImages', {'LAYER': '', 'LENGTH': '', 'BEARING': '', 'SINUOSITY': '', });
lyr_CULVERT_4.set('fieldImages', {'LAYER': '', 'GM_TYPE': '', 'ELEVATION': '', });
lyr_outlets_5.set('fieldImages', {'LAYER': '', 'ELEVATION': '', 'MAP_NAME': '', 'DRAINTYPE': '', 'TERMGUID': '', 'COMNAME': '', 'RTENAME': '', 'LA_TYPE': '', 'LA_LOC': '', 'LA_LATERAL': '', 'LA_SLOPE': '', 'LA_LENGTH': '', 'LA_N': '', 'LA_SIDEN': '', 'LA_SIDESLP': '', 'LA_DEPTH': '', 'LA_CHDEF': '', 'LA_CHARW': '', 'LA_VEL': '', 'LA_DETAIL': '', 'LA_HYDROG': '', 'LA_INHYDRO': '', 'LA_INHAREA': '', 'LA_RELIEF': '', 'LA_TRAP': '', 'LA_SIZE': '', 'LA_CAPC': '', 'LA_RESRT': '', 'LA_INITP': '', 'LA_STREETW': '', 'LA_CURBH': '', 'CHYDROVOL': '', 'CHYDROTP': '', 'CHYDROPEAK': '', 'CHYDROACFT': '', 'CHYDROACFP': '', 'CHYDROINCH': '', 'RHYDROVOL': '', 'RHYDROTP': '', 'RHYDROPEAK': '', 'RHYDROACFT': '', 'RHYDROACFP': '', 'RHYDROINCH': '', 'V_CLARKTC': '', 'V_SGRAPHTL': '', 'V_CHROUTE': '', 'ATTENUATE': '', 'ATTEN_MILE': '', 'CHANNEL_LN': '', });
lyr_POINTS_6.set('fieldImages', {'NAME': '', 'LAYER': '', 'MAP_NAME': '', 'E': '', 'ELEVATION': '', });
lyr_streams_7.set('fieldImages', {'LAYER': 'TextEdit', 'MAP_NAME': 'TextEdit', 'DRAINTYPE': 'TextEdit', 'LENGTH': 'TextEdit', 'SLOPE': 'TextEdit', 'BASINID': 'TextEdit', });
lyr_Boundary_1.set('fieldLabels', {'LAYER': 'inline label - visible with data', 'GM_TYPE': 'inline label - visible with data', 'MAP_NAME': 'inline label - visible with data', });
lyr_catchments_2.set('fieldLabels', {'LAYER': 'inline label - visible with data', 'ELEVATION': 'inline label - visible with data', 'MAP_NAME': 'inline label - visible with data', 'DRAINTYPE': 'inline label - visible with data', 'BASINID': 'inline label - visible with data', 'BASINAREA': 'inline label - visible with data', 'BASINSLOP': 'inline label - visible with data', 'MFDIST': 'inline label - visible with data', 'MFDSLOPE': 'inline label - visible with data', 'CENTDIST': 'inline label - visible with data', 'CENTOUT': 'inline label - visible with data', 'SLCENTOUT': 'inline label - visible with data', 'PSOUTH': 'inline label - visible with data', 'PNORTH': 'inline label - visible with data', 'MSTDIST': 'inline label - visible with data', 'MSTSLOPE': 'inline label - visible with data', 'BASINLEN': 'inline label - visible with data', 'SHAPEFACT': 'inline label - visible with data', 'SINUOSITY': 'inline label - visible with data', 'PERIMETER': 'inline label - visible with data', 'MEANELEV': 'inline label - visible with data', 'CENTROIDX': 'inline label - visible with data', 'CENTROIDY': 'inline label - visible with data', 'BASINNAME': 'inline label - visible with data', 'LAGTIME': 'inline label - visible with data', 'TC': 'inline label - visible with data', 'CN': 'inline label - visible with data', 'IA': 'inline label - visible with data', 'DTHETA': 'inline label - visible with data', 'PSIF': 'inline label - visible with data', 'XKSAT': 'inline label - visible with data', 'RTIMP': 'inline label - visible with data', 'ADJSLOPE': 'inline label - visible with data', 'CLARKR': 'inline label - visible with data', 'PRECIP': 'inline label - visible with data', 'LA_LATERAL': 'inline label - visible with data', 'LA_LOC': 'inline label - visible with data', 'LA_RAIND': 'inline label - visible with data', 'LA_TC': 'inline label - visible with data', 'LA_IMPRV': 'inline label - visible with data', 'LA_SOIL': 'inline label - visible with data', 'LA_HYDROG': 'inline label - visible with data', 'HYDROVOL': 'inline label - visible with data', 'HYDROTP': 'inline label - visible with data', 'HYDROPEAK': 'inline label - visible with data', 'HYDROACFT': 'inline label - visible with data', 'HYDROACFPS': 'inline label - visible with data', 'HYDROINCH': 'inline label - visible with data', });
lyr_CHANNEL_3.set('fieldLabels', {'LAYER': 'inline label - visible with data', 'LENGTH': 'inline label - visible with data', 'BEARING': 'inline label - visible with data', 'SINUOSITY': 'inline label - visible with data', });
lyr_CULVERT_4.set('fieldLabels', {'LAYER': 'inline label - visible with data', 'GM_TYPE': 'inline label - visible with data', 'ELEVATION': 'inline label - visible with data', });
lyr_outlets_5.set('fieldLabels', {'LAYER': 'inline label - visible with data', 'ELEVATION': 'inline label - visible with data', 'MAP_NAME': 'inline label - visible with data', 'DRAINTYPE': 'inline label - visible with data', 'TERMGUID': 'inline label - visible with data', 'COMNAME': 'inline label - visible with data', 'RTENAME': 'inline label - visible with data', 'LA_TYPE': 'inline label - visible with data', 'LA_LOC': 'inline label - visible with data', 'LA_LATERAL': 'inline label - visible with data', 'LA_SLOPE': 'inline label - visible with data', 'LA_LENGTH': 'inline label - visible with data', 'LA_N': 'inline label - visible with data', 'LA_SIDEN': 'inline label - visible with data', 'LA_SIDESLP': 'inline label - visible with data', 'LA_DEPTH': 'inline label - visible with data', 'LA_CHDEF': 'inline label - visible with data', 'LA_CHARW': 'inline label - visible with data', 'LA_VEL': 'inline label - visible with data', 'LA_DETAIL': 'inline label - visible with data', 'LA_HYDROG': 'inline label - visible with data', 'LA_INHYDRO': 'inline label - visible with data', 'LA_INHAREA': 'inline label - visible with data', 'LA_RELIEF': 'inline label - visible with data', 'LA_TRAP': 'inline label - visible with data', 'LA_SIZE': 'inline label - visible with data', 'LA_CAPC': 'inline label - visible with data', 'LA_RESRT': 'inline label - visible with data', 'LA_INITP': 'inline label - visible with data', 'LA_STREETW': 'inline label - visible with data', 'LA_CURBH': 'inline label - visible with data', 'CHYDROVOL': 'inline label - visible with data', 'CHYDROTP': 'inline label - visible with data', 'CHYDROPEAK': 'inline label - visible with data', 'CHYDROACFT': 'inline label - visible with data', 'CHYDROACFP': 'inline label - visible with data', 'CHYDROINCH': 'inline label - visible with data', 'RHYDROVOL': 'inline label - visible with data', 'RHYDROTP': 'inline label - visible with data', 'RHYDROPEAK': 'inline label - visible with data', 'RHYDROACFT': 'inline label - visible with data', 'RHYDROACFP': 'inline label - visible with data', 'RHYDROINCH': 'inline label - visible with data', 'V_CLARKTC': 'inline label - visible with data', 'V_SGRAPHTL': 'inline label - visible with data', 'V_CHROUTE': 'inline label - visible with data', 'ATTENUATE': 'inline label - visible with data', 'ATTEN_MILE': 'inline label - visible with data', 'CHANNEL_LN': 'inline label - visible with data', });
lyr_POINTS_6.set('fieldLabels', {'NAME': 'inline label - visible with data', 'LAYER': 'inline label - visible with data', 'MAP_NAME': 'inline label - visible with data', 'E': 'inline label - visible with data', 'ELEVATION': 'inline label - visible with data', });
lyr_streams_7.set('fieldLabels', {'LAYER': 'inline label - visible with data', 'MAP_NAME': 'inline label - visible with data', 'DRAINTYPE': 'inline label - visible with data', 'LENGTH': 'inline label - visible with data', 'SLOPE': 'inline label - visible with data', 'BASINID': 'inline label - visible with data', });
lyr_streams_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});