$("#dateSelector").datepicker();

var heatmapInstance = h337.create({
    container: document.getElementById('heatMapHolder')
});


var jsonData = [{"north":34767.1852215975,"east":38821.91895093261,"cases":1},{"north":34491.09349082145,"east":40462.377350426716,"cases":9},{"north":34504.85241657749,"east":40291.84707941976,"cases":23},{"north":36520.631412344024,"east":30099.494486920885,"cases":3},{"north":36774.02609790376,"east":30255.57514899833,"cases":2},{"north":36665.10958474752,"east":30226.640940221998,"cases":1},{"north":36729.7835257272,"east":30060.096606897598,"cases":1},{"north":36739.52626084365,"east":30198.48424463356,"cases":1},{"north":36917.99405541158,"east":30187.24262806397,"cases":1},{"north":36871.44153757532,"east":30126.256731997488,"cases":5},{"north":36840.259707919104,"east":30163.093579511136,"cases":4},{"north":36868.45506001941,"east":30000.834257354927,"cases":1},{"north":36930.03452271436,"east":30041.331794123933,"cases":1},{"north":36958.13122903889,"east":29990.928893389428,"cases":1},{"north":36790.16793877977,"east":29988.036617612615,"cases":1},{"north":36761.307668920745,"east":29957.543681146824,"cases":4},{"north":36718.07277894114,"east":29942.853861182528,"cases":1},{"north":36774.97391072317,"east":29841.157697185703,"cases":5},{"north":37167.261659949094,"east":30007.787591868553,"cases":1},{"north":32652.63574881129,"east":33496.94602994463,"cases":1},{"north":32721.334863839646,"east":33442.46795769747,"cases":1},{"north":32723.792100760144,"east":33567.64750265921,"cases":1},{"north":32715.754889369062,"east":33646.33007443856,"cases":2},{"north":32878.52278023018,"east":33726.31123761976,"cases":3},{"north":32641.452168465286,"east":33821.91471372672,"cases":1},{"north":32690.44004793727,"east":33972.93497163942,"cases":1},{"north":32858.174718703325,"east":33614.46472086386,"cases":2},{"north":32619.22678007752,"east":33829.9169707826,"cases":2},{"north":40206.266604579585,"east":29599.651535534238,"cases":5},{"north":40555.67977128912,"east":28810.366649647884,"cases":1},{"north":40442.21857394331,"east":28717.130474850423,"cases":1},{"north":40512.33448332461,"east":28836.73074296842,"cases":1},{"north":40471.045935698625,"east":28876.504959599726,"cases":2},{"north":41456.43533346737,"east":30659.495914410334,"cases":3},{"north":40064.44092750966,"east":42165.79056387922,"cases":3},{"north":39891.58810600345,"east":42134.27195345991,"cases":5},{"north":39891.58810600345,"east":42134.27195345991,"cases":2},{"north":32358.92129976652,"east":36751.88232330714,"cases":1},{"north":32793.19990125739,"east":36605.59949545018,"cases":2},{"north":32681.60911729446,"east":36652.901454061976,"cases":2},{"north":32563.81530291837,"east":36707.192695462276,"cases":3},{"north":32548.72067927536,"east":36307.35920468865,"cases":1},{"north":41404.60343580068,"east":17853.48368542921,"cases":1},{"north":41404.60343580068,"east":17853.48368542921,"cases":5},{"north":41404.60343580068,"east":17853.48368542921,"cases":1},{"north":41404.60343580068,"east":17853.48368542921,"cases":1},{"north":35492.66500271857,"east":30580.873503802264,"cases":4},{"north":35492.66500271857,"east":30580.873503802264,"cases":1},{"north":35492.66500271857,"east":30580.873503802264,"cases":1},{"north":35771.878772506534,"east":30695.988487541363,"cases":1},{"north":33572.055882250956,"east":35005.154973846926,"cases":4},{"north":33406.438848314916,"east":35087.70316771699,"cases":2},{"north":40340.71390532857,"east":20213.026650965767,"cases":2},{"north":40340.71390532857,"east":20213.026650965767,"cases":2},{"north":40340.71390532857,"east":20213.026650965767,"cases":1},{"north":33637.78846447603,"east":38680.02365677318,"cases":1},{"north":33637.78846447603,"east":38680.02365677318,"cases":1},{"north":34102.15256951985,"east":39341.66990459948,"cases":1},{"north":34102.15256951985,"east":39341.66990459948,"cases":1},{"north":46772.712140738266,"east":27185.4584436929,"cases":3},{"north":46022.7150156118,"east":27267.528677120572,"cases":1},{"north":36927.76037294973,"east":32912.03767853532,"cases":1},{"north":36670.24566247338,"east":33087.25563598612,"cases":3},{"north":32394.065558371985,"east":19865.493856130175,"cases":2},{"north":32292.152881448812,"east":19720.879675494616,"cases":1},{"north":32221.703657454567,"east":19786.071729935797,"cases":1},{"north":32436.713979305256,"east":34893.63694348441,"cases":3},{"north":32473.432121687947,"east":38046.62377529034,"cases":3},{"north":41729.80136228757,"east":33086.113004540966,"cases":3},{"north":39615.4183070949,"east":41977.9827313853,"cases":1},{"north":39507.377835058636,"east":41814.88474071256,"cases":1},{"north":39684.45828531598,"east":41917.672181036556,"cases":1},{"north":39764.01796516722,"east":30486.327154212206,"cases":2},{"north":34395.50004121132,"east":38866.015541678644,"cases":1},{"north":34517.47311158969,"east":37928.86056495421,"cases":1},{"north":36520.631412344024,"east":30099.494486920885,"cases":1},{"north":36520.631412344024,"east":30099.494486920885,"cases":1},{"north":40013.08926775323,"east":19554.862168130127,"cases":2},{"north":36341.08014144987,"east":15323.353725070518,"cases":2},{"north":39316.4633619832,"east":41690.252023125504,"cases":1},{"north":39264.50938762977,"east":41577.67567562597,"cases":1},{"north":39603.93843729508,"east":21130.405592251853,"cases":1},{"north":39603.93843729508,"east":21130.405592251853,"cases":1},{"north":36049.3242774571,"east":29534.483096711214,"cases":2},{"north":45959.2635279863,"east":23387.689201724625,"cases":2}]
var convertedData = [], tempData = {};

var divideByFifty = function(data) {
    for (var i = 0; i < data.length; i++) {
        tempData['x'] = data[i]['east'] / 50;
        tempData['y'] = 1040 - ((data[i]['north'] / 50));
        // tempData['y'] = data[i]['north'] / 50;
        tempData['value'] = data[i]['cases'];
        convertedData.push(tempData);
        console.log(tempData);
        tempData = {}
    }
    return convertedData;
};

// var convertDataToLatLng = function(data) {
//     var y_lower = 17000, y_higher = 52000, x_lower = 0, x_higher = 58000, x_diff = x_higher - x_lower, y_diff = y_higher - y_lower, lat_lower = 1.1700043443089982, 
//     lat_higher = 1.4865267420862995, lng_lower = 103.58173868050201, lng_higher = 104.10290194894894, lat_diff = lat_higher - lat_lower, lng_diff = lng_higher - lng_lower;
//     var convertedData = [], tempData = {};

//     for (var i = 0; i<data.length; i++) {
//         tempData['north'] = (data[i]['north'] * lat_diff/y_diff) + lat_lower;
//         tempData['east'] = (data[i]['east'] * lng_diff/x_diff) + lng_lower;
//         tempData['cases'] = data[i]['cases'];
//         convertedData.push(tempData);
//         tempData = {};
//     }
//     return convertedData;
// };

var data = {
    max: 23,
    data: divideByFifty(jsonData)
};

heatmapInstance.setData(data);

function downloadCanvas(link, filename) {
    link.href = heatmapInstance.getDataURL();
    link.download = filename;
}

document.getElementById('downloadHeatMap').addEventListener('click', function() {
    downloadCanvas(this, 'test.png');
}, false);
