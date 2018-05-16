<?php

$manifesto = array_map('str_getcsv', file('manifesto.csv'));

foreach ($manifesto as $value) {
	
	$category 	= $value[0];
	$promise 	= $value[1];
	$status 	= $value[2];

	echo '<tr class="'.getColor($status).'" data-category="'.$category.'"><td>'.$promise.'</td><td>'.getStatus($status).'</td></tr>';

}

function getColor($status){
	switch($status){
		case 1:
			return 'table-warning';
		case 2:
			return 'table-primary';
		case 3:
			return 'table-success';
		case 4:
			return 'table-info';
		case 5:
			return 'table-warning';
	}
}

function getStatus($status){
	switch($status){
		case 1:
			return 'Pending';
		case 2:
			return 'In Progress';
		case 3:
			return 'Complete';
		case 4:
			return 'Partial';
		case 5:
			return 'Broken';
	}
}