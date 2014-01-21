Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, stack2, hashTypes, options, self=this, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  
  data.buffer.push("Map");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("Notes");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("Photos");
  }

function program7(depth0,data) {
  
  
  data.buffer.push("Setup");
  }

  data.buffer.push("\r\n\r\n<div class=\"main\">\r\n	 <nav id=\"navigation-main\" class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\">\r\n	  ");
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': ("btn btn-default navbar-btn")
  },inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to']),stack1 ? stack1.call(depth0, "map", options) : helperMissing.call(depth0, "link-to", "map", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\r\n	  ");
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': ("btn btn-default navbar-btn")
  },inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to']),stack1 ? stack1.call(depth0, "notes", options) : helperMissing.call(depth0, "link-to", "notes", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\r\n	  ");
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': ("btn btn-default navbar-btn")
  },inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to']),stack1 ? stack1.call(depth0, "photos", options) : helperMissing.call(depth0, "link-to", "photos", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\r\n	  ");
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': ("btn btn-default navbar-btn")
  },inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["STRING"],hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to']),stack1 ? stack1.call(depth0, "setup", options) : helperMissing.call(depth0, "link-to", "setup", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\r\n	</nav>\r\n\r\n    ");
  hashTypes = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashTypes:hashTypes,data:data})));
  data.buffer.push("\r\n</div>");
  return buffer;
  
});

Ember.TEMPLATES["map"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  var buffer = '', stack1, stack2, hashTypes, options, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  data.buffer.push("Map");
  }

function program3(depth0,data) {
  
  
  data.buffer.push("Notes");
  }

function program5(depth0,data) {
  
  
  data.buffer.push("Photos");
  }

function program7(depth0,data) {
  
  
  data.buffer.push("Setup");
  }

  data.buffer.push(" <nav id=\"navigation-main\" class=\"navbar navbar-default navbar-fixed-top\" role=\"navigation\">\r\n  ");
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': ("btn btn-default navbar-btn")
  },inverse:self.noop,fn:self.program(1, program1, data),contexts:[depth0],types:["STRING"],hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to']),stack1 ? stack1.call(depth0, "map", options) : helperMissing.call(depth0, "link-to", "map", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\r\n  ");
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': ("btn btn-default navbar-btn")
  },inverse:self.noop,fn:self.program(3, program3, data),contexts:[depth0],types:["STRING"],hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to']),stack1 ? stack1.call(depth0, "notes", options) : helperMissing.call(depth0, "link-to", "notes", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\r\n  ");
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': ("btn btn-default navbar-btn")
  },inverse:self.noop,fn:self.program(5, program5, data),contexts:[depth0],types:["STRING"],hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to']),stack1 ? stack1.call(depth0, "photos", options) : helperMissing.call(depth0, "link-to", "photos", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\r\n  ");
  hashTypes = {'class': "STRING"};
  options = {hash:{
    'class': ("btn btn-default navbar-btn")
  },inverse:self.noop,fn:self.program(7, program7, data),contexts:[depth0],types:["STRING"],hashTypes:hashTypes,data:data};
  stack2 = ((stack1 = helpers['link-to']),stack1 ? stack1.call(depth0, "setup", options) : helperMissing.call(depth0, "link-to", "setup", options));
  if(stack2 || stack2 === 0) { data.buffer.push(stack2); }
  data.buffer.push("\r\n</nav>");
  return buffer;
  
});

Ember.TEMPLATES["notes"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  


  data.buffer.push("Notes");
  
});

Ember.TEMPLATES["photos"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  


  data.buffer.push("Photos");
  
});

Ember.TEMPLATES["setup"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Ember.Handlebars.helpers; data = data || {};
  


  data.buffer.push("Setup");
  
});