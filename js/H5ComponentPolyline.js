/*折线图表组件对像*/

var H5ComponentPolyline = function ( name,cfg ) { 
	var component = new H5ComponentBase(name,cfg);
	//component.text('text');

	//绘制网格线 
	var w = cfg.width;
	var h = cfg.height;

	//加入一个画布 - 背景层
	var cns = document.createElement('canvas');//
	var ctx = cns.getContext('2d');
	cns.width = ctx.width = w;
	cns.height = ctx.height = h;
	component.append(cns);

	//水平网格经 100份-》10份
	var step  = 10;
	ctx.beginPath ();
	ctx.lineWidth =1 ;//画笔宽放
	ctx.strokeStyle ="#AAAAAA";

	window.ctx = ctx;

	for (var i = 0; i < step+1 ; i++){
		var y  = (h/step) * i;
		ctx.moveTo(0,y);
		ctx.lineTo(w,y);
	}

	//垂直网格线，根据项目个数分
	 step  = cfg.data.length+1;
	for(var i = 0;i < step+1 ;i++){
		var x = (w/step)*i;
		ctx.moveTo(x,0);
		ctx.lineTo(x,h);
	}
	ctx.stroke();


	//加入画布- 数据层
	var cns = document.createElement('canvas');//分层
	var ctx = cns.getContext('2d');
	cns.width = ctx.width = w;
	cns.height = ctx.height = h;
	component.append(cns);

	//绘制折线数据
	ctx.beginPath();
	ctx.lineWidth =3;
	ctx.strokeStyle = "#ff8878";

	var x =0;
	var y =0;
	ctx.moveTo(10,10);
	ctx.arc(10,10,5,0,2*Math.PI);//第三个是半径，第4、5个是起始结束角度
	///step = cfg.data.length+1;
	//for(i in cfg.data){ 
	//	var item=cfg.data[i];
	//	console.log(item);
	//}

	for ( i in cfg.data){
		var item = cfg.data[i];
		//x = (w/cfg.data.length)*i
		//ctx.moveTo(x,y);
	}
	ctx.stroke();







	return component;

}