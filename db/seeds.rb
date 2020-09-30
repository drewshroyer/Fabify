# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

Artist.destroy_all
Song.destroy_all
Album.destroy_all

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
file6 = URI.open('https://fabify-seeds.s3.us-east-2.amazonaws.com/220px-Kim_Petras_-_Malibu.png')
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
