# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all
Album.destroy_all
Artist.destroy_all
PlaylistSong.destroy_all
Song.destroy_all
Playlist.destroy_all

user1 = User.create!({email: "drewshroyer@gmail.com", password: "password", name: "Drew", birthdate: "1994-09-14", gender: "Male"})
user2 = User.create!({email: "drewshroyer1@gmail.com", password: "password", name: "Sarah", birthdate: "1990-09-14", gender: "Female"})
user3 = User.create!({email: "password@gmail.com", password: "password", name: "Demo User", birthdate: "1990-09-14", gender: "Female"})

#Troye Sivan
artist1 = Artist.create!({name: "Troye Sivan", biography: "TIME magazine proclaimed Troye Sivan “the perfect pop star for 2018” and his work continues to affirm his reputation as an important artistic voice for our time. His 2015 debut album, Blue Neighbourhood, topped the iTunes charts in 66 countries, and is certified Gold in four countries. Troye’s Blue Neighbourhood trilogy of videos captured coming-of-age from a modern perspective, resonating especially with LGBTQ teens.
2018’s Bloom was named as one of the best albums of the year by Rolling Stone, USA Today, Billboard, OUT, PopMatters, TIME, The Guardian and numerous others. The first single, “My My My!,” topped Billboard’s Dance Club Songs chart and has been certified Gold in the U.S. and Canada. Critics singled out “My My My!,” “Bloom” and “Animal” as among the best songs of 2018. Cumulative streams of tracks from Bloom exceed one billion globally.
In late 2018, Troye teamed up with Charli XCX for the single “1999.” His collaboration with Lauv “I’m So Tired” has over 650 million streams globally.“Revelation” – his collaboration with Jónsi for the film Boy Erased, which Troye co-starred in – was nominated for a Golden Globe for Best Original Song – Motion Picture and shortlisted for an Oscar. Troye’s numerous awards include a Billboard Music Awards trophy, three MTV Europe Music awards and two GLAAD Media wins.
Troye returned in 2020 with singles Take Yourself Home and Easy, taken from the new new six-song concept EP 'In A Dream' which was released August 21."})
album1 = Album.create!({name: "1999", creator_id: artist1.id})
song1 = Song.create!({name: "1999", album_id: album1.id, artist_id: artist1.id, song_length: "3:09"})
file1 = URI.open('https://fabify-seeds.s3.us-east-2.amazonaws.com/TroyeSivan-1999.mp3')
file2 = URI.open('https://fabify-seeds.s3.us-east-2.amazonaws.com/charli-xcx-troye-sivan-1999-1538664038-compressed.jpg')
song1.audio.attach(io: file1, filename: '1999-troye-sivan-audio.mp3')
song1.photo.attach(io: file2, filename: '1999-troye-sivan-album-cover.jpg')

album2 = Album.create!({name: "Bloom", creator_id: artist1.id})
song2 = Song.create!({name: "My, My, My", album_id: album2.id, artist_id: artist1.id, song_length: "3:24"})
file3 = URI.open('https://fabify-seeds.s3.us-east-2.amazonaws.com/Troye+Sivan+-+My+My+My!+(Official+Video).mp3')
file4 = URI.open('https://fabify-seeds.s3.us-east-2.amazonaws.com/troye-sivan-my-my-my.jpg')
song2.audio.attach(io: file3, filename: 'MYMYMY-troye-sivan-audio.mp3')
song2.photo.attach(io: file4, filename: 'MYMYMY-troye-sivan-album-cover.jpg')

#Kim Petras
artist2 = Artist.create!({name: "Kim Petras", biography: "Fast-rising pop sensation Kim Petras has become one of music’s most buzzed-about artists with the release of her latest single “Malibu” and her critically acclaimed debut full-length Clarity. Kim will be making her Coachella debut in October after recently wrapping her international The Clarity Tour and selling out her first ever headline tour last summer in minutes during presale. Kim’s undeniable voice and imaginative artistry have skyrocketed her to international recognition as one of pop’s most promising talents while earning major mainstream media acclaim from the likes of NY Times, NPR, Vanity Fair, People, Rolling Stone, MTV, Glamour, Elle, Variety, Allure, Billboard, Cosmopolitan, Paper, V Magazine, Noisey, OUT, Pitchfork, i-D, Refinery29, and more.  First breaking out with her #1 Spotify Global Viral 50 bop “I Don’t Want It At All,” Kim launched into Top 40 radio with her pop hit “Heart to Break,” opened for Troye Sivan’s nationwide Bloom Tour last year, revived and redefined Halloween music with her spooky project TURN OFF THE LIGHT, collaborated with Charli XCX, Cheat Codes, MAX, SOPHIE, Lil Aaron, and more, appeared on “How It’s Done” from the Ariana-Grande-produced Charlie’s Angels soundtrack, and has been featured on multiple billboards in New York, London, and Los Angeles as a Spotify RISE artist."})
album3 = Album.create!({name: "Malibu", creator_id: artist2.id})
song3 = Song.create!({name: "Malibu", album_id: album3.id, artist_id: artist2.id, song_length: "3:11"})
file5 = URI.open('https://fabify-seeds.s3.us-east-2.amazonaws.com/Malibu+-+Kim+Petras+(At+Home+Edition).mp3')
file6 = URI.open('https://fabify-seeds.s3.us-east-2.amazonaws.com/kim_petras_malibu_cover2.jpg')
song3.audio.attach(io: file5, filename: 'Malibu-kim-petras-audio.mp3')
song3.photo.attach(io: file6, filename: 'Malibu-kim-petras-album-cover.jpg')

album4 = Album.create!({name: "Heart To Break", creator_id: artist2.id})
song4 = Song.create!({name: "Heart To Break", album_id: album4.id, artist_id: artist2.id, song_length: "3:45"})
file7 = URI.open('https://fabify-seeds.s3.us-east-2.amazonaws.com/Heart+to+Break+-+Kim+Petras+(Official+Music+Video).mp3')
file8 = URI.open('https://fabify-seeds.s3.us-east-2.amazonaws.com/kim_petras_heart_to_break.jpg')
song4.audio.attach(io: file7, filename: 'Heart-To-Break-kim-petras-audio.mp3')
song4.photo.attach(io: file8, filename: 'Heart-To-Break-kim-petras-album-cover.jpg')

#070 Shake
artist3 = Artist.create!({name: "070 Shake", biography: "Ranging from fraught to vicious, the voice of rapper and singer 070 Shake is among the most unique in contemporary rap. Born Danielle Balbuena in New Jersey, she came up as part of the 070 crew, breaking through in 2016 as a teenager with Trust Nobody, which was originally released during the year's first quarter. The cold-blooded track was picked up by 's -supported  label, which re-released it in late September as Shake was about to begin an extensive October-November trek across the U.S. as the opening act for . A  collaboration titled Rewind was issued during that stretch.
Just after the tour's completion,  released the various-artists Direct Deposit, Vol. 1 compilation and featured Trust Nobody as the finale. Shortly thereafter, Shake and her 070 associates -- including Ralphy River, Treee Safari, and Phi -- independently released a compilation of their own, The 070 Project: Chapter One. Another independent Shake single, Stranger, followed in April 2017.
In 2018, she headed out on her own with the Glitter EP, which featured I Laugh When I'm with Friends But Sad When I'm Alone and Somebody Like Me with clique-mate Phi. Her mainstream breakthrough arrived months later via key inclusions on Santeria from 's Daytona, as well as Ghost Town and Violent Crimes from 's Ye."})
album5 = Album.create!({name: "Modus Vivendi", creator_id: artist3.id})
song5 = Song.create!({name: "Guilty Conscience", album_id: album5.id, artist_id: artist3.id, song_length: "3:33"})
file9 = URI.open('https://fabify-seeds.s3.us-east-2.amazonaws.com/070+Shake+-+Guilty+Conscience+(Official+Video).mp3')
file10 = URI.open('https://fabify-seeds.s3.us-east-2.amazonaws.com/bkt1uemgtyoptnmhk6qq.webp')
song5.audio.attach(io: file9, filename: 'Guilty-Conscience-070-Shake-audio.mp3')
song5.photo.attach(io: file10, filename: 'Guilty-Conscience-070-Shake-album-cover.jpg')
album6 = Album.create!({name: "Glitter", creator_id: artist3.id})
song6 = Song.create!({name: "I Laugh When I'm With Friends But Sad When I'm Alone", album_id: album6.id, artist_id: artist3.id, song_length: "3:27"})
file11 = URI.open('https://fabify-seeds.s3.us-east-2.amazonaws.com/070Shake-I-Laugh.mp3')
file12 = URI.open('https://fabify-seeds.s3.us-east-2.amazonaws.com/070-shake-laugh.jpg')
song6.audio.attach(io: file11, filename: 'ILaughWhenImWithFriendsButSadWhenImAlone-070-Shake-070-Shake-audio.mp3')
song6.photo.attach(io: file12, filename: 'ILaughWhenImWithFriendsButSadWhenImAlone-070-Shake-album-cover.jpg')

#Kehlani
artist4 = Artist.create!({name: "Kehlani", biography: "Without sugarcoating or softening a word, the Bay Area-born two-time GRAMMY® Award-nominated multiplatinum songstress will drop a hard truth in one breath and flip a middle finger in the next. Either way, she finds a way to consistently relate without filter. Kehlani’s 2015 breakout mixtape You Should Be Here received a GRAMMY® nod in the category of “Best Urban Contemporary Album.” She contributed to the soundtracks for Suicide Squad and The Fate of the Furious and guested on Cardi B’s “Ring,” Kyle’s “PLAYINWITME,” and Justin Bieber’s “Get Me,” to name a few. By 2020, she picked up three gold solo singles—You Should Be Here, Honey, and Distraction, for which she received her second GRAMMY® nomination for Best R&B performance. In addition, four platinum singles—Gangsta, The Way [feat. Chance the Rapper], CRZY, and “Nights Like This and streams in the billions. Not to mention, Billboard Women In Music honored her with the Rule Breaker Award. In the aftermath of 2019’s chart-topping While We Wait mixtape, everything changed. She became a mom. As such, parenthood left an indelible imprint on her second full-length, It Was Good Until It Wasn’t. The album is described by Kehlani as her most mature body of work, featuring songs based on her own real experiences including Toxic and Everybody Business. In the end, you’ll know exactly what’s on Kehlani’s mind, heart, and soul."})
album7 = Album.create!({name: "Honey", creator_id: artist4.id})
song7 = Song.create!({name: "Gangsta", album_id: album7.id, artist_id: artist4.id, song_length: "2:57"})
file13 = URI.open('https://fabify-seeds.s3.us-east-2.amazonaws.com/Kehlani+-+Gangsta+(from+Suicide+Squad+The+Album)+%5BOfficial+Video%5D.mp3')
file14 = URI.open('https://fabify-seeds.s3.us-east-2.amazonaws.com/kehlani-gansta.jpg')
song7.audio.attach(io: file13, filename: 'Gangsta-Kehlani-audio.mp3')
song7.photo.attach(io: file14, filename: 'Gangsta-Kehlani-album-cover.jpg')
album8 = Album.create!({name: "While We Wait", creator_id: artist4.id})
song8 = Song.create!({name: "Nights Like This", album_id: album8.id, artist_id: artist4.id, song_length: "3:21"})
file15 = URI.open('https://fabify-seeds.s3.us-east-2.amazonaws.com/Kehlani+-+Nights+Like+This+(feat.+Ty+Dolla+%24ign)+%5BOfficial+Video%5D.mp3')
file16 = URI.open('https://fabify-seeds.s3.us-east-2.amazonaws.com/nights_like_this_kehlani_album.jpg')
song8.audio.attach(io: file15, filename: 'ILaughWhenImWithFriendsButSadWhenImAlone-070-Shake-070-Shake-audio.mp3')
song8.photo.attach(io: file16, filename: 'ILaughWhenImWithFriendsButSadWhenImAlone-070-Shake-album-cover.jpg')

#Sam Smith
artist5 = Artist.create!({name: "Sam Smith", biography: "Shot from obscurity to fame as the featured artist on 's Latch (2012), a global smash hit that showcased their distinctively stirring high tenor, Sam Smith has since become one of pop's most prominent balladeers. Taking cues from soul belters like  and , followers such as  and , and their own church upbringing, Smith effectively arrived as a headliner with In the Lonely Hour (2014). Multi-platinum in the singer's native U.K. and the U.S., the album also garnered Best New Artist and three additional Grammys among a slew of accolades. Smith followed up with The Thrill of It All (2017), a heartsick album favoring Southern soul and gospel, and by the end of the 2010s accumulated six number one U.K. singles as a headliner: Money on My Mind, Stay with Me,/ and Lay Me Down, followed by the Academy Award-winning James Bond theme Writing's on the Wall, Too Good at Goodbyes, and the  collaboration Promises. Smith entered the next decade with the Top 20 U.K. single To Die For."})
album9 = Album.create!({name: "Diamonds", creator_id: artist5.id})
song9 = Song.create!({name: "Diamonds", album_id: album9.id, artist_id: artist5.id, song_length: "3.33"})
file17 = URI.open('https://fabify-seeds.s3.us-east-2.amazonaws.com/Sam+Smith+-+Diamonds.mp3')
file18 = URI.open('https://fabify-seeds.s3.us-east-2.amazonaws.com/sam_smith_diamonds.jpg')
song9.audio.attach(io: file17, filename: 'Sam-Smith-Diamonds-audio.mp3')
song9.photo.attach(io: file18, filename: 'Sam-Smith-Diamonds-album-cover.jpg')

album10 = Album.create!({name: "While We Wait", creator_id: artist5.id})
song10 = Song.create!({name: "Dancing With a Stranger", album_id: album10.id, artist_id: artist5.id, song_length: "2.51"})
file19 = URI.open('https://fabify-seeds.s3.us-east-2.amazonaws.com/Sam+Smith%2C+Normani+-+Dancing+With+A+Stranger+(Official+Video).mp3')
file20 = URI.open('https://fabify-seeds.s3.us-east-2.amazonaws.com/sam_smith_dancing.jpeg')
song10.audio.attach(io: file19, filename: 'Sam-Smith-Dancing-audio.mp3')
song10.photo.attach(io: file20, filename: 'Sam-Smith-Dancing-album-cover.jpg')

#Fletcher
artist6 = Artist.create!({name: "Fletcher", biography: "the nighttime is the hardest, that's when i'm brokenhearted. you up? t(ex)t me at 732.605.5362 x"})
album11 = Album.create!({name: "Bitter", creator_id: artist6.id})
song11 = Song.create!({name: "Bitter", album_id: album11.id, artist_id: artist6.id, song_length: "2.57"})
file21 = URI.open('https://fabify-seeds.s3.us-east-2.amazonaws.com/FLETCHER%2C+Kito+-+Bitter+ft.+Trevor+Daniel.mp3')
file22 = URI.open('https://fabify-seeds.s3.us-east-2.amazonaws.com/fletcher_bitter.jpg')
song11.audio.attach(io: file21, filename: 'Fletcher-Bitter-audio.mp3')
song11.photo.attach(io: file22, filename: 'Fletcher-Bitter-cover.jpg')

album12 = Album.create!({name: "Finding Fletcher", creator_id: artist6.id})
song12 = Song.create!({name: "Undrunk", album_id: album12.id, artist_id: artist6.id, song_length: "3.21"})
file23 = URI.open('https://fabify-seeds.s3.us-east-2.amazonaws.com/FLETCHER+-+Undrunk+(Official+Video).mp3')
file24 = URI.open('https://fabify-seeds.s3.us-east-2.amazonaws.com/fletcher_undrunk.jpg')
song12.audio.attach(io: file23, filename: 'Fletcher-Undrunk-audio.mp3')
song12.photo.attach(io: file24, filename: 'Fletcher-Undrunk-album-cover.jpg')

#Janelle Monae
artist7 = Artist.create!({name: "Janelle Monae", biography: "Grammy-nominated singer, songwriter, arranger, producer, and actor Janelle Monáe left her mark on 2010s R&B with an energized retro-futuristic sound wrapped in theatrical science fiction concepts. After she spent years grinding away in the Atlanta underground, Monáe capitalized on support from 's  and developed into one of the most dynamic artists of her time, fusing soul, funk, hip-hop, and new wave -- among other genres -- with a spirited approach that seemed to treat entertainment and art as indivisible. She and her fellow  associates likewise stressed singles as much as albums. Tightrope and Django Jane provided bold jolts, while The ArchAndroid (2010), The Electric Lady (2013), and Dirty Computer (2018), all complex full-lengths, elaborated upon themes of oppression, identity, and liberation as they related to race and sexuality."})
album13 = Album.create!({name: "Dirty Computer", creator_id: artist7.id})
song13 = Song.create!({name: "I Like That", album_id: album13.id, artist_id: artist7.id, song_length: "4.12"})
file25 = URI.open('https://fabify-seeds.s3.us-east-2.amazonaws.com/Janelle+Mona%CC%81e+-+I+Like+That+%5BOfficial+Music+Video%5D.mp3')
file26 = URI.open('https://fabify-seeds.s3.us-east-2.amazonaws.com/0501_janelle-monae-dirty-computer-1000x1000.jpg')
song13.audio.attach(io: file25, filename: 'Janelle-Monae-i-like-that-audio.mp3')
song13.photo.attach(io: file26, filename: 'Janelle-Monae-Dirty-Computer-album-cover.jpg')

song14 = Song.create!({name: "Make Me Feel", album_id: album13.id, artist_id: artist7.id, song_length: "3.27"})
file27 = URI.open('https://fabify-seeds.s3.us-east-2.amazonaws.com/Janelle+Mona%CC%81e+Make+Me+Feel+%5BOfficial+Music+Video%5D.mp3')
file28 = URI.open('https://fabify-seeds.s3.us-east-2.amazonaws.com/042618_JanelleMonae_HighRes_Art_MakeMeFeel.jpg')
song14.audio.attach(io: file27, filename: 'Janelle-Monae-make-me-feel-audio.mp3')
song14.photo.attach(io: file28, filename: 'Janelle-Monae-Make-Me-Feel-album-cover.jpg')

#King Princess
artist9 = Artist.create!({name: "King Princess", biography: "American singer/songwriter, producer, and multi-instrumentalist King Princess delivers her soulful vocals over warm, atmospheric synth production inspired by influences. She broke through in 2018 with her single 1950 before issuing her 2019 debut, Cheap Queen.Born Mikaela Straus, the Brooklyn-based artist was a young music prodigy, reportedly offered a record deal when she was just 11. She studied at USC before leaving school to pursue a music career. Early songs like Send Pix and Sunburn featured a more bluesy rock tone, one that she would polish on her 2018 breakthrough, 1950. The queer love anthem received cosigns from the likes of  and  and was her first release for 's  label. She followed with her second single, Talia. Both tracks appeared on her 2018 EP Make My Bed, which topped the New Zealand Heatseekers chart. She followed with the single Pussy Is God, as well as a cover of  and 's Femme Fatale and a collaboration with , I Know. In 2019, King Princess released her debut full-length album, Cheap Queen, which cracked the Top 20 of the Billboard Top Alternative Albums chart. ~ Neil Z. Yeung, Rovi"})
album15 = Album.create!({name: "Make My Bed", creator_id: artist9.id})
song15 = Song.create!({name: "Upper West Side", album_id: album15.id, artist_id: artist9.id, song_length: "3.31"})
file29 = URI.open('https://fabify-seeds.s3.us-east-2.amazonaws.com/King+Princess+-+Upper+West+Side+(Official+Video).mp3')
file30 = URI.open('https://fabify-seeds.s3.us-east-2.amazonaws.com/Make_My_Bed_Cover_king_princess.jpg')
song15.audio.attach(io: file29, filename: 'King-Princess-Upper-West-Side-audio.mp3')
song15.photo.attach(io: file30, filename: 'King-Princess-Upper-West-Side-cover.jpg')

album16 = Album.create!({name: "Cheap Queen", creator_id: artist9.id})
song16 = Song.create!({name: "Cheap Queen", album_id: album16.id, artist_id: artist9.id, song_length: "2.41"})
file31 = URI.open('https://fabify-seeds.s3.us-east-2.amazonaws.com/King+Princess+-+Cheap+Queen.mp3')
file32 = URI.open('https://fabify-seeds.s3.us-east-2.amazonaws.com/king_princess_cheap_queen.jpg')
song16.audio.attach(io: file31, filename: 'King-Princess-Cheap-Queen-audio.mp3')
song16.photo.attach(io: file32, filename: 'King-Princess-Cheap-Queen-album-cover.jpg')

#Lil Nas X
artist10 = Artist.create!({name: "Lil Nas X", biography: "Moseying onto the scene with a surprise breakthrough, Atlanta's Lil Nas X merged the pastoral tones of country music with hip-hop, putting his spin on a subgenre dubbed country-trap. Like similar experiments by  and Lil Tracy, the hybrid was an unexpected success for the rapper: his debut single, Old Town Road, was a viral hit on social media and streaming, sending him toward the upper reaches of the Hot 100. By the summer of 2019, it was certified multi-platinum and number one across the globe."})
album17 = Album.create!({name: "7 EP", creator_id: artist10.id})
song17 = Song.create!({name: "Old Town Road", album_id: album17.id, artist_id: artist10.id, song_length: "2.37"})
file33 = URI.open('https://fabify-seeds.s3.us-east-2.amazonaws.com/Lil+Nas+X+-+Old+Town+Road+(Official+Movie)+ft.+Billy+Ray+Cyrus.mp3')
file34 = URI.open('https://fabify-seeds.s3.us-east-2.amazonaws.com/old+town+road+lil+nas+x+album+cover.jpg')
song17.audio.attach(io: file33, filename: 'Lil-Nas-X-audio.mp3')
song17.photo.attach(io: file34, filename: 'Lil-Nas-X-cover.jpg')

#Miley Cyrus 
artist11 = Artist.create!({name: "Miley Cyrus ", biography: "Miley Cyrus is one of the most influential artists in pop culture. She has five #1 albums including her 2013 GRAMMY-nominated album Bangerz, that is also certified 3x platinum in the U.S., five sold out world tours and 36 million digital tracks sold in the US alone. In 2015 she released her free, 23-track surprise experimental album, Miley Cyrus and Her Dead Petz, co-produced by Wayne Coyne and other Flaming Lips members. Her sixth album, Younger Now, which was released in 2017, exceeded 1.7 billion streams worldwide. In the summer of 2019, Cyrus dropped SHE IS COMING, the first of three EPs that will make up one album titled SHE IS: MILEY CYRUS. The album debuted in the Top 5 on the Billboard Top 200 Album Chart with the track, Mother’s Daughter, garnering 130 million streams worldwide. In September Cyrus released, “Slide Away,” which currently has 21 million streams worldwide, with the accompanying video reaching 19 million views in less than a month. Cyrus also collaborated with Ariana Grande and Lana Del Rey on the soundtrack for the 2019 reboot of Charlie’s Angels with the song “Don’t Call me Angel.“ The song set the record for biggest single day streams for an all-female collaboration in Spotify History."})
album18 = Album.create!({name: "Midnight Sky", creator_id: artist11.id})
song18 = Song.create!({name: "Midnight Sky", album_id: album18.id, artist_id: artist11.id, song_length: "3.31"})
file35 = URI.open('https://fabify-seeds.s3.us-east-2.amazonaws.com/Miley+Cyrus+-+Midnight+Sky+(Official+Video).mp3')
file36 = URI.open('https://fabify-seeds.s3.us-east-2.amazonaws.com/Miley-Cyrus-Midnight-Sky-Cover.jpg')
song18.audio.attach(io: file35, filename: 'Miley_Cyrus-Midnight-Sky-audio.mp3')
song18.photo.attach(io: file36, filename: 'Miley_Cyrus-Midnight-Sky-cover.jpg')

album19 = Album.create!({name: "Slide Away", creator_id: artist11.id})
song19 = Song.create!({name: "Slide Away", album_id: album19.id, artist_id: artist11.id, song_length: "2.41"})
file37 = URI.open('https://fabify-seeds.s3.us-east-2.amazonaws.com/Miley+Cyrus+-+Slide+Away+(Official+Video).mp3')
file38 = URI.open('https://fabify-seeds.s3.us-east-2.amazonaws.com/Miley-Cyrus-Slide-Away-1565961099-compressed.jpg')
song19.audio.attach(io: file37, filename: 'Miley_Cyrus-Slide-Away-audio.mp3')
song19.photo.attach(io: file38, filename: 'Miley_Cyrus-Slide-Away-album-cover.jpg')

album20 = Album.create!({name: "Bangerz", creator_id: artist11.id})
song20 = Song.create!({name: "Wrecking Ball", album_id: album20.id, artist_id: artist11.id, song_length: "3.31"})
file39 = URI.open('https://fabify-seeds.s3.us-east-2.amazonaws.com/Miley+Cyrus+-+Wrecking+Ball+(Official+Video).mp3')
file40 = URI.open('https://fabify-seeds.s3.us-east-2.amazonaws.com/miley-cyrus-bangerz-deluxe.jpg')
song20.audio.attach(io: file39, filename: 'Miley-Cyrus-Bangerz-audio.mp3')
song20.photo.attach(io: file40, filename: 'Miley-Cyrus-Bangerz-cover.jpg')

playlist1 = Playlist.create!(name: "New Music Friday", author_id: user3.id, description: "Come back each Friday for fresh new tunes! New Music from Miley Cyrus, Sam Smith, Kehlani, and more!")
playlist2 = Playlist.create!(name: "2020 Wrapped", author_id: user3.id, description: "Your year in Review - Wrapped is where Fabify listeners everywhere get a deep dive into their most memorable listening moments of the year.")
playlist3 = Playlist.create!(name: "QUEERANTINE", author_id: user3.id, description: "This past year of Quarantine as represented by queer artists. It's time to feel ALL the feels.")

playlistsong1 = PlaylistSong.create!(song_id: song18.id, playlist_id: playlist1.id)
playlistsong2 = PlaylistSong.create!(song_id: song9.id, playlist_id: playlist1.id)

playlistsong4 = PlaylistSong.create!(song_id: song17.id, playlist_id: playlist2.id)
playlistsong5 = PlaylistSong.create!(song_id: song16.id, playlist_id: playlist2.id)
playlistsong5 = PlaylistSong.create!(song_id: song15.id, playlist_id: playlist2.id)
playlistsong5 = PlaylistSong.create!(song_id: song6.id, playlist_id: playlist2.id)
playlistsong5 = PlaylistSong.create!(song_id: song1.id, playlist_id: playlist2.id)

playlistsong5 = PlaylistSong.create!(song_id: song2.id, playlist_id: playlist3.id)
playlistsong5 = PlaylistSong.create!(song_id: song4.id, playlist_id: playlist3.id)
playlistsong5 = PlaylistSong.create!(song_id: song5.id, playlist_id: playlist3.id)
playlistsong5 = PlaylistSong.create!(song_id: song19.id, playlist_id: playlist3.id)