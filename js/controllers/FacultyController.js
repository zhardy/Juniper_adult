app.controller('FacultyController', ['$scope', function ($scope){
	$scope.faculty = [
						{
							type:"Poetry",
							writers:[
								{
									name: "Heather Christle",
									bio: 'Heather Christle is the author of four poetry collections, including <em>The Trees The Trees</em>, which won the Believer Poetry Award; <em>What Is Amazing</em>, a Massachusetts Book Award "Must-Read"; and, most recently, <em>Heliopause</em>. A contributing editor for <em>jubilat</em>, she also co-edits the PEN Poetry Series. She has taught writing at Antioch College, Sarah Lawrence College, Emory University, and the University of Massachusetts Amherst, where she received her MFA. A native of Wolfeboro, New Hampshire, she currently lives in Yellow Springs, Ohio, where she is writing a book about crying. You can read an interview with her <a href="http://www.believermag.com/issues/201209/?read=interview_christle">here</a>, or learn more on her <a href="http://heatherchristle.tumblr.com/">Tumblr</a>.</p>',
									path: './images/faculty/heather_2015.jpg'
								},
								{
									
								}
							]
						}


	]
}
]);