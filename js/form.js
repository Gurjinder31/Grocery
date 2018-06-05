$(document).ready(function() {
        if (!window.localStorage) {
            alert('Your browser does not support HTML5 localStorage. Try upgrading.');
        } else {
            $("#return_form").submit(function(){
									setAllItems();
            });						
				}
});

var setAllItems = function(){
								
								var newDate, itemId, formSave;
								
								newDate = new Date();
                itemId = newDate.getTime();
								formSave = {
        					fname											: $("input[name='firstname']").val(),
        					lname 											: $("input[name='lastname']").val(),
        					email 											: $("input[name='email']").val(),
							phone											: $("input[name='phone']").val(),
							priceDeals										: $("input[name='price_deals']").attr('checked'),
								};
						
								// turn data into JSON string
								localStorage.setItem( itemId, JSON.stringify(formSave));
	};