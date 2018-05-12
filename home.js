$(document).ready(function(){

	var progress = document.getElementById("progress-chart").getContext('2d');
	var myDoughnutChart = new Chart(progress, {
	    type: 'doughnut',
	    data: {
		    datasets: [{
		        data: [100, 0, 0, 0, 0],
		        backgroundColor: [
		        	'#f39c12', 
		        	'#3498db',
		        	"#9b59b6",
		        	'#2ecc71',
		        	'#e74c3c'
		        ]
		    }],
		    labels: [
		        "Pending",
		        "In Progress",
		        "Partial",
		        "Complete",
		        "Broken"
		    ]
		},
		options: {
			cutoutPercentage: 70,
			legend: {
				position: 'bottom',
				labels: {
					fontColor: '#fff'
				}
			}
		}
	});

	$('#days').text(moment().diff(moment([2018,4,11]), 'days'));

	var active = "1";
	chooseCat(active);

	$('#category .nav-item').click(function(){
		$('#category .nav-item').children('a').removeClass('active');
		$(this).children('a').toggleClass('active');

		active = $(this).data('category');
		chooseCat(active);
	});

	function chooseCat(cat){
		$('#table tbody').children('tr').each(function(){
			if($(this).data('category') != cat){
				$(this).hide();
			}else{
				$(this).show();
			}
		});
	}

});