app.controller('CraftController', ['$scope', function($scope){
	$scope.crafts = [
				{
					writer:"Noy Holland",
					title:"What's the Point of a Point of View?",
					description:"Ideas of audience and point of view can  \
					often feel mechanical and limiting. How can we enlarge \
					our sense of the possibilities of point of view? Are  \
					there implicit and explicit variations?  Might there be \
					a listener as well as an audience, different from a reader, \
					 and perhaps more intimately known? What nuanced forms might \
					 a listener inhabit? To whom are we speaking, and why?"
				},
				{
					writer:"Mitchell S. Jackson",
					title: "Repetition as Philosophy, Voice, Structure",
					description: "&ldquo;Rose is a rose is a rose is a rose,&rdquo; famously wrote Gertrude Stein. Stein is just one of the many writers who employed repetition to myriad memorable effects in her writing. But is repetition simply repeating a word or a phrase or a sentence or a structural element? In our session, we will examine repetition as both a philosophical and craft approach. Our examination will include types of repetition including listing, recursion, and consecution. We will discuss the essential role that repetition plays in creating an eloquent voice, as well as how it can inform the structure and organization of what we write. We will read excerpts of writers whose work evidences some of the many ways repetition can be employed to achieve eloquence. We will also engage in writing exercises meant to assist you in exploring the key concepts and generating new material."
				},
				{
					writer: "Stephen Graham Jones",
					title: "What If Your Dialogue Wasn't Terrible?",
					description: "We all know how to speak and carry on conversation, \
					but once we introduce tag lines and and contracts with the reader \
					and all the pitfalls and pratfalls involved with staging a \
					conversation on the page, writing compelling, efficient dialogue \
					can get tricky. In here we'll run through how to do it less wrong. \
					There may not be a single right way, but there are a lot of problems \
					we can identify, and some workarounds to make your dialogue in fiction \
					less terrible. We won't be doing any writing exercises. We might have \
					some dialogue."
				},
				{
					writer:"Dorothea Lasky",
					title: "Things Seen in Flowers: Poetry and the Occult Spring",
					description: "Roses, daisies, pansies, violets, sunflowers, \
					lilies, buttercups, poppies, and peonies. Flowers are things \
					that many poets use in their poems and we associate them with \
					 love, life, health, and growth or the direct opposite of these \
					  ideas. But flowers in poems can mean other unexpected things, \
					   too. In this craft class, we will explore the multitude of  \
					   weirdness and wonder in poems that contain flowers.  \
					   We will read poems by William Blake, Bhanu Kapil, \
					    Toi Derricotte, Kenneth Koch, H.D., Pablo Neruda, \
					     Cornelius Eady, and Marilyn Chin, among others, \
					      which use flowers in strange and new ways. \
					       We will write our own poems too, inspired by these poets \
					       and sparked by some living and non-living flowers. And \
					       in doing all of this work, we will explore the great \
					       green mystery of life, which haunts us poets, which haunts \
					       all of us."
				},
				{
					writer:"Rickey Laurentiis",
					title: "(Re)seeing (Re)vision",
					description: "Revision&mdash;Look again at the word, find inside sits another. \
					Vision&mdash;a word we use not only to refer to literal, optical sight or the sense \
					of seeing. In varying contexts, it&rsquo;s a word referring to spiritual and/or \
					divine &ldquo;visitations&rdquo; of knowledge (think: oracle&rsquo;s vision), a \
					future-oriented blueprint, schema, protocol or set of goals (think: architect&rsquo;s \
					vision) or, most broadly, the facility of the imagination and maybe, too, reason \
					themselves (think: the vision of the mind). Therefore, it seems &ldquo;(re)vision&rdquo; \
					constitutes a re-doing of any of all of this. It is a re-seeing, re-visiting, re-setting of \
					goals, for example, or the blueprint: a second tango with the imagination. This craft talk/ \
					lecture will explores (re)vision by all these meanings, looking at poetry and other (artistic) \
					media as our guides. Possible artists we'll discuss include Walt Whitman to Solmaz Sharif, and \
					Jean-Michel Basquiat to Thelonious Monk. We'll ask ourselves what is (re)vision versus editing? \
					And where do our revisionary strategies best manifest themselves&mdash;whether in the body of our \
					creative work or, in fact, in our lives."
				},
				{
					writer: "Paul Lisicky",
					title:"Queering Time (Or: Simultaneity)",
					description: "Even the most dogged linear writer must sometimes \
					have a desire to explode chronology, to escape the clock, and \
					complicate the ways to tell a story. We'll look to other artistic \
					forms&mdash;music, poetry, and graphic novels, for instance--as a way \
					into thinking about simultaneity and finding structures that feel \
					authentic to how our minds move in 2018. Virginia Woolf, Alison \
					Bechdel, E.M. Forster, and a host of others will be making guest \
					appearances along the way. We'll also save time for discussion, an \
					opportunity for you to bring up relevant examples to the group."
				},
				{
					writer:"Lisa Olstein",
					title:"The Beauty of Questions",
					description:"What are the questions we most often have of work we encounter&mdash;as \
					readers, what do we find ourselves wanting or needing to know? What are the questions \
					we most often have about our own work in progress&mdash;as writers, what do we find ourselves \
					relying on readers or workshop-mates to answer? What kinds of questions do poems/stories/essays \
					effectively pose to their readers? What are the underlying questions that urge us into writing in \
					the first place? In this craft session, we&rsquo;ll engage questions as tools of \
					discovery&mdash;portals, divining rods, treasure maps, magnifying lenses, bird&rsquo;s \
					eyes&mdash;with which to more adventurously understand and broaden the range of possibilities \
					for our work and its revision. Through consideration of published and participant work alongside \
					reflection on our experiences and processes as writers, we&rsquo;ll become a collaborative \
					think tank working toward some distinctly individual&mdash;and practical&mdash;goals: \
					insight into our motivations, predilections, and commitments (and how they&rsquo;re \
					serving us); and the development of a set of key-like questions that can serve to \
					unlock doors within our own revision or self-workshop practice going forward. Open to all genres."
				},
				{
					writer:"Camille Rankine",
					title:"Making Silence Sing",
					description:"<em>I think I am probably in love with silence, that other world. And that I write, in some way, to negotiate seriously with it. </em>&ndash; Jorie Graham, &ldquo;Some Notes on Silence&rdquo;<br><br> \
					How does the space of the page speak in a poem? Can empty spaces in a poem or narrative communicate as much as their words? How does a poem&rsquo;s play with sound and silence create music, emotion, and help it tell its story? In this session, we&rsquo;ll examine the various ways that writers play with the field of the page and negotiate with silence in line break, white space, fragments, the erased and the unspoken. Through reading, discussion and exercises, we&rsquo;ll investigate how silence and space can operate as an active enriching presence, opening up a world of tension and electricity."
				},
				{
					writer:"Margaret Wilkerson Sexton",
					title:"Love Language",
					description: "Much of our greatest fiction is at heart a love \
					story. In this session we will explore traditional and \
					nontraditional love stories to learn how to create \
					relationships between characters that reflect the complexity of \
					real life bonds. We will also examine the ways an author can use \
					the love narrative as a tool within a larger work to orient the \
					reader, pace the project, or highlight the elements of a character \
					only her loved one would see. Finally we will identify the love \
					stories in your own work, determine how they're contributing and \
					mine them for even more gifts."
				},
				{
					writer:"Evie Shockley",
					title:"I Must Confess",
					description:"This craft session will consider the appeal, uses, drawbacks, and effectiveness of the confessional stance in poetry. What does the first-person voice afford us? When and why are we called (or called upon) to make poetry from autobiography? What is the relationship of the lyric-<em>I</em> to fact in a moment when &ldquo;fake news&rdquo; is fake news, and when poetry is testimony? What is the relationship of <em>fact</em> to <em>truth</em>, and of <em>speaker</em> to <em>addressee</em> or <em>audience</em>? When is a voice a spectacle? Must the persona confess? Let&rsquo;s spend some time listening to the voices in poems, to discover what they&rsquo;re telling us about themselves&mdash;and about poetry in our time."
				},
				{
					writer:"Safiya Sinclair",
					title:"Herself Behind Herself Concealed: Forging The Eerotic Power Of The Feminine",
					description:"&ldquo;The erotic is a resource within each of us that lies in a deeply female and spiritual plane,&rdquo; writes Audre Lorde in Uses of the Erotic: The Erotic as Power. There, Lorde expresses the realm of the feminine as an incredible source of knowledge, a site of erotic power that women are often discouraged from using in their lives or expressing on the page. But what happens when women tap into this source of erotic power as a mode of divining the creative? What happens when a woman unpeels her selves, then lays her body, and all its unbridled erotic power, bare? What spell is summoned, if she dares us to look, and not look away? Something startling disrupts the observer. By approaching womanhood as a text that can be deciphered through mapping the link between brain and body, we will examine different approaches to forging womanhood as a source of erotic power. We will read Audre Lorde, Natalie Diaz, Erika L. Sánchez, Sylvia Plath, and Sharon Olds, observe paintings from Frida Kahlo and Wangechi Mutu, and explore clips from Beyoncé&rsquo;s Lemonade. By tracing the uncanny locus of womb, wound, and woman, we will explore the different uses of erotic power in the work of fearless women, to denude the canon, to create a coven."
				},
				{
					writer:"Bianca Stone",
					title: "Keeping up With Your Wild Genius",
					description: "Feel uninspired? Let's fix that! In this craft class we will crush the myth of writer's\
					block and learn a few tricks to counteract it. Using exercises loosely based around\
					the Ekphrastic form (writing in response to art), as well as lists of personal\
					obsessions, we will write and read our raw poems (or prose!) out-loud, and engage\
					in a fun, rich discussion of process. We will examine, candidly, the realities and\
					myths of writer's block. We will leave motivated, with inspiring tools to generate\
					new incredible work."
				},
				{
					writer:"Dara Wier",
					title:" What's so hard about that",
					description: "For poets in particular though \
					writers of prose face and deal with all this as \
					well.&nbsp;Why is it so popular to say 'this came out of the blue,'\
					 'I didn't know what I was doing,'&nbsp;'I don't know where this came from,' \
					 'how do I know what I think until I see what I say,'&nbsp;'where is all this coming from----.' \
					 Are there ways to invoke the muses, whatever a muse may be. What can a writer do to \
					 create good circumstances for writing----how can one at least make choices that seem \
					 to bring good results. How do we know what matters? How do we recognize what will \
					 serve and/or provide for our work? In addition we'll spend 10-15 minutes making up \
					 assignments to give to one another, assignments based on chance and change. We will not be fearful of \
					 anything being required or forbidden."
				},
				{
					writer:"Matthew Zapruder",
					title:"The Irresistible Beauty of All Things",
					description:"Lorca, in a lecture with that title, wrote, &ldquo;The mechanics of the poetic imagination are always the same: a concentration, a leap, a flight, a return with the treasure, and a classification and selection of what has been brought back.&rdquo; In this short talk followed by conversation, we will discuss specific and useful methods of leaping and flying; expansions of our definitions of what constitutes poetic treasure; and what happens when we return with it. I will also give you some generative writing exercises to take away and do on your own. Time permitting, we will try some of them out together."
				},
				{
					writer:"Leni Zumas",
					title:"A Crooked Road",
					description:"<em>&ldquo;A crooked road, a road in which the foot feels acutely the stones beneath it, a road that turns back on itself&mdash;this is the road of art.&rdquo;</em> &mdash;Viktor Shklovsky, Russian writer &amp; critic <br><br> \
					How might the techniques of defamiliarization, or what Shklovsky called &ldquo;making strange,&rdquo; spark fresh and thrilling possibilities in your work? What can crookedness find that the straight road misses? We&rsquo;ll spend this session talking, writing, and together unspooling a remark by Flannery O&rsquo;Connor about Franz Kafka&rsquo;s <em>The Metamorphosis</em>: &ldquo;The truth is not distorted here, but rather distortion is used to get at the truth.&rdquo; Bring a project (poem, memoir, story, genre-defying pageness) you&rsquo;re already immersed in or itching to begin."
				}
		]
}]);