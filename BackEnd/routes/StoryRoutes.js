const express = require('express');
const router = express.Router();
const Story = require('../model/Story');

const patterns = [
    {
      pattern: ['🏃', '🌧️'],
      templates: [
        '{person} ran from the rain',
        'Quick dash through the storm'
      ]
    },
    {
      pattern: ['🐱', '🐟'],
      templates: [
        'The cat spotted its favorite meal',
        'Feline fishing adventures'
      ]
    }
   ];

   function translateEmojis(emojiSequence){
    const matchedPattern = patterns.find(rule) ==>
        rule.pattern.every((emoji.index) => emojiSequence[index] === emoji);

    if (matchedPattern){
        const randomIndex =ath.floor(math.random() * matchedPattern.templates.length);
        return matchedPattern.templates[randomIndex];
    }
    return 'no translation avaible';

   }

   // create new story
   router.post('/stories', async(req ,res)=>{
    const {emojiSequence,autherNickName} = req.body ;

    if( ! emojiSequence || emojiSequence.length == 0){
        return res.status(400).json({ error: 'Emoji sequence is required ' });
    }

    const translation = translateEmojis(emojiSequence);
    const story = new Story({emojiSequence ,translation ,autherNickName});

    await story.save();
    res.status(200).json(story);

   })

   //Get all stories
   router.get('/stories', async(req ,res)=>{
    const  stories = await Story.find().sort({createAt: -1});
    res.status(200).json(stories);
   })

   //Get popular stories
   router.get('/stories/popular', async(req ,res)=>{
    const  stories = await Story.find().sort({likes: -1}).limit(10); 
    res.status(200).json(stories);
   })


   module.exports = router ;
