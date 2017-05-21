/*柱状图表组件对像*/

var H5ComponentBar = function ( name,cfg ) { 
	var component = new H5ComponentBase(name,cfg);
	$.each(cfg.data,function (idx,item) {

		console.log(item);

		var line = $('<div class="line">');
		var name = $('<div class="name">');
		var rate = $('<div class="rate">');
		var per = $('<div class="per">');

		var width=item[1]*100+'%';

		var bgStyle = '';
		if(item[2]){
			bgStyle='style="background-color:'+item[2]+'"';
		}


		rate.html('<div class="bg" '+bgStyle+'></div>');//填充生长动画用的

		rate.css('width',width);//计算宽度

		name.text(item[0]);

		per.text(width);
		
		line.append(name).append(rate).append(per);//将name附加到line里


		component.append(line);

		// body...
	})

	return component;

}