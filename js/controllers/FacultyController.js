app.controller('FacultyController', ['$scope', function ($scope){
	$scope.faculty = [
						{
							type:"Non-Fiction Faculty",
							writers:[
								{
									name:"Eileen Miles",
									bio: 'Eileen Myles is a poet, novelist, performer and art journalist. Their twenty books include <em>Afterglow</em> (a dog memoir), a 2017 re-issue of <em>Cool for You</em> and <em>I Must Be Living Twice/new and selected poems</em>, and <em>Chelsea Girls</em>. Myles\'s other books include <em>Snowflake/different streets</em> (2012), <em>Inferno: A Poet\'s Novel</em> (2010), and <em>The Importance of Being Iceland: Travel Essays in Art</em> (2009). They are the recipient of a Guggenheim Fellowship in nonfiction, an Andy Warhol/Creative Capital art writers\' grant, four Lambda Book Awards, the Shelley Prize from the PSA, was named to the Slate/Whiting Second Novel List in 2015, and received a poetry award from the Foundation for Contemporary Arts. In 2016, they received a Creative Capital grant and the Clark Prize for excellence in art writing. They live in Marfa, TX and New York. Read one of her <a href="http://www.eileenmyles.com/pdf/Ebner-all.pdf">art journalism pieces</a> watch her <a href="https://www.google.com/url?q=https://youtu.be/FxW99FTIbz0&sa=D&ust=1505745131486000&usg=AFQjCNGCRtGyT0yYxsvZcI0_lJbe8Nnh3A">give a reading</a> followed <a href="https://www.google.com/url?q=https://youtu.be/xbVF03h7--0&sa=D&ust=1505745131486000&usg=AFQjCNHWOLQnzedonLrSd5RIVLSYIk-qdw">by a conversation</a>.',
									path: './images/faculty/eileen_2018.jpg'
								},

							]
						},
						{
							type:"Poetry Faculty",
							writers:[
								{
									name: "Dorothea Lasky",
									bio: "Dorothea Lasky is the author of five books of poetry, the forthcoming <em>Milk</em> (Wave Books, 2018), as well as <em>ROME</em> (W.W. Norton/Liveright, 2014) and <em>Thunderbird</em>, <em>Black Life</em>, <em>AWE</em>, all out from Wave Books. She is the co-editor of <em>Open the Door: How to Excite Young People About Poetry</em> (McSweeney’s, 2013) and several chapbooks, including <em>Poetry is Not a Project</em> (Ugly Duckling Presse, 2010). Currently, she is an Assistant Professor of Poetry at Columbia University’s School of the Arts, co-directs Columbia Artist/Teachers, and lives in New York City. Visit her Wave Books <a href='https://www.google.com/url?q=https://www.wavepoetry.com/products/dorothea-lasky&sa=D&ust=1505745131499000&usg=AFQjCNHgXWe1zKErIAT4xyq4i7Cuoe1p2w'>author page</a>.",
									path: './images/faculty/dorothea_2018.jpg'
								},
								{
									name: "Dara Wier",
									bio: "Dara Wier’s newest book of poems <em>in the still of the night</em> was released in fall 2017 from Wave Books, which has been her publisher since the book length poem Reverse Rapture.\
									In 2014 THE BELIEVER named Dara Wier's <em>You Good Thing</em> a reader's choice book of the year. Her poems have been awarded the American Poetry Review&rsquo;s Jerome Shestack Prize, a\
									Guggenheim Foundation Fellowship, a National Endowment for the Arts fellowship, a Massachusetts Cultural Council Artists Award,\
									and the San Francisco Poetry Center's Book of the Year Award; are included in the Pushcart Prize and Best American Poetry anthologies;\
									  limited editions include (X IN FIX) and the big broadside <em>The Usual Ratio of Banality To Wonder</em> from RainTaxi&rsquo;s brainstorm series,\
									<em>A Civilian's Diary of the War Years</em> from The Song Cave, and with James Tate, <em>The Lost Epic of Arthur \
									Davidson Ficke, the Author&rsquo;s Annotations, Commentary, and Notes Of Reference For A Millennium&rsquo;s Teardrop</em> \
									from Waiting for Godot Books. Recent poems can be found in Boston Review, Conduit, Volt, Plume, Poor Claudia, Bat City Review,\
									 Divine Magnet, Epiphany, LITERATURA, Hyperallergic, an elsewhere. She's been a poet-in-residence at the University of Montana,\
									  University of Texas, Emory University and the University of Utah; she was the 2005 Louis Rubin chair at Hollins University in Roanoke,\
									   Virginia and is a member of the poetry faculty of the MFA Program for Poets and Writers at the University of Massachusetts Amherst. \
									  She is a publisher and editor of the small independent press factory hollow press, and the literary magazine <em>jubilat.</em> \
									  Along with Noy Holland she co-founded the Juniper Initiative for literary arts and action and the Juniper Summer Writing Institute and Workshops.\
									   Dara Wier was born in New Orleans, Louisiana. A link to her on-going series about reading and writing is here,\
									    <a href='http://insideundivided.tumblr.com'><em>INSIDE UNDIVIDED</em></a><em>.</em>",
									path:'./images/faculty/dara_2017.jpg'
								}
							]
						},
						{
							type:"Fiction Faculty",
							writers:[
								{
									name:'Noy Holland',
									bio: 'Noy Holland&rsquo;s <em>I Was Trying to Describe What It Feels Like, New and Selected Stories</em>, was published by Counterpoint in January 2017. Her debut novel, <em>Bird </em>(Counterpoint), appeared in 2015, to great critical acclaim. Holland&rsquo;s collections of short fiction and novellas include <em>Swim for the Little One First </em>(FC2),<em> What Begins with Bird</em> (FC2), and <em>The Spectacle of the Body</em> (Knopf.) She has published work in <em>The Kenyon Review</em>, <em>Antioch</em>, <em>Conjunctions</em>, <em>The Quarterly</em>,<em> Glimmer Train</em>, <em>Electric Literature</em>, <em>Publisher&rsquo;s Weekly</em>, <em>The Believer</em>, <em>NOON</em>, and <em>New York Tyrant</em>, among others. She was a recipient of a Massachusetts Cultural Council award for artistic merit and a National Endowment for the Arts Fellowship. She has taught for many years in the MFA Program for Poets and Writers at the University of Massachusetts. Visit her <a href="http://www.noyholland.com">website</a>,or read an interview <a href="http://theamericanreader.com/stop-up-your-ears-and-secede-an-interview-with-noy-holland/">interview</a>, and a <a href="http://www.conjunctions.com/webcon/holland12.htm">story</a>.',
									path: './images/faculty/noy_2017.jpg'
								},
								{
									name:'Mitchell S. Jackson',
									bio: "Mitchell S. Jackson&rsquo;s debut novel <em>The Residue Years</em> was praised by publications including The New York Times, The Paris Review, and The Times of London. Jackson is the winner of a Whiting Award. His novel also won The Ernest J. Gaines Prize for Literary Excellence and was a finalist for the Center for Fiction&rsquo;s Flaherty-Dunnan First novel prize, the PEN/ Hemingway award for first fiction, and the Hurston / Wright Legacy Award. Jackson&rsquo;s honors include fellowships from TED, the Lannan Foundation, the BreadLoaf Conference, and the Center for Fiction. His writing has appeared in publications including The New York Times Book Review, Salon, and Tin House. He serves on the faculty at New York University. A well-regarded speaker, Jackson has delivered lectures and keynote addresses at events and institutions including the annual TED Conference, the Yale Law School RebLaw Conference, the Sydney Writers&rsquo; Festival, Brown University, UMASS Amherst, and Columbia University. Jackson is also an advocate for criminal justice reform who has visited prisons and youth facilities in the United States and abroad. Visit his <a href='http://mitchellsjackson.com/'>website</a> or follow him on Twitter <a href='https://twitter.com/MitchSJackson'><strong>@</strong>MitchSJackson</a>.",
									path:"./images/faculty/mitchell_2018.jpg"
								},
								{
									name:"Joy Williams", 
									bio: "Joy Williams is the author of five collections of stories including, most recently, <em>99 Stories of God</em>, and <em>The Visiting Privilege, </em>winner of the PEN/Malamud Award. She has also published four novels, including <em>The Quick and the Dead</em>, which was a finalist for the Pulitzer Prize, and a book of essays, <em>Ill Nature</em>, which was a finalist for the National Book Critics Circle Award. Among her many honors are the Rea Award for the short story and the Strauss Living Award from the American Academy of Arts and Letters. She has taught at the Universities of Houston, Florida, Iowa, and Arizona. Read a <a href='http://theoffingmag.com/fiction/souvenir/'>story</a> or a profile from <a href='http://www.nytimes.com/2015/09/06/magazine/the-misanthropic-genius-of-joy-williams.html?_r=0'><em>The New York Times Magazine</em></a>.",
									path:"./images/faculty/joy_2017.jpg"
								}

							]
						},
						{
							type:"Faculty in Special Topic Workshops",
							writers:[
								{
									name: "Bianca Stone",
									bio: 'Bianca Stone is a poet and visual artist. She is the author of <em>Someone Else&rsquo;s Wedding Vows,</em> (Tin House &amp; Octopus Books 2014); <em>Poetry Comics From the Book of Hours</em>, (Pleiades, 2016), the illustrated edition of <em>Antigonick,</em> <strong>(</strong>New Directions, 2012) a collaboration with Anne Carson, and most recently <em>The Mobius Strip Club of Grief, </em>(Tin House, 2018). Bianca runs The Ruth Stone Foundation &amp; Monk Books along with her husband, the poet Ben Pease, and their daughter Odette, in Vermont. Visit her <a href="http://www.poetrycomics.org/">website </a>or follow her on Twitter <a href="https://twitter.com/biancastone"><strong>@</strong>biancastone</a>.',
									path:"./images/faculty/bianca_2018.jpg"
								},
								]
							},
							{
								type: "Visting Poets &amp; Writers",
								writers: [
								{
									name:"Terrance Hayes",
									bio: 'Terrance Hayes is the author of five poetry collections, including <em>How to Be Drawn</em>, which received an NAACP Image Award for Poetry and was a finalist for both the National Book Award and the National Book Critics Circle Award and Lighthead, which won the National Book Award. His honors include a National Endowment for the Arts Fellowship, a Guggenheim Fellowship, and a 2014 MacArthur Fellowship. He is the current poetry editor at New York Times Magazine and has two forthcoming manuscripts: <em>American Sonnets for My Past And Future Assassin</em> (Penguin, 2018), and <em>To Float In The Space Between: Drawings and Essays in Conversation with Etheridge Knight </em>(Wave, 2018). Visit his <a href="http://terrancehayes.com/">website</a>.',
									path: './images/faculty/terrance_2018.jpg'
								},
								{
									name:"Stephen Graham Jones",
									bio: "Stephen Graham Jones is the author of sixteen novels, six story collections, more than 250 stories, and has some comic books in the works. His current book is the werewolf novel <em>Mongrels</em> (William Morrow). Stephen&apos;s been the recipient of an NEA Fellowship in Fiction, the Texas Institute of Letters Jesse Jones Award for Fiction, the Independent Publishers Awards for Multicultural Fiction, three This is Horror awards, and he&apos;s made Bloody Disgusting&apos;s Top Ten Novels of the Year. Stephen teaches in the MFA programs at University of Colorado at Boulder and University of California Riverside-Palm Desert. He lives in Boulder, Colorado, with his wife, two children, and too many old trucks.  Visit Stephen&apos;s <a href='http://www.demontheory.net'>website</a> to learn more about his work and connect with him on twitter at <a href='https://twitter.com/sgj72'>@SGJ72</a>.",
									path: './images/faculty/stephen_2017.jpg'
								},

								{
									name:"Paul Lisicky",
									bio: 'Paul Lisicky is the author of the memoirs, <em>The Narrow Door</em> and <em>Famous Builder</em>, the novels <em>Lawnboy </em>and <em>The Burning House,</em> and <em>Unbuilt Projects</em>, a collection of short prose. He is the recipient of awards from the Guggenheim Foundation, the National Endowment of the Arts, the James Michener/Copernicus Society, and the Fine Arts Work Center in Provincetown. He has twice been a finalist for the Lambda Literary Award. He teaches in the MFA Program at Rutgers University-Camden. Visit his <a href="http://www.paullisicky.net/">website</a> and read a <a href="http://www.nytimes.com/2016/01/18/books/review-in-the-narrow-door-paul-lisicky-opens-a-window-on-friendship.html">review</a> of <em>The Narrow Door</em> from <em>The New York Times.</em>',
									path:'./images/faculty/paul_2017.jpg'
								},
								{
									name:"Lisa Olstein",
									bio: 'Lisa Olstein is the author of four poetry collections, most recently,<em> Late Empire</em> (Copper Canyon Press, fall 2017). Recipient of a Hayden Carruth Award, Pushcart Prize, Lannan Writing Residency, and Essay Press chapbook prize, her poems have appeared in many journals and anthologies, including <em>The Nation</em>, <em>American Letters &amp; Commentary</em>, and <em>Boston Review</em>. She is a member of the poetry faculty for the University of Texas at Austin&rsquo;s New Writers Project and Michener Center for Writers, and the lyricist for the rock band <em>Cold Satellite</em>, fronted by acclaimed songwriter Jeffrey Foucault. She cofounded and for ten years directed the Juniper Summer Writing Institute at the University of Massachusetts-Amherst. Read some of her <a href="https://pen.org/five-poems-by-lisa-olstein/">poems</a>, and visit <a href="http://www.essaypress.org/ep-72/">Essay Press</a>, and <a href="http://www.thevolta.org/ewc46-lolstein-p1.html">The Volta</a>.',
									path: './images/faculty/lisa_2018.jpg'
								},
								{
									name:"Evie Shockley",
									bio:'Evie Shockley is the author of the new black, for which she won the 2012 Hurston/Wright Legacy Award in Poetry, and semiautomatic (Wesleyan, 2017), among&nbsp;other collections of poetry. She has also published a critical study, Renegade Poetics: Black Aesthetics and Formal Innovation in African American Poetry. Her poetry and&nbsp;essays appear widely in journals and anthologies. Her honors include the 2015 Stephen Henderson Award for Outstanding Achievement in Poetry and the 2012 Holmes National Poetry Prize. Currently serving as creative editor for Feminist Studies, Shockley is Associate Professor of English at Rutgers University&ndash;New Brunswick. Read her poems <a href="https://issuu.com/torchliteraryarts/docs/final___2016_torch_spring_summer_is?workerA%20ddress=ec2-52-%2091-31-%20206.compute-1.amazonaws.com"><em>what\'s not to liken?</em></a>, and <a href="https://www.poets.org/poetsorg/poem/du-bois-ghana"><em>du bois in ghana</em></a>, or an <a href="https://www.gracecavalieri.com/poetLaureates/featuredpoet_evieshockley.html">interview</a>.',
									path:"./images/faculty/evie_2018.jpg"
								},
								{
									name:'Safiya Sinclair',
									bio: 'Safiya Sinclair was born and raised in Montego Bay, Jamaica. She is the author of <em>Cannibal</em> (University of Nebraska Press, 2016), winner of a Whiting Writer\'s Award, the Addison M. Metcalf Award from the American Academy of Arts and Letters, the OCM Bocas Prize for Caribbean Poetry, the 2017 Phillis Wheatley Book Award in Poetry, the Prairie Schooner Book Prize in Poetry, and selected as one of the American Library Association&rsquo;s &ldquo;Notable Books of the Year.&rdquo; <em>Cannibal </em>was a finalist for the PEN Center USA Literary Award, and longlisted for the PEN Open Book Award and the Dylan Thomas Prize. Sinclair\'s other honours include a Pushcart Prize, a Ruth Lilly and Dorothy Sargent Rosenberg Fellowship from the Poetry Foundation, fellowships from Yaddo, the Bread Loaf Writers\' Conference and the Fine Arts Work Center in Provincetown, as well as the Amy Clampitt Residency Award. Her poems have appeared or are forthcoming in <em>Poetry</em>, <em>Kenyon Review, Granta, The Nation, New England Review, Boston Review,</em> <em>Oxford American, </em>the <em>2018 Forward Book of Poetry,</em> and elsewhere. She received her MFA in poetry at the University of Virginia, and is currently a PhD candidate in literature and creative writing at the University of Southern California. Read an <a href="http://therumpus.net/2017/03/interrogating-the-english-language-the-rumpus-interview-with-safiya-sinclair/">interview</a> and read a <a href="https://granta.com/hymen-elegy/">poem</a>.',
									path:"./images/faculty/safiya_2018.jpg"
								},
								{
									name: "Matthew Zapruder",
									bio: 'Matthew Zapruder is the author of four collections of poetry, as well as <em>Why Poetry</em>, a book of prose, from Ecco Press in August 2017. He has received a Guggenheim Fellowship, a William Carlos Williams Award, a May Sarton Award from the Academy of American Arts and Sciences, and a Lannan Foundation Residency Fellowship in Marfa, TX. An Associate Professor in the MFA at Saint Mary&rsquo;s College of California, he is also Editor at Large at Wave Books, and from 2016-7 held the annually rotating position of Editor of the Poetry Column for the New York Times Magazine. He lives in Oakland, CA. Read an <a href="http://www.wbur.org/hereandnow/2017/08/21/why-poetry-matthew-zapruder">excerpt</a>, an <a href="https://www.guernicamag.com/in-defense-of-imagination/">interview</a> and a <a href="https://www.lareviewofbooks.org/article/in-the-key-that-our-souls-were-singing/">review</a>.',
									path:"./images/faculty/matthew_2018.jpg"
								},
								{
									name: "Leni Zumas",
									bio: 'Leni Zumas is the author of three books of fiction: <em>Red Clocks</em>,<em> The Listeners</em>, and <em>Farewell Navigator</em>. She lives in Oregon, where she teaches in the BFA and MFA programs at Portland State University. Visit her <a href="http://leni-zumas.squarespace.com/">website</a> and follow her on Twitter <a href="https://twitter.com/lenizumas"><strong>@</strong>lenizumas</a>.',
									path:"./images/faculty/leni_2018.jpg"
								}
							]
						}
	]
}
]);