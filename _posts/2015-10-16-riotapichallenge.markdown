---
layout: portfolio_entry_small
title:  "Ripples"
description:  "First Place Winner of the Riot Games API Challenge using machine learning to look at the effects of item patch changes"
image: "/img/ripples.png"
datedone:  "August 2015"
categories: design, web, data
color: '#f4c97b'
---

We built Ripples as an entry to the second [Riot Games API Challenge](https://developer.riotgames.com/discussion/announcements/show/2lxEyIcE).  [We won first place](https://developer.riotgames.com/api-challenge/august2015) in our category, Ability Power Item Changes.  Check out Ripples live [here!](http://maryschmidt.github.io/ripples/)

We decided to investigate how people used Ability Power (AP) items differently after the Massive Overhaul of All Things AP in League of Legends Patch 5.14.  But we weren't only interested in AP items.  Mages get all the attention.  What about the tanks?  What about the supports?  What about the...junglers?!?! *gasp* What kind of ripples did 5.14 thrust upon the sea of ranked play?

Working with a dataset seeded by the awesome API devs at Riot Games, we built a Ruby on Rails app to find the ripples in their various forms, then visualized them with D3.js.  Let's start with one of the basics:

![AP Items](/img/ripples-front.png)

But we can do better than that!  You can check out how much your favorite champion was affected by the changes:

![Champions](/img/ripples-diff.png)

And finally, the really cool stuff.  We applied machine learning to dig into how similar champions grouped together before and after the changes.  Specifically, we used [hierarchical agglomerative clustering](https://github.com/maryschmidt/ripples/blob/master/app/models/concerns/clusterable.rb#L11) on champion builds:

![Explore](/img/ripples-explore.png)
