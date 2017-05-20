/*散点图表组件对像*/

var H5ComponentPoint = function ( name,cfg ) { 
	var component = new H5ComponentBase(name,cfg);
	//component.text('text H5ComponentPoint');//测试用

	//扩展

	var base = cfg.data[0][1]; //以第一个数据的比例为大小的100%
	$.each( cfg.data, function(idx,item){  

	//jquery的一个方法，会把对象和数据组里面的项都循环出来
	//idx第几项或是项的名称,item是成员
	//输出每一个point
		var point =$('<div class="point point_'+idx+'">');
		//point.text(item[0]);//输出第0项
	//	point.text(item[0]+'-'+item[1]);
		var name = $('<div class="name">'+item[0]+'</div>');
		var rate = $('<div class="name">'+(item[1]*100)+'%</div>');
		//point.append(name).append(rate);
		name.append(rate);
		point.append(name);


		var per = (item[1]/base)*100 +'%';


		point.width(per).height(per);

		if(item[2]){
			point.css('background-color',item[2]);
		}
		if(item[3] !== undefined &&item[4]){
			point.css('left',item[3]).css('top',item[4]);

		}
		component.append( point );
	});



	return component;

}