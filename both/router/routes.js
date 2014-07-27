/*****************************************************************************/
/* Client and Server Routes */
/*****************************************************************************/
Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound',
  templateNameConverter: 'upperCamelCase',
  routeControllerNameConverter: 'upperCamelCase'
});

Router.map(function () {
  /*
    Example:
      this.route('home', {path: '/'});
  */
  this.route('login', {path: '/'});
  this.route('about', {path: '/about'});
  this.route('contact', {path: '/contact'});

  this.route('register', {path: '/register'});
  this.route('circles.index', {path: '/circle/:_id'});
  this.route('create.circle', {path: '/circles/create'});
  this.route('circles.map', {path: '/map'});
  this.route('post.details', {path: '/post/:id'});
  this.route('profile', {path: '/profile'});
  this.route('kmltest',{path: '/kmltest',
                        where: 'server',
                        action: function(){
                          // this.response.end("THIS IS A SERVER ROUTE..");
                          // console.log(this.params.longitude);
                          // console.log(this.params.latitude);
                          this.response.end('<?xml version="1.0" encoding="utf-8" standalone="yes"?> <feed xmlns="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:geo="http://www.w3.org/2003/01/geo/wgs84_pos#" xmlns:georss="http://www.georss.org/georss" xmlns:woe="http://where.yahooapis.com/v1/schema.rng" xmlns:flickr="urn:flickr:user" xmlns:media="http://search.yahoo.com/mrss/"> <title>The faulkner_usa Pool, with geodata</title> <link rel="self" href="http://api.flickr.com/services/feeds/geo/?g=322338@N20&amp;lang=en-us&amp;format=feed-georss" /> <link rel="alternate" type="text/html" href="http://www.flickr.com/photos/"/> <id>tag:flickr.com,2005:/photos/public/group/322338@N20/geo/</id> <icon>http://l.yimg.com/g/images/buddyicon02_r.png#322338@N20</icon> <subtitle>Pictures of my dog in a variety of locations</subtitle> <updated>2006-08-29T15:41:19Z</updated> <generator uri="http://www.flickr.com/">Flickr</generator> <entry> <title>Hoover Dam, AZ</title> <link rel="alternate" type="text/html" href="http://www.flickr.com/photos/shreck/228310097/"/> <id>tag:flickr.com,2005:/photo/228310097</id> <published>2006-08-29T15:41:19Z</published> <updated>2006-08-29T15:41:19Z</updated> <flickr:date_taken>2005-08-29T14:38:52-08:00</flickr:date_taken> <dc:date.Taken>2005-08-29T14:38:52-08:00</dc:date.Taken> <content type="html"> &lt;p&gt;&lt;a href=&quot;http://www.flickr.com/people/shreck/&quot;&gt;manshreck&lt;/a&gt; posted a photo:&lt;/p&gt; &lt;p&gt;&lt;a href=&quot;http://www.flickr.com/photos/shreck/228310097/&quot; title=&quot;Hoover Dam, AZ&quot;&gt;&lt;img src=&quot;http://farm1.staticflickr.com/98/228310097_8202e98ba4_m.jpg&quot; width=&quot;240&quot; height=&quot;179&quot; alt=&quot;Hoover Dam, AZ&quot; /&gt;&lt;/a&gt;&lt;/p&gt; &lt;p&gt;Faulkner at Hoover Dam&lt;/p&gt;</content> <author> <name>manshreck</name> <uri>http://www.flickr.com/people/shreck/</uri> <flickr:nsid>51296622@N00</flickr:nsid> <flickr:buddyicon>http://farm1.staticflickr.com/29/buddyicons/51296622@N00.jpg?1130103303#51296622@N00</flickr:buddyicon> </author> <link rel="enclosure" type="image/jpeg" href="http://farm1.staticflickr.com/98/228310097_8202e98ba4_z.jpg" /> <category term="" scheme="http://www.flickr.com/photos/tags/" /> <displaycategories> </displaycategories> <georss:point>36.015851 -114.734086</georss:point> <geo:lat>36.015851</geo:lat> <geo:long>-114.734086</geo:long> <woe:woeid>12589233</woe:woeid> </entry> <entry> <title>Manhattan, NY</title> <link rel="alternate" type="text/html" href="http://www.flickr.com/photos/shreck/228310988/"/> <id>tag:flickr.com,2005:/photo/228310988</id> <published>2006-08-29T15:42:35Z</published> <updated>2006-08-29T15:42:35Z</updated> <flickr:date_taken>2005-10-02T17:35:35-08:00</flickr:date_taken> <dc:date.Taken>2005-10-02T17:35:35-08:00</dc:date.Taken> <content type="html"> &lt;p&gt;&lt;a href=&quot;http://www.flickr.com/people/shreck/&quot;&gt;manshreck&lt;/a&gt; posted a photo:&lt;/p&gt; &lt;p&gt;&lt;a href=&quot;http://www.flickr.com/photos/shreck/228310988/&quot; title=&quot;Manhattan, NY&quot;&gt;&lt;img src=&quot;http://farm1.staticflickr.com/74/228310988_33a56d0108_m.jpg&quot; width=&quot;240&quot; height=&quot;179&quot; alt=&quot;Manhattan, NY&quot; /&gt;&lt;/a&gt;&lt;/p&gt; &lt;p&gt;Faulkner rests after the journey ends, Midtown Manhattan&lt;/p&gt;</content> <author> <name>manshreck</name> <uri>http://www.flickr.com/people/shreck/</uri> <flickr:nsid>51296622@N00</flickr:nsid> <flickr:buddyicon>http://farm1.staticflickr.com/29/buddyicons/51296622@N00.jpg?1130103303#51296622@N00</flickr:buddyicon> </author> <link rel="enclosure" type="image/jpeg" href="http://farm1.staticflickr.com/74/228310988_33a56d0108_z.jpg" /> <category term="" scheme="http://www.flickr.com/photos/tags/" /> <displaycategories> </displaycategories> <georss:point>40.746029 -73.979165</georss:point> <geo:lat>40.746029</geo:lat> <geo:long>-73.979165</geo:long> <woe:woeid>23511899</woe:woeid> </entry> <entry> <title>Los Angeles, CA</title> <link rel="alternate" type="text/html" href="http://www.flickr.com/photos/shreck/228310017/"/> <id>tag:flickr.com,2005:/photo/228310017</id> <published>2006-08-29T15:41:12Z</published> <updated>2006-08-29T15:41:12Z</updated> <flickr:date_taken>2005-08-26T12:01:46-08:00</flickr:date_taken> <dc:date.Taken>2005-08-26T12:01:46-08:00</dc:date.Taken> <content type="html"> &lt;p&gt;&lt;a href=&quot;http://www.flickr.com/people/shreck/&quot;&gt;manshreck&lt;/a&gt; posted a photo:&lt;/p&gt; &lt;p&gt;&lt;a href=&quot;http://www.flickr.com/photos/shreck/228310017/&quot; title=&quot;Los Angeles, CA&quot;&gt;&lt;img src=&quot;http://farm1.staticflickr.com/95/228310017_59aa7fb709_m.jpg&quot; width=&quot;240&quot; height=&quot;179&quot; alt=&quot;Los Angeles, CA&quot; /&gt;&lt;/a&gt;&lt;/p&gt; &lt;p&gt;Faulkner at Echo Lake, Los Angeles. I slept in the car that morning.&lt;/p&gt;</content> <author> <name>manshreck</name> <uri>http://www.flickr.com/people/shreck/</uri> <flickr:nsid>51296622@N00</flickr:nsid> <flickr:buddyicon>http://farm1.staticflickr.com/29/buddyicons/51296622@N00.jpg?1130103303#51296622@N00</flickr:buddyicon> </author> <link rel="enclosure" type="image/jpeg" href="http://farm1.staticflickr.com/95/228310017_59aa7fb709_z.jpg" /> <category term="" scheme="http://www.flickr.com/photos/tags/" /> <displaycategories> </displaycategories> <georss:point>34.074381 -118.259367</georss:point> <geo:lat>34.074381</geo:lat> <geo:long>-118.259367</geo:long> <woe:woeid>2442047</woe:woeid> </entry> <entry> <title>Yosemite National Park, CA</title> <link rel="alternate" type="text/html" href="http://www.flickr.com/photos/shreck/102826599/"/> <id>tag:flickr.com,2005:/photo/102826599</id> <published>2006-02-22T01:32:47Z</published> <updated>2006-02-22T01:32:47Z</updated> <flickr:date_taken>2005-08-23T18:54:55-08:00</flickr:date_taken> <dc:date.Taken>2005-08-23T18:54:55-08:00</dc:date.Taken> <content type="html"> &lt;p&gt;&lt;a href=&quot;http://www.flickr.com/people/shreck/&quot;&gt;manshreck&lt;/a&gt; posted a photo:&lt;/p&gt; &lt;p&gt;&lt;a href=&quot;http://www.flickr.com/photos/shreck/102826599/&quot; title=&quot;Yosemite National Park, CA&quot;&gt;&lt;img src=&quot;http://farm1.staticflickr.com/36/102826599_48c478a390_m.jpg&quot; width=&quot;240&quot; height=&quot;180&quot; alt=&quot;Yosemite National Park, CA&quot; /&gt;&lt;/a&gt;&lt;/p&gt; &lt;p&gt;John Muir Point, Yosemite National Park&lt;/p&gt;</content> <author> <name>manshreck</name> <uri>http://www.flickr.com/people/shreck/</uri> <flickr:nsid>51296622@N00</flickr:nsid> <flickr:buddyicon>http://farm1.staticflickr.com/29/buddyicons/51296622@N00.jpg?1130103303#51296622@N00</flickr:buddyicon> </author> <link rel="enclosure" type="image/jpeg" href="http://farm1.staticflickr.com/36/102826599_48c478a390_b.jpg" /> <category term="" scheme="http://www.flickr.com/photos/tags/" /> <displaycategories> </displaycategories> <georss:point>37.810597 -119.508504</georss:point> <geo:lat>37.810597</geo:lat> <geo:long>-119.508504</geo:long> <woe:woeid>12587691</woe:woeid> </entry> <entry> <title>Ptarmigan Lake, AK</title> <link rel="alternate" type="text/html" href="http://www.flickr.com/photos/shreck/102817499/"/> <id>tag:flickr.com,2005:/photo/102817499</id> <published>2006-02-22T01:08:21Z</published> <updated>2006-02-22T01:08:21Z</updated> <flickr:date_taken>2005-06-29T21:52:39-08:00</flickr:date_taken> <dc:date.Taken>2005-06-29T21:52:39-08:00</dc:date.Taken> <content type="html"> &lt;p&gt;&lt;a href=&quot;http://www.flickr.com/people/shreck/&quot;&gt;manshreck&lt;/a&gt; posted a photo:&lt;/p&gt; &lt;p&gt;&lt;a href=&quot;http://www.flickr.com/photos/shreck/102817499/&quot; title=&quot;Ptarmigan Lake, AK&quot;&gt;&lt;img src=&quot;http://farm1.staticflickr.com/19/102817499_e2132802e0_m.jpg&quot; width=&quot;240&quot; height=&quot;180&quot; alt=&quot;Ptarmigan Lake, AK&quot; /&gt;&lt;/a&gt;&lt;/p&gt; &lt;p&gt;Faulkner enjoys a swim&lt;/p&gt;</content> <author> <name>manshreck</name> <uri>http://www.flickr.com/people/shreck/</uri> <flickr:nsid>51296622@N00</flickr:nsid> <flickr:buddyicon>http://farm1.staticflickr.com/29/buddyicons/51296622@N00.jpg?1130103303#51296622@N00</flickr:buddyicon> </author> <link rel="enclosure" type="image/jpeg" href="http://farm1.staticflickr.com/19/102817499_e2132802e0_b.jpg" /> <category term="" scheme="http://www.flickr.com/photos/tags/" /> <displaycategories> </displaycategories> <georss:point>60.396049 -149.26712</georss:point> <geo:lat>60.396049</geo:lat> <geo:long>-149.26712</geo:long> <woe:woeid>23417030</woe:woeid> </entry> <entry> <title>Fairbanks, AK</title> <link rel="alternate" type="text/html" href="http://www.flickr.com/photos/shreck/76405588/"/> <id>tag:flickr.com,2005:/photo/76405588</id> <published>2005-12-23T00:24:08Z</published> <updated>2005-12-23T00:24:08Z</updated> <flickr:date_taken>2005-07-21T01:05:56-08:00</flickr:date_taken> <dc:date.Taken>2005-07-21T01:05:56-08:00</dc:date.Taken> <content type="html"> &lt;p&gt;&lt;a href=&quot;http://www.flickr.com/people/shreck/&quot;&gt;manshreck&lt;/a&gt; posted a photo:&lt;/p&gt; &lt;p&gt;&lt;a href=&quot;http://www.flickr.com/photos/shreck/76405588/&quot; title=&quot;Fairbanks, AK&quot;&gt;&lt;img src=&quot;http://farm1.staticflickr.com/36/76405588_4a9f2b17ee_m.jpg&quot; width=&quot;160&quot; height=&quot;240&quot; alt=&quot;Fairbanks, AK&quot; /&gt;&lt;/a&gt;&lt;/p&gt; &lt;p&gt;Faulkner under sedation&lt;/p&gt;</content> <author> <name>manshreck</name> <uri>http://www.flickr.com/people/shreck/</uri> <flickr:nsid>51296622@N00</flickr:nsid> <flickr:buddyicon>http://farm1.staticflickr.com/29/buddyicons/51296622@N00.jpg?1130103303#51296622@N00</flickr:buddyicon> </author> <link rel="enclosure" type="image/jpeg" href="http://farm1.staticflickr.com/36/76405588_4a9f2b17ee_b.jpg" /> <category term="alaska" scheme="http://www.flickr.com/photos/tags/" /> <displaycategories> </displaycategories> <georss:point>64.859404 -147.787055</georss:point> <geo:lat>64.859404</geo:lat> <geo:long>-147.787055</geo:long> <woe:woeid>2507302</woe:woeid> </entry> <entry> <title>Banff, AB</title> <link rel="alternate" type="text/html" href="http://www.flickr.com/photos/shreck/76405904/"/> <id>tag:flickr.com,2005:/photo/76405904</id> <published>2005-12-23T00:25:28Z</published> <updated>2005-12-23T00:25:28Z</updated> <flickr:date_taken>2005-08-01T23:00:37-08:00</flickr:date_taken> <dc:date.Taken>2005-08-01T23:00:37-08:00</dc:date.Taken> <content type="html"> &lt;p&gt;&lt;a href=&quot;http://www.flickr.com/people/shreck/&quot;&gt;manshreck&lt;/a&gt; posted a photo:&lt;/p&gt; &lt;p&gt;&lt;a href=&quot;http://www.flickr.com/photos/shreck/76405904/&quot; title=&quot;Banff, AB&quot;&gt;&lt;img src=&quot;http://farm1.staticflickr.com/43/76405904_47fe06e727_m.jpg&quot; width=&quot;240&quot; height=&quot;160&quot; alt=&quot;Banff, AB&quot; /&gt;&lt;/a&gt;&lt;/p&gt; &lt;p&gt;Looking towards Banff&lt;/p&gt;</content> <author> <name>manshreck</name> <uri>http://www.flickr.com/people/shreck/</uri> <flickr:nsid>51296622@N00</flickr:nsid> <flickr:buddyicon>http://farm1.staticflickr.com/29/buddyicons/51296622@N00.jpg?1130103303#51296622@N00</flickr:buddyicon> </author> <link rel="enclosure" type="image/jpeg" href="http://farm1.staticflickr.com/43/76405904_47fe06e727_b.jpg" /> <category term="" scheme="http://www.flickr.com/photos/tags/" /> <displaycategories> </displaycategories> <georss:point>52.85918 -119.203033</georss:point> <geo:lat>52.85918</geo:lat> <geo:long>-119.203033</geo:long> <woe:woeid>2344916</woe:woeid> </entry> <entry> <title>Denali Highway, AK</title> <link rel="alternate" type="text/html" href="http://www.flickr.com/photos/shreck/76405583/"/> <id>tag:flickr.com,2005:/photo/76405583</id> <published>2005-12-23T00:24:07Z</published> <updated>2005-12-23T00:24:07Z</updated> <flickr:date_taken>2005-07-01T19:20:31-08:00</flickr:date_taken> <dc:date.Taken>2005-07-01T19:20:31-08:00</dc:date.Taken> <content type="html"> &lt;p&gt;&lt;a href=&quot;http://www.flickr.com/people/shreck/&quot;&gt;manshreck&lt;/a&gt; posted a photo:&lt;/p&gt; &lt;p&gt;&lt;a href=&quot;http://www.flickr.com/photos/shreck/76405583/&quot; title=&quot;Denali Highway, AK&quot;&gt;&lt;img src=&quot;http://farm1.staticflickr.com/37/76405583_cf87f9cc23_m.jpg&quot; width=&quot;240&quot; height=&quot;160&quot; alt=&quot;Denali Highway, AK&quot; /&gt;&lt;/a&gt;&lt;/p&gt; &lt;p&gt;Faulkner in the mountains along the Denali Highway&lt;/p&gt;</content> <author> <name>manshreck</name> <uri>http://www.flickr.com/people/shreck/</uri> <flickr:nsid>51296622@N00</flickr:nsid> <flickr:buddyicon>http://farm1.staticflickr.com/29/buddyicons/51296622@N00.jpg?1130103303#51296622@N00</flickr:buddyicon> </author> <link rel="enclosure" type="image/jpeg" href="http://farm1.staticflickr.com/37/76405583_cf87f9cc23_b.jpg" /> <category term="alaska" scheme="http://www.flickr.com/photos/tags/" /> <displaycategories> </displaycategories> <georss:point>61.763703 -149.445304</georss:point> <geo:lat>61.763703</geo:lat> <geo:long>-149.445304</geo:long> <woe:woeid>12587568</woe:woeid> </entry> <entry> <title>Glacier National Park, MT</title> <link rel="alternate" type="text/html" href="http://www.flickr.com/photos/shreck/76405907/"/> <id>tag:flickr.com,2005:/photo/76405907</id> <published>2005-12-23T00:25:28Z</published> <updated>2005-12-23T00:25:28Z</updated> <flickr:date_taken>2005-08-04T22:56:52-08:00</flickr:date_taken> <dc:date.Taken>2005-08-04T22:56:52-08:00</dc:date.Taken> <content type="html"> &lt;p&gt;&lt;a href=&quot;http://www.flickr.com/people/shreck/&quot;&gt;manshreck&lt;/a&gt; posted a photo:&lt;/p&gt; &lt;p&gt;&lt;a href=&quot;http://www.flickr.com/photos/shreck/76405907/&quot; title=&quot;Glacier National Park, MT&quot;&gt;&lt;img src=&quot;http://farm1.staticflickr.com/40/76405907_431f6ba72b_m.jpg&quot; width=&quot;240&quot; height=&quot;180&quot; alt=&quot;Glacier National Park, MT&quot; /&gt;&lt;/a&gt;&lt;/p&gt; &lt;p&gt;Faulkner spots a deer&lt;/p&gt;</content> <author> <name>manshreck</name> <uri>http://www.flickr.com/people/shreck/</uri> <flickr:nsid>51296622@N00</flickr:nsid> <flickr:buddyicon>http://farm1.staticflickr.com/29/buddyicons/51296622@N00.jpg?1130103303#51296622@N00</flickr:buddyicon> </author> <link rel="enclosure" type="image/jpeg" href="http://farm1.staticflickr.com/40/76405907_431f6ba72b_z.jpg" /> <category term="" scheme="http://www.flickr.com/photos/tags/" /> <displaycategories> </displaycategories> <georss:point>48.67736 -113.638458</georss:point> <geo:lat>48.67736</geo:lat> <geo:long>-113.638458</geo:long> <woe:woeid>12589098</woe:woeid> </entry> <entry> <title>Rochester, NY</title> <link rel="alternate" type="text/html" href="http://www.flickr.com/photos/shreck/56104498/"/> <id>tag:flickr.com,2005:/photo/56104498</id> <published>2005-10-25T22:42:32Z</published> <updated>2005-10-25T22:42:32Z</updated> <flickr:date_taken>2005-10-22T21:37:17-08:00</flickr:date_taken> <dc:date.Taken>2005-10-22T21:37:17-08:00</dc:date.Taken> <content type="html"> &lt;p&gt;&lt;a href=&quot;http://www.flickr.com/people/shreck/&quot;&gt;manshreck&lt;/a&gt; posted a photo:&lt;/p&gt; &lt;p&gt;&lt;a href=&quot;http://www.flickr.com/photos/shreck/56104498/&quot; title=&quot;Rochester, NY&quot;&gt;&lt;img src=&quot;http://farm1.staticflickr.com/30/56104498_ea4f4d0e9c_m.jpg&quot; width=&quot;240&quot; height=&quot;175&quot; alt=&quot;Rochester, NY&quot; /&gt;&lt;/a&gt;&lt;/p&gt; </content> <author> <name>manshreck</name> <uri>http://www.flickr.com/people/shreck/</uri> <flickr:nsid>51296622@N00</flickr:nsid> <flickr:buddyicon>http://farm1.staticflickr.com/29/buddyicons/51296622@N00.jpg?1130103303#51296622@N00</flickr:buddyicon> </author> <link rel="enclosure" type="image/jpeg" href="http://farm1.staticflickr.com/30/56104498_ea4f4d0e9c_b.jpg" /> <category term="faulkner" scheme="http://www.flickr.com/photos/tags/" /> <displaycategories> </displaycategories> <georss:point>43.127697 -77.573776</georss:point> <geo:lat>43.127697</geo:lat> <geo:long>-77.573776</geo:long> <woe:woeid>2482949</woe:woeid> </entry> <entry> <title>North Bay, ONT</title> <link rel="alternate" type="text/html" href="http://www.flickr.com/photos/shreck/54107454/"/> <id>tag:flickr.com,2005:/photo/54107454</id> <published>2005-10-19T20:08:37Z</published> <updated>2005-10-19T20:08:37Z</updated> <flickr:date_taken>2005-06-08T17:40:13-08:00</flickr:date_taken> <dc:date.Taken>2005-06-08T17:40:13-08:00</dc:date.Taken> <content type="html"> &lt;p&gt;&lt;a href=&quot;http://www.flickr.com/people/shreck/&quot;&gt;manshreck&lt;/a&gt; posted a photo:&lt;/p&gt; &lt;p&gt;&lt;a href=&quot;http://www.flickr.com/photos/shreck/54107454/&quot; title=&quot;North Bay, ONT&quot;&gt;&lt;img src=&quot;http://farm1.staticflickr.com/27/54107454_b629dee37f_m.jpg&quot; width=&quot;240&quot; height=&quot;180&quot; alt=&quot;North Bay, ONT&quot; /&gt;&lt;/a&gt;&lt;/p&gt; &lt;p&gt;Faulkner liked this barbell tennis ball toy. I would end up leaving it at a campsite near Denali. It might still be there.&lt;/p&gt;</content> <author> <name>manshreck</name> <uri>http://www.flickr.com/people/shreck/</uri> <flickr:nsid>51296622@N00</flickr:nsid> <flickr:buddyicon>http://farm1.staticflickr.com/29/buddyicons/51296622@N00.jpg?1130103303#51296622@N00</flickr:buddyicon> </author> <link rel="enclosure" type="image/jpeg" href="http://farm1.staticflickr.com/27/54107454_b629dee37f_z.jpg" /> <category term="" scheme="http://www.flickr.com/photos/tags/" /> <displaycategories> </displaycategories> <georss:point>46.304252 -79.453125</georss:point> <geo:lat>46.304252</geo:lat> <geo:long>-79.453125</geo:long> <woe:woeid>3303</woe:woeid> </entry> <entry> <title>Adirondack State Park, NY</title> <link rel="alternate" type="text/html" href="http://www.flickr.com/photos/shreck/54107176/"/> <id>tag:flickr.com,2005:/photo/54107176</id> <published>2005-10-19T20:07:46Z</published> <updated>2005-10-19T20:07:46Z</updated> <flickr:date_taken>2005-06-06T18:42:22-08:00</flickr:date_taken> <dc:date.Taken>2005-06-06T18:42:22-08:00</dc:date.Taken> <content type="html"> &lt;p&gt;&lt;a href=&quot;http://www.flickr.com/people/shreck/&quot;&gt;manshreck&lt;/a&gt; posted a photo:&lt;/p&gt; &lt;p&gt;&lt;a href=&quot;http://www.flickr.com/photos/shreck/54107176/&quot; title=&quot;Adirondack State Park, NY&quot;&gt;&lt;img src=&quot;http://farm1.staticflickr.com/32/54107176_3b8cdd09ef_m.jpg&quot; width=&quot;240&quot; height=&quot;180&quot; alt=&quot;Adirondack State Park, NY&quot; /&gt;&lt;/a&gt;&lt;/p&gt; &lt;p&gt;Faulkner in the Adirondacks. The thunderstorm would start soon and we would spend the night at a shelter listening to the rain.&lt;/p&gt;</content> <author> <name>manshreck</name> <uri>http://www.flickr.com/people/shreck/</uri> <flickr:nsid>51296622@N00</flickr:nsid> <flickr:buddyicon>http://farm1.staticflickr.com/29/buddyicons/51296622@N00.jpg?1130103303#51296622@N00</flickr:buddyicon> </author> <link rel="enclosure" type="image/jpeg" href="http://farm1.staticflickr.com/32/54107176_3b8cdd09ef_z.jpg" /> <category term="" scheme="http://www.flickr.com/photos/tags/" /> <displaycategories> </displaycategories> <georss:point>44.084625 -73.786926</georss:point> <geo:lat>44.084625</geo:lat> <geo:long>-73.786926</geo:long> <woe:woeid>12589327</woe:woeid> </entry> <entry> <title>Superior, WI</title> <link rel="alternate" type="text/html" href="http://www.flickr.com/photos/shreck/53746581/"/> <id>tag:flickr.com,2005:/photo/53746581</id> <published>2005-10-18T15:37:57Z</published> <updated>2005-10-18T15:37:57Z</updated> <flickr:date_taken>2005-06-09T22:33:19-08:00</flickr:date_taken> <dc:date.Taken>2005-06-09T22:33:19-08:00</dc:date.Taken> <content type="html"> &lt;p&gt;&lt;a href=&quot;http://www.flickr.com/people/shreck/&quot;&gt;manshreck&lt;/a&gt; posted a photo:&lt;/p&gt; &lt;p&gt;&lt;a href=&quot;http://www.flickr.com/photos/shreck/53746581/&quot; title=&quot;Superior, WI&quot;&gt;&lt;img src=&quot;http://farm1.staticflickr.com/31/53746581_9a2b889248_m.jpg&quot; width=&quot;240&quot; height=&quot;180&quot; alt=&quot;Superior, WI&quot; /&gt;&lt;/a&gt;&lt;/p&gt; &lt;p&gt;I camped out on Lake Superior next to a guy who listened to classic rock for far too long. Nice sunset, though.&lt;/p&gt;</content> <author> <name>manshreck</name> <uri>http://www.flickr.com/people/shreck/</uri> <flickr:nsid>51296622@N00</flickr:nsid> <flickr:buddyicon>http://farm1.staticflickr.com/29/buddyicons/51296622@N00.jpg?1130103303#51296622@N00</flickr:buddyicon> </author> <link rel="enclosure" type="image/jpeg" href="http://farm1.staticflickr.com/31/53746581_9a2b889248_l.jpg" /> <category term="" scheme="http://www.flickr.com/photos/tags/" /> <displaycategories> </displaycategories> <georss:point>46.561575 -90.441169</georss:point> <geo:lat>46.561575</geo:lat> <geo:long>-90.441169</geo:long> <woe:woeid>12590559</woe:woeid> </entry> </feed>');
                          // this.response.end('<?xml version="1.0" encoding="UTF-8"?><kml xmlns="http://www.opengis.net/kml/2.2"> <Folder> <name>KML Circle Generator Output</name> <visibility>1</visibility> <Placemark> <name>circle</name> <visibility>1</visibility> <Style> <geomColor>ff0000ff</geomColor> <geomScale>1</geomScale> </Style> <LineString> <coordinates> -122.084073,37.430983152841,0 -122.08387556846,37.430981784499,0 -122.08367819709,37.430977679891,0 -122.08348094602,37.430970840266,0 -122.08328387536,37.43096126771,0 -122.08308704516,37.430948965139,0 -122.0828905154,37.430933936301,0 -122.08269434596,37.430916185778,0 -122.08249859663,37.430895718976,0 -122.08230332704,37.430872542134,0 -122.08210859671,37.430846662313,0 -122.08191446497,37.4308180874,0 -122.08172099096,37.430786826102,0 -122.08152823366,37.430752887944,0 -122.08133625179,37.430716283268,0 -122.08114510385,37.430677023229,0 -122.08095484808,37.430635119789,0 -122.08076554246,37.430590585716,0 -122.08057724468,37.430543434583,0 -122.0803900121,37.430493680754,0 -122.08020390177,37.430441339393,0 -122.08001897041,37.430386426447,0 -122.07983527436,37.430328958649,0 -122.07965286959,37.43026895351,0 -122.07947181168,37.430206429315,0 -122.0792921558,37.430141405115,0 -122.07911395669,37.430073900724,0 -122.07893726864,37.430003936712,0 -122.07876214548,37.429931534395,0 -122.07858864058,37.429856715837,0 -122.07841680679,37.429779503834,0 -122.07824669647,37.429699921914,0 -122.07807836144,37.429617994326,0 -122.077911853,37.429533746033,0 -122.07774722187,37.429447202705,0 -122.0775845182,37.429358390713,0 -122.07742379158,37.429267337118,0 -122.07726509096,37.429174069664,0 -122.07710846468,37.429078616768,0 -122.07695396048,37.428981007516,0 -122.07680162541,37.428881271647,0 -122.07665150588,37.428779439552,0 -122.07650364763,37.428675542258,0 -122.07635809569,37.428569611421,0 -122.0762148944,37.428461679318,0 -122.07607408739,37.428351778834,0 -122.07593571754,37.428239943455,0 -122.07579982701,37.428126207254,0 -122.07566645719,37.428010604887,0 -122.07553564869,37.427893171576,0 -122.07540744138,37.427773943099,0 -122.07528187428,37.427652955784,0 -122.07515898565,37.427530246493,0 -122.07503881292,37.427405852613,0 -122.07492139269,37.427279812044,0 -122.07480676072,37.427152163187,0 -122.07469495191,37.427022944933,0 -122.07458600032,37.426892196652,0 -122.07447993914,37.426759958179,0 -122.07437680064,37.426626269802,0 -122.07427661625,37.426491172252,0 -122.07417941648,37.426354706688,0 -122.07408523091,37.426216914687,0 -122.07399408822,37.426077838229,0 -122.07390601617,37.425937519684,0 -122.07382104157,37.425796001803,0 -122.07373919029,37.425653327698,0 -122.07366048725,37.425509540838,0 -122.07358495641,37.425364685026,0 -122.07351262076,37.425218804393,0 -122.07344350231,37.425071943383,0 -122.07337762212,37.424924146735,0 -122.07331500022,37.424775459476,0 -122.07325565567,37.424625926902,0 -122.07319960655,37.424475594568,0 -122.07314686988,37.42432450827,0 -122.07309746174,37.424172714036,0 -122.07305139714,37.424020258107,0 -122.0730086901,37.423867186927,0 -122.07296935361,37.423713547127,0 -122.07293339963,37.42355938551,0 -122.07290083909,37.423404749039,0 -122.07287168188,37.423249684819,0 -122.07284593689,37.423094240088,0 -122.07282361191,37.422938462198,0 -122.07280471373,37.422782398601,0 -122.07278924809,37.422626096839,0 -122.07277721968,37.422469604523,0 -122.07276863213,37.422312969325,0 -122.07276348805,37.422156238956,0 -122.07276178898,37.421999461159,0 -122.07276353541,37.42184268369,0 -122.07276872679,37.421685954306,0 -122.07277736152,37.421529320746,0 -122.07278943695,37.421372830723,0 -122.07280494937,37.421216531903,0 -122.07282389404,37.421060471895,0 -122.07284626517,37.420904698235,0 -122.07287205592,37.420749258372,0 -122.07290125841,37.420594199652,0 -122.07293386374,37.420439569303,0 -122.07296986194,37.420285414427,0 -122.07300924203,37.420131781976,0 -122.073051992,37.419978718744,0 -122.0730980988,37.419826271354,0 -122.07314754837,37.419674486238,0 -122.07320032563,37.419523409628,0 -122.07325641448,37.419373087537,0 -122.07331579783,37.419223565751,0 -122.07337845755,37.419074889811,0 -122.07344437456,37.418927105,0 -122.07351352875,37.418780256328,0 -122.07358589904,37.418634388523,0 -122.07366146338,37.418489546011,0 -122.07374019872,37.418345772905,0 -122.07382208107,37.418203112996,0 -122.07390708548,37.418061609731,0 -122.07399518603,37.417921306207,0 -122.07408635589,37.417782245155,0 -122.07418056725,37.417644468928,0 -122.07427779143,37.417508019487,0 -122.07437799878,37.417372938387,0 -122.07448115877,37.417239266768,0 -122.07458723998,37.41710704534,0 -122.07469621007,37.416976314372,0 -122.07480803585,37.416847113677,0 -122.07492268325,37.416719482604,0 -122.07504011733,37.416593460021,0 -122.07516030232,37.416469084308,0 -122.0752832016,37.416346393343,0 -122.07540877773,37.416225424491,0 -122.07553699246,37.416106214591,0 -122.07566780673,37.415988799947,0 -122.07580118068,37.415873216317,0 -122.07593707369,37.415759498899,0 -122.07607544436,37.415647682325,0 -122.07621625055,37.415537800646,0 -122.07635944935,37.415429887325,0 -122.07650499717,37.415323975225,0 -122.07665284965,37.415220096599,0 -122.07680296177,37.41511828308,0 -122.0769552878,37.415018565675,0 -122.07710978135,37.414920974748,0 -122.07726639536,37.41482554002,0 -122.07742508214,37.414732290552,0 -122.07758579334,37.41464125474,0 -122.07774848003,37.414552460307,0 -122.07791309265,37.414465934293,0 -122.07807958108,37.414381703045,0 -122.0782478946,37.414299792215,0 -122.07841798196,37.414220226745,0 -122.07858979135,37.414143030864,0 -122.07876327046,37.41406822808,0 -122.07893836645,37.41399584117,0 -122.079115026,37.413925892178,0 -122.0792931953,37.413858402404,0 -122.07947282011,37.413793392399,0 -122.07965384571,37.413730881959,0 -122.07983621699,37.41367089012,0 -122.0800198784,37.413613435149,0 -122.08020477401,37.413558534542,0 -122.08039084753,37.413506205017,0 -122.08057804229,37.413456462508,0 -122.08076630127,37.413409322162,0 -122.08095556717,37.413364798333,0 -122.08114578233,37.41332290458,0 -122.08133688885,37.413283653659,0 -122.08152882852,37.413247057522,0 -122.0817215429,37.413213127313,0 -122.0819149733,37.413181873363,0 -122.08210906082,37.41315330519,0 -122.08230374637,37.413127431493,0 -122.08249897066,37.41310426015,0 -122.08269467424,37.413083798216,0 -122.08289079753,37.413066051924,0 -122.08308728079,37.413051026675,0 -122.08328406421,37.413038727046,0 -122.08348108786,37.413029156782,0 -122.08367829175,37.413022318797,0 -122.08387561582,37.413018215172,0 -122.084073,37.413016847159,0 -122.08427038418,37.413018215172,0 -122.08446770825,37.413022318797,0 -122.08466491214,37.413029156782,0 -122.08486193579,37.413038727046,0 -122.08505871921,37.413051026675,0 -122.08525520247,37.413066051924,0 -122.08545132576,37.413083798216,0 -122.08564702934,37.41310426015,0 -122.08584225363,37.413127431493,0 -122.08603693918,37.41315330519,0 -122.0862310267,37.413181873363,0 -122.0864244571,37.413213127313,0 -122.08661717148,37.413247057522,0 -122.08680911115,37.413283653659,0 -122.08700021767,37.41332290458,0 -122.08719043283,37.413364798333,0 -122.08737969873,37.413409322162,0 -122.08756795771,37.413456462508,0 -122.08775515247,37.413506205017,0 -122.08794122599,37.413558534542,0 -122.0881261216,37.413613435149,0 -122.08830978301,37.41367089012,0 -122.08849215429,37.413730881959,0 -122.08867317989,37.413793392399,0 -122.0888528047,37.413858402404,0 -122.089030974,37.413925892178,0 -122.08920763355,37.41399584117,0 -122.08938272954,37.41406822808,0 -122.08955620865,37.414143030864,0 -122.08972801804,37.414220226745,0 -122.0898981054,37.414299792215,0 -122.09006641892,37.414381703045,0 -122.09023290735,37.414465934293,0 -122.09039751997,37.414552460307,0 -122.09056020666,37.41464125474,0 -122.09072091786,37.414732290552,0 -122.09087960464,37.41482554002,0 -122.09103621865,37.414920974748,0 -122.0911907122,37.415018565675,0 -122.09134303823,37.41511828308,0 -122.09149315035,37.415220096599,0 -122.09164100283,37.415323975225,0 -122.09178655065,37.415429887325,0 -122.09192974945,37.415537800646,0 -122.09207055564,37.415647682325,0 -122.09220892631,37.415759498899,0 -122.09234481932,37.415873216317,0 -122.09247819327,37.415988799947,0 -122.09260900754,37.416106214591,0 -122.09273722227,37.416225424491,0 -122.0928627984,37.416346393343,0 -122.09298569768,37.416469084308,0 -122.09310588267,37.416593460021,0 -122.09322331675,37.416719482604,0 -122.09333796415,37.416847113677,0 -122.09344978993,37.416976314372,0 -122.09355876002,37.41710704534,0 -122.09366484123,37.417239266768,0 -122.09376800122,37.417372938387,0 -122.09386820857,37.417508019487,0 -122.09396543275,37.417644468928,0 -122.09405964411,37.417782245155,0 -122.09415081397,37.417921306207,0 -122.09423891452,37.418061609731,0 -122.09432391893,37.418203112996,0 -122.09440580128,37.418345772905,0 -122.09448453662,37.418489546011,0 -122.09456010096,37.418634388523,0 -122.09463247125,37.418780256328,0 -122.09470162544,37.418927105,0 -122.09476754245,37.419074889811,0 -122.09483020217,37.419223565751,0 -122.09488958552,37.419373087537,0 -122.09494567437,37.419523409628,0 -122.09499845163,37.419674486238,0 -122.0950479012,37.419826271354,0 -122.095094008,37.419978718744,0 -122.09513675797,37.420131781976,0 -122.09517613806,37.420285414427,0 -122.09521213626,37.420439569303,0 -122.09524474159,37.420594199652,0 -122.09527394408,37.420749258372,0 -122.09529973483,37.420904698235,0 -122.09532210596,37.421060471895,0 -122.09534105063,37.421216531903,0 -122.09535656305,37.421372830723,0 -122.09536863848,37.421529320746,0 -122.09537727321,37.421685954306,0 -122.09538246459,37.42184268369,0 -122.09538421102,37.421999461159,0 -122.09538251195,37.422156238956,0 -122.09537736787,37.422312969325,0 -122.09536878032,37.422469604523,0 -122.09535675191,37.422626096839,0 -122.09534128627,37.422782398601,0 -122.09532238809,37.422938462198,0 -122.09530006311,37.423094240088,0 -122.09527431812,37.423249684819,0 -122.09524516091,37.423404749039,0 -122.09521260037,37.42355938551,0 -122.09517664639,37.423713547127,0 -122.0951373099,37.423867186927,0 -122.09509460286,37.424020258107,0 -122.09504853826,37.424172714036,0 -122.09499913012,37.42432450827,0 -122.09494639345,37.424475594568,0 -122.09489034433,37.424625926902,0 -122.09483099978,37.424775459476,0 -122.09476837788,37.424924146735,0 -122.09470249769,37.425071943383,0 -122.09463337924,37.425218804393,0 -122.09456104359,37.425364685026,0 -122.09448551275,37.425509540838,0 -122.09440680971,37.425653327698,0 -122.09432495843,37.425796001803,0 -122.09423998383,37.425937519684,0 -122.09415191178,37.426077838229,0 -122.09406076909,37.426216914687,0 -122.09396658352,37.426354706688,0 -122.09386938375,37.426491172252,0 -122.09376919936,37.426626269802,0 -122.09366606086,37.426759958179,0 -122.09355999968,37.426892196652,0 -122.09345104809,37.427022944933,0 -122.09333923928,37.427152163187,0 -122.09322460731,37.427279812044,0 -122.09310718708,37.427405852613,0 -122.09298701435,37.427530246493,0 -122.09286412572,37.427652955784,0 -122.09273855862,37.427773943099,0 -122.09261035131,37.427893171576,0 -122.09247954281,37.428010604887,0 -122.09234617299,37.428126207254,0 -122.09221028246,37.428239943455,0 -122.09207191261,37.428351778834,0 -122.0919311056,37.428461679318,0 -122.09178790431,37.428569611421,0 -122.09164235237,37.428675542258,0 -122.09149449412,37.428779439552,0 -122.09134437459,37.428881271647,0 -122.09119203952,37.428981007516,0 -122.09103753532,37.429078616768,0 -122.09088090904,37.429174069664,0 -122.09072220842,37.429267337118,0 -122.0905614818,37.429358390713,0 -122.09039877813,37.429447202705,0 -122.090234147,37.429533746033,0 -122.09006763856,37.429617994326,0 -122.08989930353,37.429699921914,0 -122.08972919321,37.429779503834,0 -122.08955735942,37.429856715837,0 -122.08938385452,37.429931534395,0 -122.08920873136,37.430003936712,0 -122.08903204331,37.430073900724,0 -122.0888538442,37.430141405115,0 -122.08867418832,37.430206429315,0 -122.08849313041,37.43026895351,0 -122.08831072564,37.430328958649,0 -122.08812702959,37.430386426447,0 -122.08794209823,37.430441339393,0 -122.0877559879,37.430493680754,0 -122.08756875532,37.430543434583,0 -122.08738045754,37.430590585716,0 -122.08719115192,37.430635119789,0 -122.08700089615,37.430677023229,0 -122.08680974821,37.430716283268,0 -122.08661776634,37.430752887944,0 -122.08642500904,37.430786826102,0 -122.08623153503,37.4308180874,0 -122.08603740329,37.430846662313,0 -122.08584267296,37.430872542134,0 -122.08564740337,37.430895718976,0 -122.08545165404,37.430916185778,0 -122.0852554846,37.430933936301,0 -122.08505895484,37.430948965139,0 -122.08486212464,37.43096126771,0 -122.08466505398,37.430970840266,0 -122.08446780291,37.430977679891,0 -122.08427043154,37.430981784499,0 -122.084073,37.430983152841,0 </coordinates> </LineString> </Placemark> </Folder></kml>');
                        }});
});
