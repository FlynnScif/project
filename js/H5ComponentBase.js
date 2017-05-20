/*基本图文组件对像*/

var H5ComponentBase = function ( name, cfg ) { //不懂为什么要删掉funcgionname
	var cfg = cfg || {}; //参数，如无则空集

	var id = ('h5_c_'+Math.random()).replace('.','_');
	//把当前的组建类型添加到样式中进行标记
	var cls = ' h5_component_'+cfg.type;
	var component = $('<div class="h5_component '+cls+' h5_component_name_'+name+'" id="'+id+'">') ;//输出元素



	cfg.text && component.text(cfg.text);//将cfg的text传进去
	cfg.width && component.width(cfg.width/2);
	cfg.height && component.height(cfg.height/2);

	cfg.css && component.css(cfg.css);
	cfg.bg && component.css('backgroundImage','url('+cfg.bg+')');

	if( cfg.center === true ){
		component.css({
			marginLeft : (cfg.width/4 * -1) + 'px',
			left:'50%'
		})
	}

//...很多自定义的参数
	//component入场动画 
			component.on('onLoad',function(){ 
			//$('.component')换成component因为不能是所有，是当前的组件对像
				component.addClass(cls+'_load').removeClass(cls+'_leave');
				cfg.animateIn && component.animate(cfg.animateIn);//一开始错写成animatein了

				return false;//执行完不向上传播
			})
			//component 出场动画
			component.on('onLeave',function(){//component 出场动画
				component.addClass(cls+'_leave').removeClass(cls+'_leave');
				cfg.animateOut && component.animate(cfg.animateOut);
				return false;
			})


	return component;

}