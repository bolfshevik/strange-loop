const introductionScene = `Rain lashes against the worn canvas of the tent. A solitary lantern swings like a pendulum over the entrance, casting erratic shadows across the fabric. They twist and writhe in throes of increasingly grotesque passion as you approach. You part the beaded curtains and step inside. Warmth and light engulf your senses. The air is heavy with the musk of leather-bound books and stacks of old parchment; the sweet haze of blue smoke; the bundles of sage, cedar, and lavender that decorate the room. Underneath the pungent spices, you detect a faint note of decay. 

“My atheling!” Ludmilla crows, delighted. She is lounging behind a table strewn with gleaming trinkets and ornate Spira cards, draped in graceful scarves of deep crimson and indigo. Her bracelets chime, softly, like church-bells, whenever she moves. Her eyes are amber-bright. “You’ve returned to me. I thought you might not, this round.” 

She takes a quick, business-like drag off her cigarette. 

“Very well. You still have a ways to go, first. And we should really perform the ritual beforehand. But I’m a soft touch for a lost cause.” 

She watches you sit down without blinking; her hair smells strongly of anise and cloves. 

“Let’s try this again, shall we?”`;
const introductionImage = "Final Version of Entrance Image.png"

const scenePairs = [
    {
        escape: `“I sense carnage. I see—an operating theatre. 𝑌𝑒𝑠. When the Sun sleeps in the House of the Moon, you will file into the operating theatre and take your seat. In the stands, you will look down at a man in a bloodstained lab coat. 𝑇ℎ𝑒 ℎ𝑢𝑚𝑎𝑛 ℎ𝑒𝑎𝑟𝑡, Dr. Bellweather prosects, 𝑠𝑖𝑛𝑔𝑠 𝑙𝑖𝑓𝑒 𝑡ℎ𝑟𝑜𝑢𝑔ℎ 𝑜𝑢𝑟 𝑣𝑒𝑖𝑛𝑠, 𝑎𝑛𝑑 ℎ𝑒𝑙𝑝𝑠 𝑢𝑠 𝑡𝑜 𝑏𝑒𝑎𝑟 𝑡ℎ𝑒 𝑠𝑡𝑟𝑒𝑠𝑠 𝑜𝑓 𝑏𝑙𝑜𝑜𝑑’𝑠 𝑑𝑒𝑚𝑎𝑛𝑑𝑠. 𝐴𝑛𝑑 𝑦𝑒𝑡! 𝐿𝑖𝑘𝑒 𝑐𝑙𝑜𝑐𝑘𝑤𝑜𝑟𝑘, ℎ𝑜𝑤 𝑞𝑢𝑖𝑐𝑘𝑙𝑦,ℎ𝑜𝑤 𝑝𝑟𝑒𝑑𝑖𝑐𝑡𝑎𝑏𝑙𝑦, 𝑖𝑡 𝑤𝑒𝑎𝑟𝑠 𝑜𝑢𝑡 𝑜𝑣𝑒𝑟 𝑡𝑖𝑚𝑒. Between them, a terrified man, his flushed-drink face, his hideous lime-raw knuckles… 
        
        Low, nervous voices. The rustle of bodies confined to narrow benches. Dr. Bellweather—handsome and formidable; formidably handsome, even—meets the eyes of the audience. 𝑇𝑖𝑚𝑒 𝑚𝑒! He bellows. Next to you, the detective will take out a cracked pocket-watch. And then Dr. Bellweather will raise his arm. And then he will bring down his arm. Blood breaks free of its bindings—a cool, gray day—a day like any other. 𝐷𝑜 𝑦𝑜𝑢 𝑠𝑒𝑒 𝑡ℎ𝑎𝑡? The detective’s breath licks your earlobe. 𝐷𝑜𝑒𝑠 𝑡ℎ𝑎𝑡 𝑙𝑜𝑜𝑘 𝑟𝑖𝑔ℎ𝑡 𝑡𝑜 𝑦𝑜𝑢? A man sawing into a delinquent leg. Or—there? In the thigh-meat—yes I do, yes I 𝑑𝑜 see it!—a crown of brilliant red hair, wriggling, squirming, pushing, yearning for escape… 
        
        Afterwards, you and the other students gather in the lab, your scalpels gripped tightly in your fists; that night, or another night, you'll dream of arteries, a map unfolding, discuring countless paths worn down from use…”`,
        penance: `“I see… you, bathed in moonlight. Stumbling through the rivulose halls of the Penrose Library for the Pursuit of the Invisible Sciences. 
        
        I assume invisible, here, refers to the internal workings of the body? Your standard internal equipment; veins, arteries, lungs, fascia, aether, and so on? … 
        
       Hm. Of course, of course.
        
        Where was I? Don’t tell me. Don’t tell 𝑚𝑒. 
        
        Ah! There you are: right in my mind’s eye, which is sometimes recorded, in sacred texts, by learned men, as “the mind’s forge.” 
        
        Books whisper your name as you pass. Their pages rustle, disturbed by strange hands. You descend into the archives, where bronze sconces secrete oily light, where digits discolored by cadaveric tinctures trace serpentine scripts in the hopes of unravelling the arcane chronologies of circulation, anatomy, cosmos… 
        
        𝑃𝑎𝑡𝑖𝑒𝑛𝑡 ℎ𝑖𝑠𝑡𝑜𝑟𝑖𝑒𝑠, Dr. Holloway informs you, as you sign your name into his record-book, ℎ𝑜𝑙𝑑 𝑑𝑒𝑡𝑎𝑖𝑙𝑒𝑑 𝑎𝑐𝑐𝑜𝑢𝑛𝑡𝑠 𝑜𝑓 𝑝𝑟𝑒𝑣𝑖𝑜𝑢𝑠 𝑖𝑛𝑗𝑢𝑟𝑖𝑒𝑠, 𝑡𝑟𝑒𝑎𝑡𝑚𝑒𝑛𝑡𝑠 𝑔𝑖𝑣𝑒𝑛, 𝑎𝑛𝑑 𝑜𝑢𝑡𝑐𝑜𝑚𝑒𝑠 𝑤𝑖𝑡𝑛𝑒𝑠𝑠𝑒𝑑. 𝐸𝑎𝑐ℎ 𝑜𝑛𝑒 𝑡𝑒𝑙𝑙𝑠 𝑎 𝑠𝑡𝑜𝑟𝑦 𝑜𝑓 𝑣𝑖𝑐𝑡𝑜𝑟𝑦 𝑜𝑟 𝑙𝑜𝑠𝑠, 𝑡𝑟𝑖𝑢𝑚𝑝ℎ 𝑜𝑟 𝑑𝑒𝑓𝑒𝑎𝑡. 
        
        One file will fester in the back of your mind.
        
        'Patient’s exact words: ‘There was a door in my eye. I opened it.’ Psychiatric evaluation deemed not only prudent, but critical...'”`,
        image: "New House of the Moon Image.png"
    },
    {
        escape: `“Four of Serpilions. And reversed! This is not your night. No, no, all is not lost. The servitors can bring bittersweet memories or awkward interactions in crowded train-cars, nightmares or small-talk, existential crises or coerced agreements. It all depends. Now, where did I put my aconite blossoms? And that damned bowl of sanctified rain-water? 
        
        … Stir with red salt… and wait for the petals to fade to silver. 
        
        𝑊𝑒 𝑐𝑎𝑙𝑙 𝑢𝑝𝑜𝑛 𝑡ℎ𝑒 𝑦𝑜𝑢𝑛𝑔𝑒𝑟 𝑠𝑖𝑠𝑡𝑒𝑟𝑠 𝑜𝑓 𝑃𝑟𝑖𝑛𝑐𝑒 𝑀𝑒𝑑𝑖𝑎𝑡𝑒𝑡ℎ, 𝑡ℎ𝑒 𝐿𝑒𝑓𝑡-𝐻𝑎𝑛𝑑, 𝑤ℎ𝑜 𝑑𝑖𝑠𝑎𝑟𝑡𝑖𝑐𝑢𝑙𝑎𝑡𝑒𝑑 𝑡ℎ𝑒 𝑓𝑜𝑟𝑡𝑖𝑒𝑡ℎ 𝑣𝑒𝑖𝑙 𝑎𝑡 𝑡ℎ𝑒 𝑏𝑒ℎ𝑒𝑠𝑡 𝑜𝑓 𝑡ℎ𝑖𝑟𝑡𝑒𝑒𝑛 𝑙𝑜𝑠𝑡 𝑜𝑟𝑝ℎ𝑎𝑛-𝑠ℎ𝑒𝑝ℎ𝑒𝑟𝑑𝑠. 𝐴𝑡𝑡𝑒𝑛𝑑 𝑡𝑜 𝑜𝑢𝑟 𝑝𝑙𝑒𝑎. 𝑅𝑒𝑓𝑙𝑒𝑐𝑡 𝑦𝑜𝑢𝑟 𝑖𝑚𝑎𝑔𝑒 𝑤𝑖𝑡ℎ𝑖𝑛 𝑠ℎ𝑖𝑓𝑡𝑖𝑛𝑔 𝑤𝑎𝑡𝑒𝑟𝑠…
        
        Do you hear that? 𝐿𝑖𝑠𝑡𝑒𝑛. How delightful! Fond memories of childhood: the distant drumming of witch-wings, of vardzaks gallavanting upon the wind. I see a mirror-vendor, hawking his wares in the shadow of an olive tree. Closer, he beckons you. Closer. Closer, still! Now, close your eyes. Now, open them. Instead of your own reflection, what will you see? Who will you see? There is a scar. There is an awareness of absence. She is unpredictable—adulterous, enigmatic. She copies your movements in an exaggerated, mocking manner. She will cover her missing eye, and the chaos in the marketplace will shatter the glass, and the vendor, an unsympathetic man, hardened by a lifetime in sales, will charge you eight dinara for emotional, physical, and philosophical damages…`, 
        penance: `“Four of Serpilions. The handmaidens, or Death’s sisters. They are associated with aconite, graveyards, drums, silver, and estuaries. They are the keepers of memory and the ensurers of vengeance. Terrible table-manners, the whole lot of them. Hand me that bowl. Watch how the petals bleed silver around their edges. One of many signets of the court of the domovoi. In the court, roses and thorns and spiders run rampant. You will try to approach this day as you would have before: star-gazing at night, attending and assisting with surgical operations in the morning.  A spectral form—a woman with a moth for a face—a row of shrieking, squirming crows on the lip of a turret. A plea for justice. You will follow a woman’s familiar voice down the winding passageways of memory, through abandoned, elaborate feast-halls, because her song reminds you of someone you used to love. When twilight falls, you will return home; you will barricade the doors of your flat, but Natalia will still emerge from the place behind the mirror, her skin as translucent as frost. Her intestines pulse and writhe in her glass-corpse like dark jewels, and she has artfully draped a string of black pearls around her waist. Three hundred and sixty-five of them, she will remark. (A bit cryptic, isn’t she? Not to my taste—but then, you men of science will have your fascinations…) One for each and every second you held captive my neck. You owe me that much, don\'t you: царь? Or shall I finally take my pound of flesh? Personally, I\'ve often wondered if the goals of the moths are intertwined with the quests of the sky-court—in other words, with consumption. It was, after all, the method early querents used to navigate the wounds in the skin of the world. But their visions were inaccurate and fleeting, until they learned how to see without sight. Take that as you will.“`,
        image: "New Four of Serpilions.png"
    }, 
    {
        escape: `“You will embark upon a surreal collection of quests. No, rites. No! Rituals. There—can you see? Look closer. Closer. That’s it. Closer. You. Whispering obscenely false apologies into a crow’s jagged-open. You. Burying your tongue in the black dirt of an ancient crossroads beneath blue midnight. You. Bathing in a clawfoot bathtub filled with flaking bloodstains and vital black bile. You will tell yourself different stories with each new attempt, warm your palms by the threadbarren hearth of self-dishonesty with every subsequent failure. Seven days—what? 
        
        Yes. 
        
        Yes, I said seven. Would you kindly—Erinyes. 𝐸𝑟𝑖𝑛𝑦𝑒𝑠. I’m not doing this with you right now. 
        
        Where was I? Oh, yes. Another night, the same night—what does it matter?—you will belap your body in radiant gold, cradling an Aeolian lyre like an infant in your trembling arms, the pearlescent strings sewn from ligaments of wolf-guts. You will play under the eavesdropping moon. A haunting tune will ripple outwards from your fingertips, enticing the wind to dance to the fervor of your lunatic beat. As the melody ascends, echoes of time dapple the air, light bleeding through the cracks. Alone, and not alone, you will chant under the waning crescent: 𝑎𝑠 𝑠𝑎𝑙𝑡 𝑚𝑒𝑒𝑡𝑠 𝑡ℎ𝑒 𝑚𝑜𝑢𝑛𝑡𝑎𝑖𝑛, 𝑎𝑠 𝑡ℎ𝑒 𝑡𝑜𝑤𝑒𝑟 𝑏𝑒𝑎𝑡𝑠 𝑜𝑓𝑓 𝑡ℎ𝑒 𝑐𝑜𝑎𝑠𝑡 𝑎𝑛𝑑 𝑟𝑒𝑐𝑒𝑑𝑒𝑠, 𝑎𝑠 𝑀𝑜𝑘𝑜𝑠ℎ𝑎 𝑙𝑖𝑛𝑔𝑒𝑟𝑠, 𝑒𝑣𝑖𝑡𝑒𝑟𝑛𝑎𝑙, 𝑎𝑛𝑐ℎ𝑜𝑟𝑒𝑑 𝑡𝑜 𝑐𝑜ℎ𝑒𝑟𝑒𝑛𝑐𝑒 𝑏𝑦 𝑐ℎ𝑎𝑖𝑛𝑠 𝑢𝑛𝑠𝑒𝑒𝑛… but the climax of the composition—the heart of the ritual—will elude both you and your eager, invisible listener. 
        
        A word of advice, atheling? The moths may offer escape, but they do not bow to the mind-in-despair, nor the conscience devoid of it. Take that as you will.”`, 
        penance: `“You will attend a seance at The Solatium, an opulent adyt of lingering spirits and grief, operated by a compellingly corpulent widow who sometimes calls herself Madame Solostris. Those poor souls cursed by vengeful loved ones claim to feel her silken voice in their dreams. 𝐼’𝑣𝑒 heard that she will wait at the foot of a bereaved lover’s bed and watch them sleep, incisors as sharp as a shrike’s talons; perhaps this is nothing more than catty talk between economic competitors. 
        
        Violet clouds of smoke swirl in the air. Heady fumes of basil and rosemary. Madame Solostris will only begin the ritual when her parlor-room positively hums with desolation. She also requires payment upfront, in deference of the river she will “profess to cross,” with you and eight other initiates. Warily, you proceed to clear the table and interwreathe together protective strands of salt and lavender. Solostris could navigate the abyss with a burnished locket, if she so chose; this time, she opts for a stronger instrument. And rightfully so! Many spirits will be drawn to your desperation: perhaps they can sense your stuttered heartbeat, skittering off the walls of your throat like a startled moth. When Solostris fails to control them, they will unleash flames upon your circle. Even in that smoky, crowded room, one presence stands out, choking your lungs with fleeting memories. Another entranced participant is chanting with fervent intensity, his eyes amber-bright. 𝑇ℎ𝑒 𝑏𝑒𝑡𝑟𝑎𝑦𝑎𝑙. 𝑇ℎ𝑒 𝑝𝑎𝑠𝑠𝑖𝑜𝑛. 𝑇ℎ𝑒 𝑑𝑒𝑠𝑝𝑎𝑖𝑟. 𝑇ℎ𝑒 𝑏𝑒𝑡𝑟𝑎𝑦𝑎𝑙. 𝑇ℎ𝑒 𝑟𝑖𝑡𝑢𝑎𝑙. 𝑇ℎ𝑒 𝑟𝑒𝑏𝑖𝑟𝑡ℎ. 𝑇ℎ𝑒 𝑏𝑒𝑡𝑟𝑎𝑦𝑎𝑙. 𝑇ℎ𝑒 𝑝𝑎𝑙𝑎𝑐𝑒. 𝑇ℎ𝑒 𝑠𝑒𝑣𝑒𝑛-𝑓𝑜𝑙𝑑, 𝑠𝑒𝑣𝑒𝑛-𝑙𝑖𝑚𝑏𝑒𝑑 𝑔𝑎𝑡𝑒…”`,
        image: "The Seven-Skulled Sun.png"
    }, 
    {
        escape: `“The Adiopocere. She remembers what we would obliviate. Whispers in nocturn woods. Jade-tinted canopies. A child’s eye, emboweled in obsidian depths… 
        
        Natalia used to laugh at your cold-blooded, tight-lipped pragmatism. 𝑁𝑜 𝑔𝑜𝑜𝑑 𝑓𝑜𝑟 𝑎 𝑑𝑜𝑐𝑡𝑜𝑟, she would chide. 𝑌𝑜𝑢 𝑟𝑒𝑚𝑖𝑛𝑑 𝑚𝑒 𝑜𝑓 𝑚𝑦 𝑓𝑖𝑟𝑠𝑡 𝑚𝑎𝑛𝑎𝑔𝑒𝑟. 𝑆𝑜 𝑟𝑒𝑡𝑖𝑐𝑒𝑛𝑡! 𝐼𝑡 𝑤𝑎𝑠 𝑙𝑖𝑘𝑒 𝑠𝑢𝑐𝑘𝑖𝑛𝑔 𝑏𝑙𝑜𝑜𝑑 𝑓𝑟𝑜𝑚 𝑎 𝑠𝑡𝑜𝑛𝑒, 𝑔𝑒𝑡𝑡𝑖𝑛𝑔 ℎ𝑖𝑚 𝑡𝑜 𝑟𝑒𝑣𝑒𝑎𝑙 𝑎𝑛𝑦 𝑠𝑜𝑟𝑑𝑖𝑑 𝑏𝑒ℎ𝑎𝑣𝑖𝑜𝑟 𝑓𝑟𝑜𝑚 ℎ𝑖𝑠 𝑝𝑟𝑒𝑣𝑖𝑜𝑢𝑠 𝑙𝑖𝑣𝑒𝑠. 𝐴𝑛𝑑 𝑎𝑙𝑙 𝑡ℎ𝑒 𝑔𝑖𝑟𝑙𝑠 𝑙𝑜𝑣𝑒𝑑 𝑖𝑡, 𝑜𝑓 𝑐𝑜𝑢𝑟𝑠𝑒. 𝑅𝑒𝑠𝑡𝑟𝑎𝑖𝑛𝑡 𝑖𝑛 𝑎 𝑚𝑎𝑛 𝑐𝑎𝑛 𝑏𝑒 𝑠𝑜… 𝑡𝑎𝑛𝑡𝑎𝑙𝑖𝑧𝑖𝑛𝑔. 𝑂𝑟 𝑤𝑎𝑠 𝑖𝑡 ℎ𝑖𝑠 𝑠𝑒𝑐𝑟𝑒𝑐𝑦? 𝐻𝑒 𝑤𝑎𝑠 𝑛𝑒𝑣𝑒𝑟 ℎ𝑎𝑛𝑑𝑠𝑜𝑚𝑒, 𝑀𝑟. 𝐻𝑜𝑏𝑠𝑜𝑛—𝑏𝑖𝑔, 𝑐ℎ𝑖𝑝𝑚𝑢𝑛𝑘 𝑡𝑒𝑒𝑡ℎ; 𝑔𝑎𝑝𝑖𝑛𝑔, 𝑔ℎ𝑜𝑠𝑡-𝑡𝑜𝑤𝑛 𝑒𝑦𝑒𝑠—𝑏𝑢𝑡 𝑤ℎ𝑒𝑛 ℎ𝑒 𝑑𝑖𝑑 𝑠𝑝𝑒𝑎𝑘, ℎ𝑒 𝑤𝑎𝑠𝑡𝑒𝑑 𝑛𝑜 𝑤𝑜𝑟𝑑𝑠. 𝑁𝑜𝑡 𝑙𝑖𝑘𝑒 𝑤𝑒 𝑑𝑜, 𝑜𝑛 𝑡ℎ𝑒 𝑡𝑟𝑎𝑖𝑛𝑠, 𝑜𝑟 𝑖𝑛 𝑠ℎ𝑜𝑝𝑠, 𝑜𝑟 𝑎𝑡 𝑏𝑜𝑎𝑟𝑑𝑖𝑛𝑔-ℎ𝑜𝑢𝑠𝑒𝑠. 𝑀𝑒𝑎𝑛𝑖𝑛𝑔𝑙𝑒𝑠𝑠 𝑐𝑜𝑛𝑣𝑒𝑟𝑠𝑎𝑡𝑖𝑜𝑛𝑠. 𝑆𝑖𝑙𝑙𝑦 𝑐𝑒𝑟𝑒𝑚𝑜𝑛𝑖𝑒𝑠!
        Here, she would shrug, or perhaps wince. 𝐻𝑖𝑠 𝑡𝑤𝑖𝑛 𝑠𝑖𝑠𝑡𝑒𝑟 𝑚𝑢𝑟𝑑𝑒𝑟𝑒𝑑 ℎ𝑖𝑚 𝑖𝑛 𝑎 𝑐𝑎𝑓𝑒 𝑖𝑛 𝑆𝑜𝑟𝑎𝑡𝑢𝑙, 𝑎 𝑑𝑒𝑐𝑎𝑑𝑒 𝑏𝑎𝑐𝑘... 𝐻𝑒 𝑟𝑎𝑖𝑠𝑒𝑑 𝑡𝑢𝑟𝑡𝑙𝑒𝑑𝑜𝑣𝑒𝑠. 𝑇ℎ𝑒𝑦 𝑤𝑒𝑟𝑒 𝑎𝑙𝑤𝑎𝑦𝑠 𝑠𝑘𝑖𝑡𝑡𝑒𝑟𝑖𝑛𝑔 𝑢𝑝 𝑎𝑛𝑑 𝑑𝑜𝑤𝑛 ℎ𝑖𝑠 𝑎𝑟𝑚𝑠. 𝐴 𝑠𝑡𝑟𝑎𝑛𝑔𝑒 𝑚𝑎𝑛. 𝑆𝑡𝑖𝑙𝑙, ℎ𝑒 𝑛𝑒𝑣𝑒𝑟 𝑠𝑡𝑜𝑙𝑒 𝑓𝑟𝑜𝑚 𝑚𝑒 𝑜𝑟 𝑡ℎ𝑒 𝑜𝑡ℎ𝑒𝑟 𝑔𝑖𝑟𝑙𝑠, 𝑤ℎ𝑖𝑐ℎ 𝑖𝑠 𝑚𝑜𝑟𝑒 𝑡ℎ𝑎𝑛 𝐼 𝑐𝑎𝑛 𝑠𝑎𝑦 𝑓𝑜𝑟 𝑚𝑦 𝑐𝑢𝑟𝑟𝑒𝑛𝑡 𝑒𝑚𝑝𝑙𝑜𝑦𝑒𝑟𝑠.
        She plucked the lit cigarette from your fingers and brought it to her small, rose-petal lips with a precise flourish. You knew that she had practiced that gesture a thousand times, in a thousand mirrors, but it made no difference, did not change how strongly you felt when she winked at you, her face hidden behind a veil of blue, sweet-smelling smoke. Part of her was buried in a strange wood, long before flesh and spirit were divided. Sometimes, your memories lead you there—other nights, you spot a lonely wisp of a girl among the trees, or the sharper gleam of her vengeful ghost between their branches. Often, they will take the form of wandering children. Memories, that is. Not ghosts. Did you think that I meant ghosts? Ghosts lack shape, for future reference. 
        
        I'm sorry. Her presence is undeniable, like chains. But remember this, atheling. While you cannot avoid Fate, you can still haggle with it. As my mother used to say: 𝑤ℎ𝑒𝑛 𝑦𝑜𝑢 𝑐𝑎𝑛’𝑡 𝑛𝑒𝑔𝑎𝑡𝑒, 𝑛𝑒𝑔𝑜𝑡𝑖𝑎𝑡𝑒.”`, 
        penance: `“Lined with stinking roses, an ouroburian cesta snarls like a seven-pointed star beneath your feet. If you follow it—heed my immutable caution—a series of sorrow-edged scenes will unfold before you... You will read the details of her life in annals of stained glass… 
        
        Natalia: exchanging burnished bronze with strangers in a bustling marketplace. Natalia: mirroring the guttural cries of anguished alley-cats. Natalia: on a stage, her back arched, a swan nosing for seeds of grain in the dark, damp space between her thighs... Natalia: on tender knees, crouched beneath a swollen yew-stump… 
        
        She liked to sing, didn’t she? Your Natalia. How did her song go? I can almost make it out. 𝑅𝑒𝑐𝑎𝑙𝑙 𝑦𝑒 𝑡ℎ𝑒 𝑐𝑙𝑜𝑐𝑘, 𝑤ℎ𝑖𝑐ℎ 𝑡ℎ𝑒 𝑚𝑖𝑠𝑡𝑟𝑒𝑠𝑠 𝑑𝑜𝑒𝑠 𝑓𝑒𝑒𝑑, 𝑎𝑛𝑑 𝑡ℎ𝑒 𝑞𝑢𝑒𝑠𝑡𝑖𝑛𝑔 𝑘𝑛𝑖𝑔ℎ𝑡-𝑏𝑒𝑎𝑠𝑡, 𝑤𝑖𝑡ℎ ℎ𝑖𝑠 𝑣𝑜𝑤 𝑎𝑙𝑙 𝑠𝑤𝑜𝑟𝑛 𝑓𝑟𝑒𝑒. 𝑊𝑒 𝑚𝑎𝑟𝑐ℎ𝑒𝑑 𝑡𝑜 ℎ𝑒𝑟 𝑑𝑟𝑢𝑚 𝑤𝑖𝑡ℎ 𝑎𝑛𝑜𝑒𝑡ℎ 𝑔𝑙𝑒𝑒. 𝐻𝑒𝑎𝑣𝑒𝑛’𝑠 𝑑𝑖𝑠𝑡𝑎𝑛𝑡 𝑔𝑙𝑒𝑎𝑚, 𝑠𝑡𝑖𝑙𝑙 𝑒𝑙𝑢𝑠𝑖𝑣𝑒 𝑡𝑜 𝑡ℎ𝑒𝑒…
        
        That paradoxical dawn, you found a note on her pillow. Even now, you wonder if you wrote the words yourself. 𝑁𝑜𝑙𝑎𝑣𝑎 𝑖𝑠 𝑚𝑦 𝑟𝑒𝑎𝑙𝑚, it said. 𝑇ℎ𝑒 𝑠𝑜𝑟𝑐𝑒𝑟𝑦 𝑖𝑠 𝑚𝑦 𝑒𝑦𝑒. 𝑇ℎ𝑒 𝑣𝑒𝑛𝑔𝑒𝑓𝑢𝑙 𝑠𝑒𝑟𝑝𝑖𝑙𝑖𝑜𝑛𝑠 𝑎𝑟𝑒 𝑚𝑦 𝑣𝑜𝑖𝑐𝑒. 𝐿𝑜𝑣𝑒, 𝑁𝑎𝑡𝑎𝑙𝑖𝑎.
        You don't remember? … Has it been that long?”`, 
        image: "The Adiopocere.png"
    }, 
    {
        escape: `“When the Time-Mistress unlocks the Carnelian Gate and buries the severed limbs of the Seven-Skulled in the Desert of Salt, you will stir awake in an alleyway next to a butcher shop. Your eyes will leak with unfamiliar faces; your memories run together like watercolors. The stain—the damned stain—the moment which is neither past nor future but eternally, inescapably present—has returned to you. From far away. It has traveled a treacherous distance to find you. Your breath will race—your pulse will whirl. You will, 𝑎𝑔𝑎𝑖𝑛𝑠𝑡 your will, remember that which you would slaughter on an altar to forget. But the serpilions have scented ripe prey within you, and nothing can deter their talon-beaks, their grasping hungers. If only you had kept your impulses buried! Well, you were never insulated—indoctrinated?—like we were. There are torments beyond death, atheling. Who can blame you for mistakes you could not have known you were making? Cold and uncertain, grim as charcoal, raw as wounds. The inevitable grinding stalks the streets that neither rituals nor penance can change… 
        
        But perhaps there are other options.”`, 
        penance: `“There are worlds beyond truth. Elegant and flowing, decadent as stolen gold, smooth as quartz-sherd. You will wake in the luxurious and unfamiliar embrace of a close friend’s old school-chum’s sister’s second husband’s estate. Your temples will throb with the beat of last night’s celebration: your heart will sink like a corpse to the bottom of a lake. The spot—the damned spot—the spot which has stolen both joy and sorrow—has come to blur your vision again. Your hands tremble as you button your coat; your steps falter as you cross the threshold and pass back into the world. Your eyes leak yesterday’s gin...
        
        Guilt has left its mark within you, and only death or disarticulation can erase it. This is not the answer that you seek, atheling, but it is the one that you deserve: An irrefutable dark stumbles blindly through vast palaces infested by secrets and moths. It cannot be destroyed, and it cannot be evaded. When it finds you, it will offer you two endings: one of smoke, and one of fire. Do not be fooled. These are the same ending. You must traverse many pitfalls, and look out for snakes in masks—”`,
        image: "The Carnelian Gate.png"
    }, 
    {
        escape: `“𝑇𝑟𝑎𝑣𝑒𝑙 𝑡ℎ𝑟𝑜𝑢𝑔ℎ 𝑡ℎ𝑒 ℎ𝑒𝑎𝑟𝑡 𝑜𝑓 𝑡ℎ𝑒 𝑐𝑖𝑡𝑦, 𝑤ℎ𝑒𝑟𝑒 𝑐𝑜𝑏𝑏𝑙𝑒𝑠𝑡𝑜𝑛𝑒 𝑝𝑎𝑡ℎ𝑤𝑎𝑦𝑠 𝑚𝑒𝑒𝑡 𝑠ℎ𝑎𝑑𝑜𝑤𝑒𝑑 𝑠𝑝𝑖𝑟𝑒. 𝑆𝑐𝑜𝑢𝑟 𝑡ℎ𝑒 𝑎𝑛𝑐𝑖𝑒𝑛𝑡 𝑡𝑒𝑥𝑡𝑠 𝑓𝑜𝑟 𝑔𝑢𝑖𝑑𝑎𝑛𝑐𝑒. You will come to St. Malic’s. A crumbling edifice of ivory and coral dedicated to the Left-Handed Prince, where the guilty go to shed their sins, partake in the Sacrament of Penance, and steer clear of the repercussions of their wrongdoings. Mostly clear. 
        
        The secrets you will learn in her echoing corridors are silver-teared and sanctified, veiled admissions of guilt delivered in agonal tones. You will scarcely recognize the nave, even if you have knelt at its altar before; this particular order of priests hoards confessions like jealous dragons. 
        
        Inside the booth, it is warm and dark, like a cocoon. Through the divider, the priest’s eyes glow like burning embers. Driven to desperation, painfully aware of your predicament and its recursive nature, you will confess everything: the argument, the revelation of physical, emotional, and philosophical infidelities, the night that ended all other nights. The priest will answer you with ravaged lungs, in a voice that reminds you of rivers and serpents. 𝐴 𝑐𝑢𝑟𝑠𝑒 ℎ𝑎𝑠 𝑓𝑜𝑢𝑛𝑑 𝑖𝑡𝑠 𝑤𝑎𝑦 𝑖𝑛𝑡𝑜 𝑦𝑜𝑢𝑟 𝑠𝑜𝑢𝑙. 𝑌𝑜𝑢 ℎ𝑎𝑣𝑒 𝑡𝑤𝑜 𝑜𝑝𝑡𝑖𝑜𝑛𝑠: 𝑡ℎ𝑒 𝑚𝑒𝑟𝑐𝑦 𝑜𝑓 𝑡ℎ𝑒 𝑚𝑜𝑡ℎ𝑠, 𝑜𝑟 𝑑𝑒𝑚𝑖𝑚𝑜𝑛𝑑𝑒 𝑖𝑛𝑡𝑒𝑟𝑣𝑒𝑛𝑡𝑖𝑜𝑛. 𝐼𝑓 𝑦𝑜𝑢 𝑤𝑎𝑛𝑡 𝑡ℎ𝑒 𝑚𝑜𝑡ℎ𝑠, 𝑦𝑜𝑢 𝑤𝑖𝑙𝑙 ℎ𝑎𝑣𝑒 𝑡𝑜 𝑏𝑙𝑒𝑒𝑑 𝑓𝑜𝑟 𝑖𝑡. 𝑌𝑜𝑢𝑟 𝑠𝑡𝑢𝑑𝑖𝑒𝑠 𝑤𝑖𝑙𝑙 𝑏𝑒𝑐𝑜𝑚𝑒 𝑑𝑖𝑠𝑡𝑎𝑛𝑡 𝑚𝑒𝑚𝑜𝑟𝑖𝑒𝑠: 𝑠𝑖𝑙𝑙𝑦 𝑐𝑒𝑟𝑒𝑚𝑜𝑛𝑖𝑒𝑠 𝑓𝑜𝑟 𝑠𝑚𝑎𝑙𝑙𝑒𝑟 𝑏𝑒𝑖𝑛𝑔𝑠, 𝑚𝑒𝑎𝑛𝑖𝑛𝑔𝑙𝑒𝑠𝑠 𝑟𝑖𝑡𝑢𝑎𝑙𝑠, 𝑓𝑎𝑙𝑠𝑒 𝑟𝑒𝑎𝑠𝑠𝑢𝑟𝑎𝑛𝑐𝑒𝑠. 𝑁𝑜, 𝑦𝑜𝑢 𝑤𝑖𝑙𝑙 𝑛𝑒𝑣𝑒𝑟 𝑟𝑒𝑡𝑢𝑟𝑛 𝑡𝑜 𝑦𝑜𝑢𝑟 𝑜𝑙𝑑 𝑙𝑖𝑓𝑒. 𝐵𝑢𝑡 𝑖𝑓 𝑦𝑜𝑢 𝑓𝑙𝑒𝑒 𝑡𝑜 𝑎 𝑑𝑖𝑓𝑓𝑒𝑟𝑒𝑛𝑡 𝑝𝑎𝑠𝑡, 𝑦𝑜𝑢 𝑤𝑖𝑙𝑙 𝑓𝑜𝑙𝑙𝑜𝑤 𝑖𝑛 𝑡ℎ𝑒 𝑓𝑜𝑜𝑡𝑠𝑡𝑒𝑝𝑠 𝑜𝑓 𝑂𝑟𝑒𝑠𝑡𝑒𝑠, 𝑤ℎ𝑜 𝑤𝑎𝑠 𝑡ℎ𝑒 𝑓𝑖𝑟𝑠𝑡 𝑜𝑓 𝑡ℎ𝑒 𝑑𝑎𝑚𝑛𝑒𝑑 𝑡𝑜 𝑜𝑢𝑡𝑤𝑖𝑡 ℎ𝑖𝑠 𝑠ℎ𝑎𝑐𝑘𝑙𝑒𝑠.

        
        𝐿𝑖𝑠𝑡𝑒𝑛 𝑐𝑙𝑜𝑠𝑒𝑙𝑦. 𝐼 𝑤𝑖𝑙𝑙 𝑛𝑜𝑡 𝑟𝑒𝑝𝑒𝑎𝑡 𝑚𝑦𝑠𝑒𝑙𝑓. 𝐹𝑖𝑟𝑠𝑡, 𝑦𝑜𝑢 𝑚𝑢𝑠𝑡 𝑠𝑡𝑒𝑎𝑙 𝑡ℎ𝑟𝑒𝑒 𝑠𝑒𝑐𝑟𝑒𝑡𝑠 𝑓𝑟𝑜𝑚 𝑡ℎ𝑒 𝑟𝑒𝑎𝑙𝑚 𝑜𝑓 𝑡ℎ𝑒 𝑤𝑒𝑒𝑝𝑖𝑛𝑔 𝑠𝑡𝑎𝑟𝑠. 𝑆𝑒𝑐𝑜𝑛𝑑, 𝑡ℎ𝑒𝑟𝑒 𝑖𝑠 𝑎 𝑚𝑜𝑛𝑎𝑠𝑡𝑒𝑟𝑦—”`,
        penance: `“When the star of Mediateth seeks shelter in the Palace of the Dawn-Maiden, you will don a cloak fringed with cobwebs and dust. A secret will weight heavy in your chest: you know that Mokosha requires a tangible confession. Are you capable of giving one? Your detective will saunter towards you, his fedora cocked low, his suit-jacket tossed, deliciously casually, over his shoulder. The moonlight—in my opinion as a professional, of course; that is, my 𝑝𝑟𝑜𝑓𝑒𝑠𝑠𝑖𝑜𝑛𝑎𝑙 opinion—will greatly accentuate the subtly muscular curvature of his silhouette. But you will have to judge the aesthetics of the scene for yourself, I suppose… 
        
        His figure will waver like a mirage in the serpentine dark. You wonder how you arrived there—if this meeting was truly premeditated—when you agreed to find him by the dappled banks of the Amorous Ford at witching-hour, if you agreed at all. You hesitate, so the detective speaks first, and the detective speaks at length: about time and its tricks, cycles of growth and decay, the inevitable grinding of Mokosha’s knife against the whetstone of the world. 𝐻𝑜𝑤 𝑖𝑠 𝑖𝑡 𝑡ℎ𝑎𝑡 𝐼 𝑐𝑎𝑛 𝑡𝑟𝑎𝑣𝑒𝑙 𝑏𝑒𝑡𝑤𝑒𝑒𝑛 𝑡ℎ𝑒 𝑣𝑒𝑖𝑙𝑠? He asks you, although you still have not spoken. 𝐼 𝑑𝑖𝑑𝑛’𝑡 𝑙𝑒𝑎𝑟𝑛 𝑡ℎ𝑒 𝑡𝑒𝑐ℎ𝑛𝑖𝑞𝑢𝑒 𝑜𝑛 𝑚𝑦 𝑜𝑤𝑛. 𝐼’𝑚 𝑛𝑜𝑡 𝑎𝑠ℎ𝑎𝑚𝑒𝑑 𝑜𝑓 𝑤ℎ𝑎𝑡 𝐼 𝑑𝑖𝑑 𝑡𝑜 𝑙𝑒𝑎𝑣𝑒 𝑡ℎ𝑎𝑡 𝑝𝑙𝑎𝑐𝑒. 𝐵𝑢𝑡 𝑤𝑒’𝑟𝑒 𝑡𝑎𝑙𝑘𝑖𝑛𝑔 𝑎𝑏𝑜𝑢𝑡 𝑦𝑜𝑢—𝑟𝑒𝑚𝑒𝑚𝑏𝑒𝑟?
        His grin is charm and teeth. Waves of understanding wash over you. Chronological knots, hissing and wrestling like furious, seven-faced snakes. Lingering doubts. Memories of knives and arguments in vivid grayscale. Anchors lashed to the tongues of dragons… 
        
        Shadows pool around the detective’s feet. White mist hangs like an axe over the frozen river. In this moment, to you, he will look as unwavering as stone... 
         
        𝐻𝑒𝑟𝑒, the detective murmurs, before he disappears into the fog. 𝑇𝑖𝑚𝑒 𝑏𝑒ℎ𝑎𝑣𝑒𝑠 𝑑𝑖𝑓𝑓𝑒𝑟𝑒𝑛𝑡𝑙𝑦 𝑎𝑟𝑜𝑢𝑛𝑑 𝑦𝑜𝑢. 𝑀𝑒, 𝑡𝑜𝑜. 𝑇ℎ𝑖𝑠 𝑚𝑖𝑔ℎ𝑡 ℎ𝑒𝑙𝑝.
        It is a cracked pocket-watch with hands that tick neither correctly (in the direction of the future) nor backwards (in the direction of the past). Someone has painted the face to resemble a white tiger’s toothy visage, and the glass is warm to the touch.”`,
        image: "Prince Mediateth.png"
    }, 
    {
        escape: `“The serpilions are notoriously unforgiving, but they permit their inmates, occasionally, to wander in the forest of fantastiques, where each fruit swells with untold secrets, where the lichways writhe in endless loops, where the wind frictions the soul. In a dream, you will trample the Underfoot, and the rustle of the leaves will ripple outwards through time, the haunting echoes of the incidental creations of a glowing volve, a life erratically rewound, a scream unsilenced. 𝐼𝑔𝑛𝑒𝑎𝑙-𝑎𝑚𝑏𝑒𝑟 𝑤𝑟𝑒𝑠𝑡𝑙𝑒𝑠 𝑤𝑖𝑡ℎ 𝑣𝑒𝑙𝑣𝑒𝑡-𝑚𝑒𝑠𝑜𝑛𝑜𝑥𝑖𝑎. Here, there is neither dusk nor dawn, only epoches of twilight temporized and indesinent night. Glass-crabs mourn like banshees under the moon’s crumbling ravelin, and the stars pulsate with a ghastly radiance. Your eyes will leak dawn, but it will not sting. Here, you may glimpse her youth through roseate curtains, donning masks of rouge and despair, humming lullabies from forgotten days. Strangers pass, leaving traces of pity and disdain in their wake. Unrelenting, she pursues restless desires: sunrise, love, redemption, sanctuary. A new twilight. The cycle endures—lingers—𝑡ℎ𝑒 𝑠𝑜𝑓𝑡 𝑑𝑟𝑖𝑧𝑧𝑙𝑒 𝑡ℎ𝑎𝑡 𝑓𝑎𝑙𝑙𝑠 𝑤ℎ𝑒𝑛 𝑡ℎ𝑒 𝑚𝑜𝑜𝑛 ℎ𝑖𝑑𝑒𝑠 𝑖𝑡𝑠 𝑓𝑎𝑐𝑒. 𝑇ℎ𝑒 𝑠𝑢𝑡ℎ𝑒𝑟𝑠 𝑜𝑓 𝑎𝑙𝑙𝑒𝑦𝑤𝑎𝑦𝑠. 𝑇ℎ𝑒 𝑠ℎ𝑎𝑑𝑜𝑤𝑠 𝑡ℎ𝑎𝑡 𝑡𝑜𝑛𝑔𝑢𝑒 ℎ𝑒𝑟 𝑒𝑦𝑒-𝑙𝑎𝑐𝑘 𝑖𝑛 𝑙𝑎𝑚𝑝𝑙𝑖𝑔ℎ𝑡. 𝑇ℎ𝑒 𝑠𝑜𝑓𝑡 𝑑𝑟𝑖𝑧𝑧𝑙𝑒 𝑤ℎ𝑒𝑟𝑒 𝑡ℎ𝑒 𝑚𝑜𝑜𝑛 ℎ𝑖𝑑𝑒𝑠. 𝑇ℎ𝑒 𝑠𝑢𝑡𝑢𝑟𝑒𝑠 𝑜𝑓 𝑎𝑙𝑙𝑒𝑦𝑤𝑎𝑦𝑠. 𝑆ℎ𝑎𝑑𝑜𝑤𝑠, 𝑑𝑎𝑛𝑐𝑖𝑛𝑔 𝑖𝑛 𝑙𝑎𝑚𝑝𝑙𝑖𝑔ℎ𝑡.
        Escape surges like a thunderstorm in her chest. When she sings to the stars, alone in the woods that she knew from childhood, the melody is thick with longing. Follow the parade of shades into a fog-covered abyss; follow them down into the porous tunnels of the divine plexus. Asemia will stitch shut your mouth so that you may learn the tongue of silence. Your voice will fade: you will feel chills. Her sisters will bind the arteries of your conscience: you will know horror. Guilt will retreat to the foundational fissure of your being: the one in the crux of your belly-button, where the first innocence was lost, where the Unmade King first learnt the treachery of scribes and spiders…”`, 
        penance: `“𝑇ℎ𝑒 𝑒𝑦𝑒'𝑠 𝑡ℎ𝑟𝑒𝑒𝑓𝑜𝑙𝑑 𝑓𝑢𝑛𝑐𝑡𝑖𝑜𝑛, Dr.  Bellweather explains, 𝑖𝑠 𝑡𝑜 𝑟𝑒𝑎𝑐𝑡 𝑞𝑢𝑖𝑐𝑘𝑙𝑦 𝑡𝑜 𝑙𝑖𝑔ℎ𝑡, 𝑡𝑜 𝑚𝑜𝑣𝑒 𝑤𝑖𝑡ℎ 𝑝𝑟𝑒𝑐𝑖𝑠𝑖𝑜𝑛, 𝑎𝑛𝑑 𝑡𝑜 𝑓𝑜𝑐𝑢𝑠 𝑤𝑖𝑡ℎ 𝑖𝑚𝑝𝑒𝑐𝑐𝑎𝑏𝑙𝑒 𝑎𝑐𝑐𝑢𝑟𝑎𝑐𝑦. 𝐴𝑛𝑑 𝑦𝑒𝑡—𝑜𝑛𝑒 𝑔𝑙𝑎𝑛𝑐𝑒 𝑎𝑡 𝑡ℎ𝑖𝑠 𝑙𝑒𝑐𝑡𝑢𝑟𝑒 ℎ𝑎𝑙𝑙, 𝑤𝑖𝑡ℎ 𝑖𝑡𝑠 𝑠ℎ𝑒𝑒𝑟 𝑎𝑏𝑢𝑛𝑑𝑎𝑛𝑐𝑒 𝑜𝑓 𝑠𝑝𝑒𝑐𝑡𝑎𝑐𝑙𝑒𝑠, 𝑠ℎ𝑜𝑢𝑙𝑑 𝑟𝑒𝑎𝑓𝑓𝑖𝑟𝑚 𝑖𝑡𝑠 𝑚𝑎𝑛𝑦 𝑣𝑢𝑙𝑛𝑒𝑟𝑎𝑏𝑖𝑙𝑖𝑡𝑖𝑒𝑠!
        
        Overhead lights cast long, eerie shadows across a shifting sea of students, hunched, scribbling, over their notes. When you leave, blinking your way back into the world, your mind cannot stop replaying the slide of an exposed retina. The swift adjustments from light to dark, so much like a caged bird, enigmatic and incoherent and fluttering… 
        
        Now, a narrow street—a butcher-shop—the room above it. You will unlock the water-stained door, and your apartment will emerge, cluttered and empty, disheveled with dark. There will be a half-melted candle on the vargueno in the corner of the room, as there always is. You will light it with your last match, fished out of a crushed emerald matchbox, courtesy of your local pub. How often do you dream of fire? Of candlelight? There are shadows on the wall that you will beg yourself not to recognize. One reaches for the other, as if welcoming a romantic embrace. One raises its fist.”`,
        image: "Asemia.png"
    }, 
  ];
  
// Counters for Escape and Penance scenes
let escapeCount = 0;
let penanceCount = 0;
let currentScene = 0;
let sceneType = 'intro';

// Define the ending scenes
const escapeEnding = "When the reading is done, you can no longer tell what is real and what is fantasy. Ludmilla is real, you believe. The silver pendant around her neck, slyly tucked between layers of chiffon and silk, is real. The sleeting of rain against the walls of the tent. 𝐿𝑖𝑘𝑒 𝑚𝑜𝑡ℎ-𝑤𝑖𝑛𝑔𝑠, Ludmilla chuckles. 𝑂𝑟 𝑎𝑡 𝑙𝑒𝑎𝑠𝑡 𝐼’𝑣𝑒 𝑎𝑙𝑤𝑎𝑦𝑠 𝑡ℎ𝑜𝑢𝑔ℎ𝑡 𝑠𝑜. She returns the detective’s watch; she refuses your meager offer of payment. 𝑁𝑜𝑤, she urges, pushing you gently back towards the world. 𝐵𝑒𝑓𝑜𝑟𝑒 𝑠ℎ𝑒 𝑐𝑎𝑡𝑐ℎ𝑒𝑠 𝑜𝑛. 𝐴𝑛𝑑 𝑠ℎ𝑒 𝑤𝑖𝑙𝑙 𝑐𝑎𝑡𝑐ℎ 𝑜𝑛. 𝐻𝑒𝑟𝑒, 𝑜𝑟 𝑒𝑙𝑠𝑒𝑤ℎ𝑒𝑟𝑒. 𝑊𝑒 𝑤𝑖𝑙𝑙 𝑓𝑎𝑐𝑒 𝑡ℎ𝑒 𝑟𝑒𝑝𝑒𝑟𝑐𝑢𝑠𝑠𝑖𝑜𝑛𝑠, 𝑤ℎ𝑒𝑛 𝑠ℎ𝑒 𝑑𝑜𝑒s. Through the flap of the tent, the sky is endless and dark, empty of stars. White mist has wrapped the rest of the circus in frosty silence. But there is possibility in darkness—in thunderstorms—as well as in fear. Outside, the detective waits for you in the shadow of an oak tree, his eyes as bright and clear as brass. He raises a hand. You kneel and offer him your neck."; 
const penanceEnding = "After you leave Ludmilla’s, you are uncertain what is real and what is fiction. You look back to reassure yourself that her tent remains behind you, but a cloud of silver fog has obscured your vision: a faint ball of amber light flickers weakly in the distance and then flares out. That night, you catapult awake, fleeing the grip of one nightmare into the arms of another. Three cloaked figures loom eagerly over your body. A leviathan tangle of eyes and tendrils coils mindlessly in the air nearby. The vicious, monotonous pounding of drums surrounds you. And there she is, in the center of it all. Natalia, alive. Natalia, ethereal and terrifying in flowing robes of ivory and obsidian. Natalia, with beige, misshapen doll-creatures skittering around and up and inside of her skirts... She binds you to Euclidean’s night-terror of an altar with iron chains. The cloaked figures do not help or even offer to help. You try to point this out to her, but your words distort into unintelligible croaking, and you realize in a detached sort of manner that your mouth rings firmly of copper forceps and blood. Natalia spreads her arms to the sky, as if welcoming a powerful storm after a long, thankless drought. The tentacles shiver in delight or impatience. She begins to sing: 𝑜 𝑀𝑜𝑟𝑔𝑎𝑛𝑎, 𝑡ℎ𝑒 𝑖𝑛𝑒𝑣𝑖𝑡𝑎𝑏𝑙𝑒 𝑔𝑟𝑖𝑛𝑑𝑖𝑛𝑔, 𝑡ℎ𝑒 𝑟𝑖𝑣𝑒𝑟, 𝑡ℎ𝑒 𝑡𝑖𝑔𝑒𝑟, 𝑣𝑎𝑛𝑞𝑢𝑖𝑠ℎ𝑒𝑑 𝑎𝑠 𝑠𝑝𝑒𝑙𝑙𝑠, 𝑣𝑎𝑛𝑞𝑢𝑖𝑠ℎ𝑒𝑑 𝑎𝑠 𝑡ℎ𝑒 𝑚𝑎𝑛𝑦-𝑙𝑖𝑚𝑏𝑒𝑑 𝑠𝑢𝑛, 𝑡ℎ𝑒𝑦 𝑠𝑜𝑢𝑔ℎ𝑡 𝑦𝑜𝑢𝑟 𝑣𝑖𝑠𝑖𝑜𝑛𝑠 𝑠𝑢𝑝𝑝𝑟𝑒𝑠𝑠𝑒𝑑, 𝑦𝑜𝑢 𝑠ℎ𝑎𝑙𝑙 𝑛𝑜𝑡 𝑏𝑒 𝑠𝑢𝑝𝑝𝑟𝑒𝑠𝑠𝑒𝑑. The sky unfurls with a world-shattering roar. When it comes, the pain is dark and smooth, like a polished jewel.";
const escapeImage = "New Escape Ending.png"
const penanceImage = "Penance Ending.png"

function initializeGame() {
    escapeCount = 0;
    penanceCount = 0;
    currentScene = 0;
    sceneType = 'intro';
    document.getElementById('content').innerText = introductionScene;
    document.getElementById('tarot').src = introductionImage;
    document.getElementById("nextbutton").innerText = "Next";
}
window.onload = initializeGame;

// Function to display the next scene
function nextScene() {
    if (currentScene >= scenePairs.length) {
        if (escapeCount > penanceCount) {
            document.getElementById('content').innerText = escapeEnding;
            document.getElementById('tarot').src = escapeImage;
        } else {
            document.getElementById('content').innerText = penanceEnding;
            document.getElementById('tarot').src = penanceImage;
        }
        document.getElementById("nextbutton").innerText = "Try again?";
        currentScene = -1;
        return
    }

    if (document.getElementById("nextbutton").innerText == "Try again?") {
        initializeGame();
    } else {
        // Determine if the next scene is an Escape or Penance scene (50-50 chance)
        const isNextSceneEscape = Math.random() < 0.5;
        console.log(isNextSceneEscape);

        // Get the next scene text
        console.log("current scene is: ", currentScene);
        const nextSceneText = isNextSceneEscape ? scenePairs[currentScene].escape : scenePairs[currentScene].penance;
        document.getElementById('content').innerText = nextSceneText;
        document.getElementById('tarot').src = scenePairs[currentScene].image;
        
        // Update the counters
        if (sceneType == 'escape') {
            escapeCount++;
        } else if (sceneType == 'penance') {
            penanceCount++;
        }

        // Increment the current scene
        currentScene = currentScene + 1;

        console.log("escapeCount", escapeCount);
        console.log("penanceCount", penanceCount);

        // Finally, set the current scene state based on dice roll
        sceneType = isNextSceneEscape ? 'escape' : 'penance';
    }
}
