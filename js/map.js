var map=new BMap.Map("myMap");
var point=new BMap.Point(120.141382,30.257791);
map.centerAndZoom(point,10);//设置中心点，放大级数
map.addControl(new BMap.NavigationControl());//添加平移缩放控件
map.addControl(new BMap.ScaleControl());//添加比例尺控件
map.addControl(new BMap.OverviewMapControl());//添加缩略图控件
map.addControl(new BMap.MapTypeControl);//添加地图类型控件
map.setCurrentCity("杭州");
map.enableScrollWheelZoom();


// var myIcon=new BMap.Icon("marker.png",new BMap.Size(20,34));
// var marker=new BMap.Marker(point,{icon:MyIcon});
// var marker=new BMap.Marker(point);
// map.addOverlay(marker);//标注地图上的点
// marker.addEventListener("click",function(){alert("您点击了标注")});//监听标注事件
// marker.enableDragging();//开启拖拽标注
// marker.addEventListener("dragend",function(e){
// 	alert("当前位置："+e.point.lng+","+e.point.lat);
// });//监听标注的当前位置经纬度
// map.addEventListener("zoomend",function(){
// 	alert("地图缩放至："+this.getZoom()+"级");
// });
// map.removeOverlay(marker);//移除标注


// var polyline=new BMap.Polyline([
// 	new BMap.Point(120.141652,30.257791),
// 	new BMap.Point(120.137429,30.254469)],
// 	{
// 		strokeColor:"blue",
// 		StrokeWeight:6,
// 		strokeOpacity:0.5
// 	});
// map.addOverlay(polyline);//折线

// function showInfo(e){
// 	alert("当前位置："+e.point.lng+","+e.point.lat);
// 	//map.removeEventListener("click",showInfo);//移除监听事件
// }
// map.addEventListener("click",showInfo);

var local=new BMap.LocalSearch(map,{
	renderOptions:{map:map,panel:"r-result"}
});
local.searchNearby("宾馆","西湖");//本地服务搜索

var transit=new BMap.TransitRoute(map,{
	renderOptions:{
		map:map,
		panel:"l-result",
		autoViewport:true
	}
});
var hznu=new BMap.Point(120.020382,30.294224);
local.setMarkersSetCallback(function(pois){
	for(var i=0;i<pois.length;i++){
		pois[i].marker.addEventListener("click",function(e){
			transit.search(hznu,this.z.title);
			// console.log(this);
		})
	}
})


//transit.search("杭州市海曙路58号",hotel);//公交导航

// var driving=new BMap.DrivingRoute(map,{
// 	renderOptions:{ 		
// 		map:map,
// 		panel:"l-result",
// 		autoViewport:true
// 	}

// });
// driving.search("海曙路58号","浙江宾馆");//驾车导航
// var myGeo=new BMap.Geocoder();
// myGeo.getPoint("杭州市海曙路58号",function(point){
// 	if(point){
// 		map.centerAndZoom(point,16);
// 		map.addOverlay(new BMap.Marker(point));
// 	}
// },"杭州市");						//地址解析
//  myGeo.getLocation(hotel,function(result){
// 	var addComp=result.addressComponents;
// 		rs=addComp.street+addComp.streetNumber;
// 		transit.search(hznu,rs);  //逆地址解析
// });



var adds=[
	[120.014753,30.296764,"地址：杭州师范大学博文苑8号楼","/img/p9/1.jpg"],
	[120.016024,30.296051,"地址：杭州师范大学博文苑6号楼","/img/p9/2.jpg"],
	[120.016011,30.294999,"地址：杭州师范大学博文苑3号楼","/img/p9/3.jpg"],
	[120.020193,30.295903,"地址：杭州师范大学恕园2号楼","/img/p9/4.jpg"],
	[120.01893,30.296593,"地址：杭州师范大学恕园13号楼","/img/p9/5.jpg"],
	[120.020363,30.297571,"地址：杭州师范大学16号楼","/img/p9/6.jpg"],
	[120.018032,30.295353,"地址：杭州师范大学恕园8号楼餐厅","/img/p9/7.jpg"],
	[120.01408,30.295291,"地址：杭州师范大学仓前校区体育场","/img/p9/8.jpg"]
];
var opts={
	width:250,
	height:200,
	title:"",
	enableMessage:true
}
for(var i=0;i<adds.length;i++){
	var marker=new BMap.Marker(new BMap.Point(adds[i][0],adds[i][1]));
	var sContent =
	adds[i][2] + "<img style='float:right;margin:4px' src="+adds[i][3]+" width='250' height='150'/>";
	map.addOverlay(marker);
	addClickHandler(sContent,marker);
}

function addClickHandler(content,marker){
	marker.addEventListener("click",function(e){
		openInfo(content,e);
	})
}
function openInfo(content,e){
	var p=e.target;
	var point=new BMap.Point(p.getPosition().lng,p.getPosition().lat);
	var infowindow=new BMap.InfoWindow(content,opts);
	map.openInfoWindow(infowindow,point);
}
