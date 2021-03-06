/*内容管理对像*/

var H5 = function ( ) { //不懂为什么要删掉funcgionname
	this.id = ('h5_'+Math.random()).replace('.','_');
	this.el = $('<div class="h5" id="'+this.id+'">').hide();
	this.page  = [];
	$('body').append( this.el );

	/*新增一个页
	*@param{string}name 组建的名称，会加入到ClassName中
	*@param{string} text 页面的默认文本
	*@return{H5}H5对像，可以重复使用H5对像支持的方法
	*/

	this.addPage = function( name , text){
		var page = $('<div class="h5_page section " >');

		if ( name  != undefined) {
			page.addClass('h5_page_'+name);
		}
		if ( text != undefined) {
			page.text(text);
		}
		this.el.append(page);//
		this.page.push( page );//
		return this;

	}
	/*新增一个组件*/
	this.addComponent = function(name, cfg){
		var cfg = cfg || {};

		cfg = $.extend({
			type : 'base'
		},cfg);

		var component;
		var page = this.page.slice(-1)[0];

		switch( cfg.type){
			case 'base' :
                component = new H5ComponentBase(name,cfg);
                break;
            case 'point' :
            	component = new H5ComponentPoint(name,cfg);
                break;
            case 'bar' :
            	component = new H5ComponentBar(name,cfg);
                break;
			default:
		}
		page.append(component);


		return this;

	}
	/*H5对像初始化呈现*/
	this.loader = function(){
		this.el.fullpage({

			onLeave:function(index,nextIndex,direction){
				$(this).find('.h5_component').trigger('onLeave');
			},
			afterLoad:function(anchorLink,index){
				$(this).find('.h5_component').trigger('onLoad');
			}

		});
		this.page[0].find('.h5_component').trigger('onLoad');
		this.el.show();
	}
	return this;

}