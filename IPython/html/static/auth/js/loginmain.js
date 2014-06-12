// Copyright (c) IPython Development Team.
// Distributed under the terms of the Modified BSD License.

var ipython = ipython || {};
require(['base/js/page'], function(Page) {
    ipython.page = new Page();
    $('button#login_submit').addClass("btn btn-default");
    ipython.page.show();
    $('input#password_input').focus();
});
