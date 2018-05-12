<?php

$manifesto = array_map('str_getcsv', file('manifesto.csv'));

foreach ($manifesto as $value) {
	
	$category 	= $value[0];
	$promise 	= $value[1];
	$status 	= $value[2];

	echo '<tr class="table-warning" data-category="'.$category.'"><td>'.$promise.'</td><td>'.getStatus($status).'</td></tr>';

}

function getStatus($status){
	return 'Pending';
}